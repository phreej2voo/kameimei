<?php

namespace App\Http\Controllers;

use App\Models\User;
use EasyWeChatComposer\EasyWeChat;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Jenssegers\Agent\Agent;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function wxOpenVerify(Request $request)
    {
        $echoStr = $request->input('echostr');
        $signature = $request->input('signature');
        $timestamp = $request->input('timestamp');
        $nonce = $request->input('nonce');
        $token = config('wechat.open_platform.default.token');
        $tmpArr = array($token, $timestamp, $nonce);
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode($tmpArr);
        $tmpStr = sha1($tmpStr);
        if ($tmpStr == $signature) {
            exit($echoStr);
        } else {
            exit('failed');
        }
    }

    /**
     * @throws GuzzleException
     */
    public function wx_auth(Request $request)
    {
        if (Auth::hasUser()) {
            return redirect()->away(route('view.home'));
        }
        $wechat = session('wechat.oauth_user.default');
        $openid = $wechat['id'];
        $unionid = $wechat['token_response']['unionid'] ?? '';
        $nickName = $wechat['nickname'];
        $avatar = $wechat['avatar'];
        $avatar = storeFile($avatar, 'scene');
        $user = User::updateOrCreate($nickName, $openid, $avatar, $unionid, 'wx', 'wx');
        Auth::loginUsingId($user->id);
        $request->session()->regenerate();
        $request->session()->put('pay_openid', $user->wx_openid);
        return redirect()->away(route('view.home'));
    }

    public function wx_open_auth(Request $request)
    {
        if (Auth::hasUser()) {
            return redirect()->away(route('view.home'));
        }
        $wechat = session('wechat.oauth_user.open-platform');
        $openid = $wechat['id'];
        $unionid = $wechat['token_response']['unionid'] ?? '';
        $nickName = $wechat['nickname'];
        $avatar = $wechat['avatar'];
        $avatar = storeFile($avatar, 'scene');
        $user = User::updateOrCreate($nickName, $openid, $avatar, $unionid, 'wx', 'open');
        Auth::loginUsingId($user->id);
        $request->session()->regenerate();
        $request->session()->put('pay_openid', $user->open_openid);
        return redirect()->away(route('view.home'));
    }

    public function phone_auth(Request $request)
    {
        $phone = $request->input('username');
        $password = $request->input('password');
        $action = $request->input('act');
        $user = User::query()->where('phone', $phone)->first();
        if ($action == 'login') {
            if (!empty($user)) {
                if (decrypt($user->password) != $password) {
                    return $this->error('密码不正确');
                }
                Auth::loginUsingId($user->id);
            } else {
                return $this->error('手机号不存在');
            }
        } else {
            if (!empty($user)) {
                return $this->error('手机号已存在，请勿重复注册');
            } else {
                $user = new User([
                    'name' => $phone,
                    'phone' => $phone,
                    'password' => encrypt($password)
                ]);
                $user->save();
                Auth::loginUsingId($user->id);
            }
        }

        return $this->success();
    }

    public function login()
    {
        $agent = new Agent();
        $loginUrl = 'javascript:;';
        if ($agent->isWeChat()) {
            $loginUrl = route('api.wxAuth');
        } elseif (!$agent->isMobile() && !$agent->isTablet()) {
            $loginUrl = route('api.wxOpenAuth');
        }
        return view('login', ['loginUrl' => $loginUrl]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return $this->successMsg('已成功退出');
    }

    public function qqLogin(Request $request)
    {
        return Socialite::driver('qq')->redirect();
    }

    public function qqLoginNotify(Request $request)
    {
        $user = Socialite::driver('qq')->user();
        $openid = $user->id;
        $nickName = $user->nickname;
        $avatar = $user->avatar;
        !empty($avatar) && $avatar = storeFile($avatar, 'scene');
        $userInfo = Http::get('https://graph.qq.com/oauth2.0/me?access_token=' . $user->accessTokenResponseBody['access_token'] . '&unionid=1&fmt=json');
        $userInfo = json_decode($userInfo, true);
        $unionid = $userInfo['unionid'] ?? '';
        $user = User::updateOrCreate($nickName, $openid, $avatar, $unionid, 'qq', 'qq');
        Auth::loginUsingId($user->id);
        $request->session()->regenerate();
        return redirect()->away(route('view.home'));
    }
}
