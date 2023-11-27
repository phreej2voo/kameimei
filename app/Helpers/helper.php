<?php

use App\Models\Scene;
use EasyWeChat\OfficialAccount\Application;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Jenssegers\Agent\Agent;

function getDomain(): string
{
    return rtrim(env('APP_URL', 'https://m.daxitie.com/'), '/') . '/';
}

function getDomainArr(): array
{
    return [
        'editor_domain' => getDomain(),
        'api_domain' => getDomain(),
        'preview_domain' => getDomain(),
        'api_host' => $_SERVER['HTTP_HOST'],
        'upload_api' => parse_url(getDomain(), PHP_URL_HOST) . parse_url(route('api.upload'), PHP_URL_PATH)
    ];
}

/**
 * @throws \GuzzleHttp\Exception\GuzzleException
 */
function storeFile($path, $disk = 'scene'): string
{
    $fileName = getFileMd5($path);
    $extension = pathinfo($path)['extension'] ?? '';
    $fullName = $fileName . (!empty($extension) ? ('.' . $extension) : '');
    $query = parse_url($path, PHP_URL_QUERY);
    if (!Storage::disk($disk)->exists($fullName)) {
        try {
            if (strpos($path, '/tmp/') !== false) {
                $contents = file_get_contents($path);
            } else {
                $contents = (new Client(['verify' => false]))->request('GET', $path)->getBody()->getContents();
            }
            Storage::disk($disk)->put($fullName, $contents);
        } catch (\Exception $e) {
        }
    }
    if (!empty($query)) {
        return $fullName . '?' . $query;
    }
    return $fullName;
}

function getFileMd5($file)
{
    try {
        return md5_file($file);
    } catch (\Exception $e) {
        return md5($file);
    }
}

function generateSceneCode()
{
    $tryCount = 0;
    while ($tryCount < 5) {
        $code = strtoupper(uniqid('DXT'));
        if (!Scene::query()->where('code', $code)->exists()) {
            return $code;
        }
        $tryCount++;
    }
    admin_error('生成模板编号失败，请重试');
    return back();
}

function isWeixin()
{
    $agent = new Agent();
    return $agent->isWeChat();
}

function getWXAccessToken()
{
    $currentTime = time();
    $file = resource_path('json/wx_access_token.json');
    if (file_exists($file)) {
        $tokenInfo = json_decode(file_get_contents($file), true);
        if (!empty($tokenInfo) && $tokenInfo['expire_time'] > $currentTime) {
            return $tokenInfo['access_token'];
        }
    }
    $url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=%s&secret=%s';
    $url = sprintf($url, config('wechat.official_account.default.app_id'), config('wechat.official_account.default.secret'));
    $response = Http::get($url);
    if (!empty($response)) {
        $response = json_decode($response, true);
        if (!empty($response) && !empty($response['access_token'])) {
            $response['expire_time'] = $currentTime + $response['expires_in'];
            file_put_contents($file, json_encode($response));
            return $response['access_token'];
        }
    }
    return '';
}

function getWXTicket()
{
    $accessToken = getWXAccessToken();
    $currentTime = time();
    $file = resource_path('json/wx_ticket.json');
    if (file_exists($file)) {
        $ticketInfo = json_decode(file_get_contents($file), true);
        if (!empty($ticketInfo) && $ticketInfo['expire_time'] > $currentTime) {
            return $ticketInfo['ticket'];
        }
    }
    $url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=%s&type=jsapi';
    $url = sprintf($url, $accessToken);
    $response = Http::get($url);
    if (!empty($response)) {
        $response = json_decode($response, true);
        if (!empty($response) && !empty($response['ticket'])) {
            $response['expire_time'] = $currentTime + $response['expires_in'];
            file_put_contents($file, json_encode($response));
            return $response['ticket'];
        }
    }
    return '';
}

function getWXConfig()
{
    /**
     * @var $app Application
     */
    $app = app('wechat.official_account');
    $jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone", "chooseImage", "previewImage", "uploadImage", "chooseWXPay", "updateAppMessageShareData", "updateTimelineShareData", "getLocalImgData"];
    return $app->jssdk->buildConfig($jsApiList, false, false, false, [], Route::currentRouteName() == 'view.home' ? request()->fullUrl() . '/' : '');

}

// function getWXConfig()
// {
//     $params = [
//         'jsapi_ticket' => getWXTicket(),
//         'noncestr' => uniqid(),
//         'timestamp' => time(),
//         'url' => request()->fullUrl() . (Route::currentRouteName() == 'view.home' ? '/' : '')
//     ];
//     $signStr = urldecode(http_build_query($params));
//     $signature = sha1($signStr);
//     return [
//         'debug' => false,
//         'beta' => false,
//         'jsApiList' => ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone", "chooseImage", "previewImage", "uploadImage", "chooseWXPay", "updateAppMessageShareData", "updateTimelineShareData", "getLocalImgData"],
//         'appId' => config('wechat.official_account.default.app_id'),
//         "nonceStr" => $params['noncestr'],
//         "timestamp" => $params['timestamp'],
//         "url" => $params['url'],
//         "signature" => $signature
//     ];
// }


