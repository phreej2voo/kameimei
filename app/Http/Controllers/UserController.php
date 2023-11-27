<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        return $this->success(['list' => [
            'id' => $user->id,
            'name' => $user->name,
            'avatar' => Storage::disk('scene')->url($user->avatar),
            'end_time' => '1970-01-01',
            'group' => 1,
            'get_tpl_enable' => 1,
        ]]);
    }

    public function getOpenid(Request $request)
    {
        $code = $request->input('code');
        $account = isWeixin() ? 'default' : 'open-platform';
        $wechat = session('wechat.oauth_user.' . $account);
        session(['pay_openid' => $wechat['id']]);
        return redirect()->away('/#/rechargeVip/' . $code);
    }

    public function recharge()
    {
        $user = Auth::user();
        $result = [
            'kb' => $user->kb,
            'group' => $user->group,
            'end_time' => $user->end_time
        ];
        return $this->success($result);
    }

    public function accountInfo()
    {
        $result = json_decode(file_get_contents(resource_path('json/account_info.json')), true);
        return $this->response($result);
    }
}
