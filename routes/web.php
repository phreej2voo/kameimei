<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommonController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\KmmController;
use App\Http\Controllers\MusicController;
use App\Http\Controllers\PayController;
use App\Http\Controllers\SceneController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () { return view('home'); })->name('view.home');

Route::group([] ,function() {
    Route::get('open-platform/serve', [AuthController::class, 'wxOpenVerify'])->name('api.wxOpenVerify');

    Route::get('login', [AuthController::class, 'login']);

    Route::post('card/login/mobile_login', [AuthController::class, 'phone_auth'])->name('api.phoneAuth');

    Route::any('login/qqNotify', [AuthController::class, 'qqLoginNotify'])->name('api.qqLoginNotify');

    Route::get('card/login/qq_login', [AuthController::class, 'qqLogin'])->name('api.qqLogin');

    Route::get('h5/view/home_new', [HomeController::class, 'homeNew'])->name('api.homeNew');

    Route::get('h5/view/info', [SceneController::class, 'info'])->name('api.viewInfo');

    Route::get('h5/view/search', [SceneController::class, 'search'])->name('api.search');

    Route::get('h5/view/tpl_category', [HomeController::class, 'tpl_category'])->name('api.tplCategory');

    Route::get('h5/view/list_by_cate', [SceneController::class, 'list_by_cate'])->name('api.listByCat');

    Route::get('h5/view/list_by_big_cate', [SceneController::class, 'list_by_big_cate'])->name('api.listByCat');

    Route::get('eqs/class/expose_types', [KmmController::class, 'exposeTypes'])->name('api.exposeTypes');

    Route::get('card/login/wechat_login', [AuthController::class, 'wx_auth'])->middleware('wechat.oauth')->name('api.wxAuth');

    Route::get('card/login/wechat_open_login', [AuthController::class, 'wx_open_auth'])->middleware('wechat.oauth:open-platform')->name('api.wxOpenAuth');

    Route::get('v/{code}', [SceneController::class, 'view'])->name('view.view');
    
    Route::get('long/v/{code}', [SceneController::class, 'longView'])->name('view.longView');

    Route::get('pv/{code}', [SceneController::class, 'view'])->name('view.preview');

    Route::get('h5/view/egift', [SceneController::class, 'gift'])->name('api.gift');

    Route::get('h5/view/barrage', [SceneController::class, 'barrage'])->name('api.barrage');

    Route::post('h5/view/barrage', [SceneController::class, 'addBarrage'])->name('api.addBarrage');

    Route::get('h5/view/luckmoney', [SceneController::class, 'luckMoney'])->name('api.luckMoney');

    Route::any('pay/wxNotify', [PayController::class, 'wxNotify'])->name('api.wxNotify');

    Route::get('music/upload', [MusicController::class, 'uploadPage'])->name('view.musicUpload');

    Route::post('music/upload', [MusicController::class, 'upload'])->name('api.musicUpload');

    Route::get('music/upload/list', [MusicController::class, 'getUserUploadList'])->name('api.getUserUploadList');

    Route::get('music/del', [MusicController::class, 'del'])->name('api.delMusic');

    Route::get('h5/edit/music_uptoken', [MusicController::class, 'getUptoken'])->name('api.getMusicUpToken');

    Route::post('card/pay/luckmoney', [PayController::class, 'luckMoney'])->name('api.payLuckMoney');

    Route::post('card/pay/egift', [PayController::class, 'gift'])->name('api.payGift');

    Route::get('h5/api/kf_wechat', function () {
        return (new \App\Http\Controllers\Controller())->success(['qrcode' => asset('static/img/kf_qrcode.png')]);
    });
});

Route::group(['middleware' => 'auth'], function () {

    Route::post('card/login/logout', [AuthController::class, 'logout'])->name('api.logout');

    Route::get('card/my/index', [UserController::class, 'index'])->name('view.myIndex');

    Route::get('card/my/get_openid', [UserController::class, 'getOpenid'])->name('api.getOpenid')->middleware('my.wechat.oauth:default,snsapi_base');

    Route::get('card/my/recharge', [UserController::class, 'recharge'])->name('api.recharge');

    Route::get('h5/edit/list', [SceneController::class, 'list_by_user'])->name('api.userSceneList');

    Route::get('h5/edit/buy', [SceneController::class, 'priceInfo'])->name('api.priceInfo');

    Route::post('h5/edit/buy', [SceneController::class, 'buy'])->name('api.buyScene');

    Route::post('card/pay/vip', [PayController::class, 'vip'])->name('api.vip');

    Route::get('h5/edit/info', [SceneController::class, 'info'])->name('api.editInfo');

    Route::get('h5/edit/uptoken', [SceneController::class, 'getUpToken'])->name('api.getUpToken');

    Route::post('h5/edit/save_page', [SceneController::class, 'savePage'])->name('api.savePage');

    Route::get('h5/edit/copy_page', [SceneController::class, 'copyPage'])->name('api.copyPage');

    Route::post('h5/edit/del_page', [SceneController::class, 'deletePage'])->name('api.deletePage');

    Route::get('h5/edit/setting', [SceneController::class, 'setting'])->name('api.setting');
    Route::post('h5/edit/setting', [SceneController::class, 'savesetting'])->name('api.savesetting');
    Route::get('h5/edit/share', [SceneController::class, 'shareInfo'])->name('api.shareInfo');

    Route::post('h5/edit/share', [SceneController::class, 'editShareInfo'])->name('api.editShareInfo');

    Route::post('file/upload', [CommonController::class, 'upload'])->name('api.upload');

    Route::get('h5/edit/music_class', [MusicController::class, 'getMusicCategory'])->name('api.getMusicCategory');

    Route::get('h5/edit/music', [MusicController::class, 'getMusicList'])->name('api.getMusicList');

    Route::post('h5/edit/music', [SceneController::class, 'updateMusicInfo'])->name('api.updateMusicInfo');

    Route::get('h5/edit/music_token', [MusicController::class, 'getMusicToken'])->name('api.getMusicToken');

    Route::get('h5/edit/barrage_list', [SceneController::class, 'barrage'])->name('api.barrageList');

    Route::get('h5/edit/barrage_del', [SceneController::class, 'deleteBarrage'])->name('api.deleteBarrage');

    Route::post('h5/edit/move', [SceneController::class, 'move'])->name('api.move');

    Route::post('eqs/r/{sceneId}/{pageId}/{buttonId}', [SceneController::class, 'addFormData'])->name('api.addFormData');

    Route::get('h5/edit/data_list', [SceneController::class, 'getFormData'])->name('api.getFormData');

    Route::get('h5/edit/data_info', [SceneController::class, 'getFormDataInfo'])->name('api.getFormDataInfo');

    Route::get('h5/edit/export', [SceneController::class, 'exportFormData'])->name('api.exportFormData');

    Route::post('h5/edit/specify_invite_add', [SceneController::class, 'saveInvite'])->name('api.addInvite');

    Route::post('h5/edit/specify_invite_edit', [SceneController::class, 'saveInvite'])->name('api.updateInvite');

    Route::get('h5/edit/specify_invite_edit', [SceneController::class, 'getInvite'])->name('api.getInvite');

    Route::get('h5/edit/specify_invite_setting', [SceneController::class, 'getInviteSetting'])->name('api.getInviteSetting');

    Route::get('h5/edit/specify_invite_list', [SceneController::class, 'inviteList'])->name('api.inviteList');

    Route::get('h5/edit/specify_invite_url', [SceneController::class, 'getInviteUrl'])->name('api.getInviteUrl');

    Route::post('h5/edit/copy_scene', [SceneController::class, 'copyScene'])->name('api.copyScene');

    Route::get('h5/edit/egift_list', [SceneController::class, 'giftList'])->name('api.giftList');

    Route::get('h5/edit/luckmoney_list', [SceneController::class, 'moneyList'])->name('api.moneyList');

    Route::get('h5/edit/cash_sum', [SceneController::class, 'cashSum'])->name('api.cashSum');

    Route::get('h5/edit/submit_cash', [SceneController::class, 'getSubmitCash'])->name('api.getSubmitCash');

    Route::post('h5/edit/submit_cash', [SceneController::class, 'submitCash'])->name('api.submitCash');

    Route::get('h5/edit/cash_log', [SceneController::class, 'cashLog'])->name('api.cashLog');

    Route::get('card/kf/faq', [SceneController::class, 'getFAQ'])->name('api.getFAQ');

    Route::get('h5/edit/remove_end_page', [SceneController::class, 'getRemoveEndPage'])->name('api.getRemoveEndPage');

    Route::post('h5/edit/remove_end_page', [SceneController::class, 'removeEndPage'])->name('api.removeEndPage');

    Route::post('/h5/edit/wx_upload', [SceneController::class, 'wxUpload'])->name('api.wxUpload');

    Route::post('h5/edit/del_cdn_file', [SceneController::class, 'wxDel'])->name('api.wxDel');
});

Route::group(['middleware' => 'auth'], function () {
    Route::get('c/{id}', [SceneController::class, 'pcEdit'])->name('view.pcEdit');

    Route::get('account/info', [UserController::class, 'accountInfo'])->name('api.accountInfo');

    Route::get('m/e/scene/detail/{id}', [SceneController::class, 'sceneDetail'])->name('api.sceneDetail');
    
    Route::get('eqs/banners', [SceneController::class, 'banners'])->name('api.banners');

    Route::get('m/e/preference/getUserPreference/{id}', [SceneController::class, 'userPreference'])->name('api.userPreference');

    Route::get('m/e/font/my', [SceneController::class, 'fontList'])->name('api.fontList');

    Route::get('m/e/scene/pages/{id}', [SceneController::class, 'pageList'])->name('api.pageList');
    
    Route::get('m/e/scene/pageSort', [SceneController::class, 'pageSort'])->name('api.pageSort');
    
    Route::get('material/image', [SceneController::class, 'image'])->name('api.image');
    
    Route::get('api/product/cat/listProdByParam', [SceneController::class, 'listProdByParam'])->name('api.image');
    
    Route::post('m/base/file/uptokens', [SceneController::class, 'upTokens'])->name('api.upTokens');
    
    Route::get('m/base/file/uptoken', [SceneController::class, 'upTokens'])->name('api.upTokens');

    Route::post('m/e/font/info', [SceneController::class, 'fontList'])->name('api.fontList');

    Route::get('api/category/getCategoryListByTopId', [SceneController::class, 'banners'])->name('api.CategoryList');

    Route::get('m/e/scene/get/searchtpl', [SceneController::class, 'banners'])->name('api.searchTpl');

    Route::post('m/e/scene/save', [SceneController::class, 'pcSavePage'])->name('api.pcSavePage');
    
    Route::post('m/e/scene/pageNum/update', [SceneController::class, 'updatePageNum'])->name('api.updatePageNum');
});