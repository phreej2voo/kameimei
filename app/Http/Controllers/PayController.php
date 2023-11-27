<?php

namespace App\Http\Controllers;

use App\Models\Gift;
use App\Models\GiftRecord;
use App\Models\Scene;
use App\Models\User;
use App\Models\UserPayRecord;
use EasyWeChat\Payment\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use Jenssegers\Agent\Agent;

class PayController extends Controller
{
    public const PRODUCT_MAP = [
        -1 => ['code' => 'luck_money', 'name' => ''],
        -2 => ['code' => 'gift', 'name' => ''],
        20 => ['code' => 'charge_20', 'name' => '充值20喜币'],
        50 => ['code' => 'charge_50', 'name' => '充值50喜币'],
        58 => ['code' => 'vip_one_month', 'name' => '充值会员一个月'],
        118 => ['code' => 'vip_three_month', 'name' => '充值会员三个月'],
        328 => ['code' => 'vip_twelve_month', 'name' => '充值会员十二个月'],
    ];

    public const VIP_PERIOD = [
        'vip_one_month' => 86400 * 30,
        'vip_three_month' => 86400 * 30 * 3,
        'vip_twelve_month' => 86400 * 365
    ];

    public function vip(Request $request)
    {
        $price = $request->input('price', false);
        $result = [
            'group' => 1
        ];
        if (!empty($price) && !empty(self::PRODUCT_MAP[$price])) {
            $productCode = self::PRODUCT_MAP[$price]['code'];
            $productName = self::PRODUCT_MAP[$price]['name'];
            try {
                $payResult = $this->handleWxPay($price, $productCode, $productName, $request->all(), Auth::user()->id);
                $result = array_merge($result, $payResult);
            } catch (\Exception $e) {
                return $this->error($e->getMessage());
            }
        }

        return $this->success($result);
    }

    public function gift(Request $request)
    {
        $sceneId = $request->input('id');
        $catId = $request->input('egift_sid');
        $name = $request->input('name');
        $giftId = $request->input('gid');
        $scene = Scene::query()->where('sub_class_id', $catId)->find($sceneId);
        if (!$scene) {
            return $this->error('非法请求');
        }
        $gift = Gift::query()->find($giftId);
        if (!$gift) {
            return $this->error('非法请求');
        }
        if (!$name) {
            return $this->error('名字不能为空');
        }
        $payload = [
            'sceneId' => $sceneId,
            'catId' => $catId,
            'name' => $name,
            'gift' => $gift->toArray(),
        ];
        $price = $gift->price;
        $productCode = 'gift';
        $productName = $gift->title;
        $result = [];
        if (!empty($price) && !empty($name)) {
            try {
                $result = $this->handleWxPay($price, $productCode, $productName, $payload, 0);
            } catch (\Exception $e) {
                return $this->error($e->getMessage());
            }
        }

        return $this->success($result);
    }

    public function luckMoney(Request $request)
    {
        $sceneId = $request->input('id');
        $name = $request->input('name');
        $price = $request->input('fee', 0);
        $scene = Scene::query()->find($sceneId);
        if (!$scene) {
            return $this->error('非法请求');
        }
        if (!$name) {
            return $this->error('名字不能为空');
        }
        if (!$price || $price < 1) {
            return $this->error('金额不能小于1元');
        }
        $payload = [
            'sceneId' => $sceneId,
            'name' => $name,
            'price' => $price,
        ];
        $productCode = 'luck_money';
        $productName = '礼金';
        $result = [];
        try {
            $result = $this->handleWxPay($price, $productCode, $productName, $payload, 0);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
        return $this->success($result);
    }

    /**
     * @throws \Exception
     */
    private function handleWxPay($price, $productCode, $productName, $payload = [], $userId = 0)
    {
        $tradeNo = $this->generateTradeNo($productCode);
        $agent = new Agent();
        $tradeType = $agent->isWeChat() ? 'JSAPI' : 'NATIVE';
        $orderResult = [];
        try {
            $params = [
                'body' => $productName,
                'product_id' => $productCode,
                'out_trade_no' => $tradeNo,
                'trade_type' => $tradeType,
                'total_fee' => $price * 100,
            ];
            if (Session::has('pay_openid')) {
                $params['openid'] = Session::get('pay_openid');
            } elseif (Auth::hasUser()) {
                $params['openid'] = Auth::user()->wx_openid;
            }
            $orderResult = $this->createOrder($params);
            if (empty($orderResult) || $orderResult['return_code'] != 'SUCCESS') {
                $errorMsg = '提交订单失败';
                if (!empty($orderResult)) {
                    $errorMsg = $errorMsg . '[' . $orderResult['return_code'] . ']' . $orderResult['return_msg'];
                }
                throw new \Exception($errorMsg);
            }
            if ($orderResult['result_code'] != 'SUCCESS') {
                $errorMsg = '生成订单失败[' . $orderResult['err_code'] . ']' . $orderResult['err_code_des'];
                throw new \Exception($errorMsg);
            }
            $payRecord = new UserPayRecord([
                'user_id' => $userId,
                'payload' => json_encode($payload),
                'product_code' => $productCode,
                'trade_no' => $tradeNo,
                'price' => $price,
                'pay_status' => UserPayRecord::PAY_STATUS_UNPAID,
                'trade_info' => $orderResult
            ]);
            if (!$payRecord->save()) {
                throw new \Exception('保存订单信息失败');
            }
            if ($agent->isWeChat()) {
                /**
                 * @var $app Application
                 */
                $app = app('wechat.payment');
                $prepayId = $orderResult['prepay_id'];
                return [
                    'pay_json' => $app->jssdk->bridgeConfig($prepayId, false),
                    'type' => $agent->isWeChat() ? 'wechat' : 'pc',
                ];
            } else {
                return [
                    'pay_json' => $orderResult['code_url'],
                    'type' => 'pc'
                ];
            }
        } catch (\Exception $e) {
            throw new \Exception('创建订单失败:' . $e->getMessage());
        } finally {
            Log::info('createWXOrder:' . json_encode(['params' => $params, 'result' => $orderResult]));
        }
    }

    private function createOrder($params)
    {
        /**
         * @var $app Application
         */
        $app = app('wechat.payment');
        return $app->order->unify($params);
    }

    private function generateTradeNo()
    {
        $userId = Auth::user() ? Auth::user()->id : mt_rand(1, 99999);
        $todayCount = UserPayRecord::query()->where('create_time', '>=', date('Y-m-d'))->count();
        return sprintf('%s%s%s', date('Ymd'), str_pad($userId, 8, '0', STR_PAD_LEFT), str_pad($todayCount + 1, 5, '0', STR_PAD_LEFT));
    }

    public function wxNotify()
    {
        /**
         * @var $app Application
         */
        $app = app('wechat.payment');
        return $app->handlePaidNotify(function ($message, $fail) {
            $tradeNo = $message['out_trade_no'];
            $order = UserPayRecord::query()->where('trade_no', $tradeNo)->first();
            if (empty($order) || $order->paid_at) {
                return true;
            }
            $order->notify_result = $message;
            $order->save();
            if ($message['return_code'] === 'SUCCESS') {
                if ($message['result_code'] === 'SUCCESS') {
                    $order->paid_at = date('Y-m-d H:i:s');
                    $order->pay_status = UserPayRecord::PAY_STATUS_PAID;
                    $this->handlePaidSuccess($order);
                } elseif ($message['result_code'] === 'FAIL') {
                    $order->pay_status = UserPayRecord::PAY_STATUS_ERROR;
                }
            } else {
                return $fail('通信失败，请稍后通知我');
            }
            $order->save();
            return true;
        });
    }

    public function handlePaidSuccess($order)
    {
        switch ($order->product_code) {
            case 'charge_20':
            case 'charge_50':
                $incCount = intval(str_replace('charge_', '', $order->product_code));
                User::query()->where('id', $order->user_id)->increment('kb', $incCount);
                break;
            case 'vip_one_month':
            case 'vip_three_month':
            case 'vip_twelve_month':
                $user = User::query()->find($order->user_id);
                if (!empty($user)) {
                    $startDate = $user->isVIP() ? $user->end_time : date('Y-m-d');
                    $endTime = date('Y-m-d', strtotime($startDate) + self::VIP_PERIOD[$order->product_code]);
                    $user->end_time = $endTime;
                    $user->group = User::GROUP_VIP;
                    $user->save();
                }
                break;
            case 'gift':
                $payload = json_decode($order->payload, true);
                $giftRecord = new GiftRecord([
                    'scene_id' => $payload['sceneId'],
                    'type' => GiftRecord::TYPE_GIFT,
                    'title' => $payload['gift']['title'],
                    'icon' => $payload['gift']['icon'],
                    'name' => $payload['name'],
                    'price' => $payload['gift']['price'],
                ]);
                $giftRecord->save();
                break;
            case 'luck_money':
                $payload = json_decode($order->payload, true);
                $giftRecord = new GiftRecord([
                    'scene_id' => $payload['sceneId'],
                    'type' => GiftRecord::TYPE_MONEY,
                    'title' => '礼金',
                    'icon' => '',
                    'name' => $payload['name'],
                    'price' => $payload['price'],
                ]);
                $giftRecord->save();
            default:
                break;
        }
    }
}
