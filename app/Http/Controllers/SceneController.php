<?php

namespace App\Http\Controllers;

use App\Models\Barrage;
use App\Models\CashRecord;
use App\Models\Category;
use App\Models\FormData;
use App\Models\Gift;
use App\Models\GiftRecord;
use App\Models\InviteList;
use App\Models\Scene;
use App\Models\ScenePage;
use App\Models\User;
use EasyWeChat\Kernel\Exceptions\InvalidArgumentException;
use EasyWeChat\Kernel\Exceptions\InvalidConfigException;
use EasyWeChat\Kernel\Exceptions\RuntimeException;
use EasyWeChat\Kernel\Http\StreamResponse;
use EasyWeChat\OfficialAccount\Application;
use Encore\Admin\Form;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use TencentCloud\Common\Credential;
use TencentCloud\Common\Profile\ClientProfile;
use TencentCloud\Common\Profile\HttpProfile;
use TencentCloud\Common\Exception\TencentCloudSDKException;
use TencentCloud\Tts\V20190823\TtsClient;
use TencentCloud\Tts\V20190823\Models\TextToVoiceRequest;

class SceneController extends Controller
{
    public function view($code, Request $request)
    {
        $scene = Scene::query()->where('code', $code)->first();
        if (!$scene) {
            return $this->error(sprintf('模板[%s]不存在', $scene));
        }
        $result = $scene->toArray();
        $result['bgAudio'] = [
            'url' => $scene['music_url'],
            'id' => 0,
            'name' => 'none',
        ];
        unset($result['music_url']);
        $result['editor_domain'] = $result['preview_domain'] = rtrim(env('APP_URL'), '/') . '/';
        $sceneJson = json_decode(file_get_contents(resource_path('json/scene_preview.json')), true);
        $result = array_merge($sceneJson, $result);
        $inviteId = $request->input('bkid', false);
        if (Route::currentRouteName() == 'view.preview' || !empty($inviteId)) {
            $result['is_show_btn'] = 0;
            $result['is_show_guide'] = 0;
        }
        
        if (!empty($inviteId)) {
            $invite = InviteList::query()->where('scene_id', $scene->id)->find($inviteId);
            if ($invite) {
                $result['specify_invite'] = [
                    'name' => $invite->name,
                    'invite_word' => $invite->word,
                    'url' => Storage::disk('scene')->get($invite->url),
                ];
            }
        }

        Scene::query()->where('id', $scene->id)->increment('view_count', 1);
        
        if ($scene->show_type == 1) {
            return view('preview', ['scene' => $result]);
        } else {
            return view('longview', ['scene' => $result]);   
        }
    }
    
    /**
     * 长图视图
     * @param $code
     * @param Request $request
     * @return array|false|mixed|null
     */
    public function longView($code, Request $request)
    {
        $scene = Scene::query()->where('code', $code)->first();
        if (!$scene) {
            return $this->error(sprintf('模板[%s]不存在', $scene));
        }
        $result = $scene->toArray();
        $result['bgAudio'] = [
            'url' => $scene['music_url'],
            'id' => 0,
            'name' => 'none',
        ];
        unset($result['music_url']);
        $result['editor_domain'] = $result['preview_domain'] = rtrim(env('APP_URL'), '/') . '/';
        $sceneJson = json_decode(file_get_contents(resource_path('json/scene_preview.json')), true);
        $result = array_merge($sceneJson, $result);
        $inviteId = $request->input('bkid', false);
        if (Route::currentRouteName() == 'view.preview' || !empty($inviteId)) {
            $result['is_show_btn'] = 0;
            $result['is_show_guide'] = 0;
        }

        if (!empty($inviteId)) {
            $invite = InviteList::query()->where('scene_id', $scene->id)->find($inviteId);
            if ($invite) {
                $result['specify_invite'] = [
                    'name' => $invite->name,
                    'invite_word' => $invite->word,
                    'url' => Storage::disk('scene')->get($invite->url),
                ];
            }
        }
        Scene::query()->where('id', $scene->id)->increment('view_count', 1);
        
        return view('longview', ['scene' => $result]);
    }

    public function info(Request $request)
    {
        
        $sceneId = $request->input('id');
        $scene = null;
        !empty($sceneId) && $scene = Scene::query()->find($sceneId);
        if (empty($scene)) {
            $this->error('模板不存在');
        }
        if (Route::currentRouteName() == 'api.editInfo') {
            $currentUserId = Auth::user() ? Auth::user()->id : 0;
            if (empty($scene->user_id) || $scene->user_id != $currentUserId) {
                $this->error('非法请求');
            }
        }
        $pageList = ScenePage::query()->where('scene_id', $sceneId)
            ->orderBy('num')
            ->get();
        $srcFields = ['src', 'originSrc', 'svgSrc', 'maskSrc', 'imgSrc'];
        $result = [
            'list' => $pageList->transform(function ($item, $key) use ($srcFields) {
                $item['content'] = array_map(function ($element) use ($srcFields, $item) {
                    foreach ($srcFields as $field) {
                        if (!empty($element['properties'][$field])) {
                            $element['properties'][$field] = Storage::disk('scene')->url($element['properties'][$field]);
                        }
                    }
                    $element['pageId'] = $item['id'];
                    return $element;
                }, $item['content']);
                return [
                    'id' => $item['id'],
                    'name' => '',
                    'num' => $item['num'],
                    'properties' => $item['property'],
                    'scene' => null,
                    'sceneId' => $item['scene_id'],
                    'elements' => $item['content'],
                    'extend' => $item['extend']
                ];
            }),
            'info' => [
                'code' => $scene->code,
                'sceneid_bigint' => $sceneId,
                'type' => $scene->show_type	
            ],
        ];
        return $this->success($result);
    }

    public function search(Request $request)
    {
        $keyword = $request->input('keyword');
        $perPage = $request->input('page_size', 12);
        $sceneList = Scene::query()
            ->where('user_id', 0)
            ->where('name', 'like', '%'.$keyword.'%')
            ->paginate($perPage);
        return $this->success($sceneList->toArray());
    }

    public function list_by_cate(Request $request)
    {
        $catId = $request->input('tagid');
        $category = null;
        !empty($catId) && $category = Category::query()->find($catId);
        if (empty($category)) {
            return $this->error('分类不存在');
        }
        $pageSize = $request->input('page_size', 12);
        $query = Scene::query()->where('user_id', 0)
            ->select(['id', 'name', 'code', 'cover', 'price']);
        if (!empty($catId)) {
            $query->where('sub_class_id', $catId);
        }
        $sceneList = $query->orderByDesc('id')
            ->paginate($pageSize, ['*']);
        $result = array_merge($sceneList->toArray(), [
            'tag_name' => $category->name,
            'hidden_gift_btn' => 0
        ]);
        return $this->success($result);
    }

    public function list_by_big_cate(Request $request)
    {
        $catId = $request->input('cate_id');
        $categoryList = Category::query()->where('pid', $catId)->get();
        $sceneList = [];
        foreach ($categoryList as $cat) {
            $querySceneList = Scene::query()
                ->select(['id', 'name', 'code', 'cover', 'price'])
                ->where('sub_class_id', $cat['id'])
                ->where('user_id', 0)
                ->orderByDesc('id')
                ->limit(3)->get();
            if ($querySceneList->count()) {
                $sceneList[] = [
                    'cate' => [
                        'tagid' => $cat['id'],
                        'name' => $cat['name'],
                    ],
                    'scene' => $querySceneList
                ];
            }
        }
        return $this->success(['list' => $sceneList]);
    }

    public function list_by_user(Request $request)
    {
        $userId = Auth::user()->id;
        $pageSize = $request->input('page_size', 12);
        $keyword = $request->input('keyword');
        $query = Scene::query()
            ->select([
                'sub_class_id as tagid_int',
                'is_wish_h5',
                'view_count as hitcount_int',
                'code',
                'create_time as createtime_time',
                'id as sceneid_bigint',
                'cover as thumbnail_varchar',
                'name as scenename_varchar'
            ])
            ->where('user_id', $userId)
            ->orderByDesc('id');
        if (!empty($keyword)) {
            $query->where('name', 'like', '%' . $keyword . '%');
        }
        $sceneList = $query->paginate($pageSize, ['*']);
        $result = $sceneList->toArray();
        $result['hidden_gift_btn'] = 0;
        return $this->success($result);
    }

    public function gift(Request $request)
    {
        $id = $request->input('id');
        $subCatId = $request->input('egift_sid');
        $giftList = Gift::query()
            ->where('cat_id', $subCatId)
            ->get();
        $defaultGift = $giftList->where('default', 1)->first();
        $giftList = $giftList->where('default', 0)->all();
        $sentList = GiftRecord::query()->where('type', GiftRecord::TYPE_GIFT)
            ->where('scene_id', $id)
            ->get();
        if (!empty($defaultGift)) {
            $sentList->prepend([
                'icon' => Storage::disk('static')->url($defaultGift['icon']),
                'info' => $defaultGift['info'],
                'name' => '大喜帖',
                'title' => $defaultGift['title'],
            ]);
        }
        $result = [
            'egift_sid' => $subCatId,
            'gift_list' => collect($giftList)->transform(function ($item, $key) {
                return [
                    'icon' => Storage::disk('static')->url($item['icon']),
                    'icon2' => Storage::disk('static')->url($item['icon']),
                    'id' => $item['id'],
                    'info' => $item['info'],
                    'is_display' => 2,
                    'price' => $item['price'],
                    'sid' => $item['cat_id'],
                    'sort' => 0,
                    'title' => $item['title'],
                ];
            })->toArray(),
            'sent_list' => $sentList
        ];
        return $this->success($result);
    }

    public function barrage(Request $request)
    {
        $id = $request->input('id');
        $scene = Scene::query()->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $barrageList = Barrage::query()
            ->where('scene_id', $id)
            ->orderByDesc('id')
            ->get();
        $result = [
            'list' => $barrageList->transform(function ($item, $key) {
                return [
                    'id' => $item['id'],
                    'name' => $item['name'],
                    'word' => $item['word'],
                    'created' => strtotime($item['create_time'])
                ];
            })->toArray(),
            'scene_info' => [
                'scenename_varchar' => $scene['name']
            ]
        ];
        return $this->success($result);
    }

    public function addBarrage(Request $request)
    {
        $id = $request->input('id');
        $scene = Scene::query()->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $name = $request->input('name', '');
        $word = $request->input('word', '');
        $barrage = new Barrage([
            'scene_id' => $id,
            'name' => $name,
            'word' => $word
        ]);
        $barrage->save();
        return $this->success();
    }

    public function deleteBarrage(Request $request)
    {
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $barrage = Barrage::query()
            ->whereRaw('exists (select * from scene where id = scene_id and user_id = ' . $userId . ')')
            ->find($id);
        if (empty($barrage)) {
            return $this->error('非法请求');
        }
        $barrage->delete();
        return $this->success();
    }

    public function luckMoney(Request $request)
    {
        $id = $request->input('id');
        $sentList = GiftRecord::query()->where('type', GiftRecord::TYPE_MONEY)
            ->where('scene_id', $id)
            ->get();
        $result = [
            'list' => $sentList->transform(function ($item, $key) {
                return [
                    'uname' => $item['name'],
                    'fee' => $item['price'],
                    'title' => '礼金',
                    'created' => strtotime($item['create_time']),
                ];
            })->toArray(),
        ];
        return $this->success($result);
    }

    public function priceInfo(Request $request)
    {
        $code = $request->input('code');
        $scene = Scene::query()
            ->select(['id', 'name', 'cover', 'price'])
            ->where('code', $code)->first();
        if (empty($scene)) {
            return $this->error('模板不存在');
        }
        /**
         * @var $user User
         */
        $user = Auth::user();
        $result = [
            'hidden_gift_btn' => 0,
            'is_vip' => $user->isVip(),
            'kb' => $user->kb,
            'scene_info' => $scene->toArray()
        ];
        return $this->success($result);
    }

    public function buy(Request $request)
    {
        $code = $request->input('code');
        $scene = Scene::query()
            ->where('code', $code)->first();
        if (empty($scene)) {
            return $this->error('模板不存在');
        }
        /**
         * @var $user User
         */
        $user = Auth::user();
        if ($user->isVip() || $user->kb >= $scene->price) {
            $newScene = null;
            DB::transaction(function () use ($scene, $user, &$newScene) {
                if (!$user->isVIP()) {
                    User::query()->where('id', $user->id)->decrement('kb', $scene->price);
                }
                $newSceneInfo = $scene->toModelArray();
                unset($newSceneInfo['id']);
                unset($newSceneInfo['source_code']);
                unset($newSceneInfo['create_time']);
                unset($newSceneInfo['update_time']);
                $newSceneInfo['buy_with_vip'] = $user->isVIP() ? 1 : 0;
                $newSceneInfo['tpl_id'] = $scene->id;
                $newSceneInfo['user_id'] = $user->id;
                $newSceneInfo['code'] = generateSceneCode();
                $newScene = new Scene($newSceneInfo);
                $newScene->save();

                /**
                 * @var $pageList ScenePage[]
                 */
                $pageList = $scene->pageList;
                foreach ($pageList as $page) {
                    $pageInfo = $page->toArray();
                    unset($pageInfo['id']);
                    unset($pageInfo['create_time']);
                    unset($pageInfo['update_time']);
                    $pageInfo['scene_id'] = $newScene->id;
                    $newPage = new ScenePage($pageInfo);
                    $newPage->save();
                }
            });
            return $this->success(['new_scene_id' => $newScene->id]);
        } else {
            return $this->error('喜币余额不足，请充值或开通会员');
        }
    }

    public function copyScene(Request $request)
    {
        $id = $request->input('id');
        $user = Auth::user();
        $scene = Scene::query()->where('user_id', $user->id)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        DB::transaction(function () use ($scene, $user, &$newScene) {
            $newSceneInfo = $scene->toModelArray();
            unset($newSceneInfo['id']);
            unset($newSceneInfo['source_code']);
            unset($newSceneInfo['create_time']);
            unset($newSceneInfo['update_time']);
            $newSceneInfo['name'] = '副本-' . $scene->name;
            $newSceneInfo['copy_tpl_id'] = $scene->id;
            $newSceneInfo['user_id'] = $user->id;
            $newSceneInfo['code'] = generateSceneCode();
            $newSceneInfo['view_count'] = 0;
            $newScene = new Scene($newSceneInfo);
            $newScene->save();

            /**
             * @var $pageList ScenePage[]
             */
            $pageList = $scene->pageList;
            foreach ($pageList as $page) {
                $pageInfo = $page->toArray();
                unset($pageInfo['id']);
                unset($pageInfo['create_time']);
                unset($pageInfo['update_time']);
                $pageInfo['scene_id'] = $newScene->id;
                $newPage = new ScenePage($pageInfo);
                $newPage->save();
            }
        });
        return $this->success();
    }

    public function getUpToken()
    {
        $result = [
            'list' => [
                'obj' => 'daxitie',
                'region' => env('APP_URL'),
                'domain' => $_SERVER['HTTP_HOST'],
            ]
        ];
        return $this->success($result);
    }

    public function savePage(Request $request)
    {
       
        $params = json_decode($request->getContent(), true);
        foreach ($params as $key => $value) {
            $request->offsetSet($key, $value);
        }
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $page = ScenePage::query()
            ->whereRaw('exists (select * from scene where id = scene_id and user_id = ' . $userId . ')')
            ->find($id);
        if (empty($page)) {
            return $this->error('非法请求');
        }
        $num = $request->input('num', false);
        if (!empty($num)) {
            $page->num = $num;
        }
        $property = $request->input('properties', []);
        if (!empty($property)) {
            if (!empty($property['thumbSrc'])) {
                $property['thumbSrc'] = pathinfo($property['thumbSrc'], PATHINFO_BASENAME);
            }
            $page->property = $property;
        }
        $content = $request->input('elements', []);
        if (!empty($content)) {
            $srcFields = ['src', 'originSrc', 'svgSrc', 'maskSrc', 'imgSrc'];
            foreach ($content as &$element) {
                foreach ($srcFields as $field) {
                    $src = $element['properties'][$field] ?? '';
                    if (!empty($src)) {
                        $element['properties'][$field] = pathinfo($src, PATHINFO_BASENAME);
                    }
                }
            }
            $page->content = $content;
        }
        $extend = $request->input('extend', []);
        if (!empty($extend)) {
            $page->extend = $extend;
        }
        $page->save();
        return $this->success([
            'list' => [
                'pageid_bigint' => $id,
                'sceneid_bigint' => $page->scene_id,
                'userid_int' => $userId,
            ],
            'page_data_info' => [
                'pagecurrentnum_int' => $page->num,
                'content_text' => json_encode($page->content),
                'extend' => json_encode($page->extend),
                'properties_text' => json_encode($page->property)
            ],
        ]);
    }

    public function copyPage(Request $request)
    {
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $page = ScenePage::query()
            ->whereRaw('exists (select * from scene where id = scene_id and user_id = ' . $userId . ')')
            ->find($id);
        if (empty($page)) {
            return $this->error('非法请求');
        }
        $newPageInfo = $page->toArray();
        unset($newPageInfo['id']);
        unset($newPageInfo['create_time']);
        unset($newPageInfo['update_time']);
        ScenePage::query()->where('scene_id', $page->scene_id)
            ->where('num', '>', $newPageInfo['num'])
            ->increment('num', 1);
        $newPageInfo['num'] += 1;
        $newPage = new ScenePage($newPageInfo);
        $newPage->save();
        return $this->success([
            'id' => $newPage->id,
            'sceneId' => $newPage->scene_id,
            'num' => $newPage->num
        ]);
    }

    public function deletePage(Request $request)
    {
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $page = ScenePage::query()
            ->whereRaw('exists (select * from scene where id = scene_id and user_id = ' . $userId . ')')
            ->find($id);
        if (empty($page)) {
            return $this->error('非法请求');
        }
        ScenePage::query()->where('scene_id', $page->scene_id)
            ->where('num', '>', $page->num)->decrement('num', 1);
        ScenePage::query()->where('id', $id)->delete();
        return $this->success([]);
    }

    public function setting(Request $request)
    {
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()->where('user_id', $userId)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        return $this->success([
            'barrage_text' => '弹幕祝福',
            'hidden_gift_btn' => 0,
            'is_wish_h5' => $scene->is_wish_h5,
            'scene_info' => [
                'end_page' => $scene->end_page,
                'is_gift' => $scene->is_gift,
                'is_luckmoney' => $scene->is_luckmoney,
                'is_wish' => $scene->is_wish,
                'property' => $scene->property,
                'scenename_varchar' => $scene->name,
                'tagid_int' => $scene->sub_class_id,
            ],
        ]);
    }
   public function savesetting(Request $request)
    {
        $id = $request->input('id');
        $is_wish = $request->input('is_wish');
        $is_gift = $request->input('is_gift');
        $is_luckmoney = $request->input('is_luckmoney');
        $autoFlip = $request->input('autoFlip');
        $autoFlipTime = $request->input('autoFlipTime');
        $userId = Auth::user()->id;
        $scene = Scene::query()->where('user_id', $userId)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
       
        $property = $scene->property;
        if (is_array($property)) {
            $request->has('autoFlip') && $property['autoFlip'] = $request->input('autoFlip') == 1;
            $request->has('autoFlipTime') && $property['autoFlipTime'] = $request->input('autoFlipTime');
            $scene->property = $property;
        }
        $request->has('is_wish') && $scene->is_wish = $request->input('is_wish');
        $request->has('is_gift') && $scene->is_gift = $request->input('is_gift');
        $request->has('is_luckmoney') && $scene->is_luckmoney = $request->input('is_luckmoney');
        $res = $scene->save();
        if($res){
            return $this->success([
            'barrage_text' => '弹幕祝福',
            'hidden_gift_btn' => 0,
            'is_wish_h5' => $scene->is_wish_h5,
            'scene_info' => [
                'end_page' => $scene->end_page,
                'is_gift' => $scene->is_gift,
                'is_luckmoney' => $scene->is_luckmoney,
                'is_wish' => $scene->is_wish,
                'property' => $scene->property,
                'scenename_varchar' => $scene->name,
                'tagid_int' => $scene->sub_class_id,
            ],
        ]);     
        }else{
            return $this->error('更新失败'); 
        }
        
    }

    public function shareInfo(Request $request)
    {
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->select(['code', 'name', 'cover', 'description'])
            ->where('user_id', $userId)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $sceneInfo = $scene->toArray();
        $sceneInfo['scenecode_varchar'] = $sceneInfo['code'];
        return $this->success([
            'scene_info' => $sceneInfo,
        ]);
    }

    public function editShareInfo(Request $request)
    {
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $name = $request->input('name');
        if (!empty($name)) {
            $scene->name = $name;
            $property = $scene->property;
            !is_array($property) && $property = json_decode($property, true);
    
            $property['shareDes'] =['title'=>$name] ;
            $scene->property = $property;
        }
        $desc = $request->input('desc');
        if (!empty($desc)) {
            $scene->description = $desc;
            $property = $scene->property;
            !is_array($property) && $property = json_decode($property, true);
            $property['shareDes']['description'] = $desc;
            $scene->property = $property;
        }
        $img = $request->input('img');
        if (!empty($img)) {
            $scene->cover = pathinfo($img, PATHINFO_BASENAME);
        }
        $scene->save();
        return $this->success([]);
    }

    public function updateMusicInfo(Request $request)
    {
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $musicUrl = $request->input('mp3_url', '');
        $scene->music_url = pathinfo($musicUrl ?: '', PATHINFO_BASENAME);
        $scene->save();
        return $this->success([]);
    }

    public function move(Request $request)
    {
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $type = $request->input('type');
        if ($type == 1) {
            $userId = $request->input('user_id');
            if (User::query()->find($userId)) {
                $scene->user_id = $userId;
                $scene->save();
            }
        } elseif ($type == 2) {
            $phone = $request->input('mobile');
            $password = $request->input('password');
            $user = new User([
                'name' => Auth::user()->name,
                'phone' => $phone,
                'password' => encrypt($password)
            ]);
            $user->save();
            $scene->user_id = $user->id;
            $scene->save();
        }
        return $this->success();
    }

    public function pcEdit($id)
    {
        return view('pc_edit');
    }

    public function sceneDetail($id)
    {
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $pageCount = ScenePage::query()->where('scene_id', $id)->count();
        $res = json_decode(file_get_contents(resource_path('json/scene_detail.json')), true);
        $data = [
            'id' => $scene->id,
            'name' => $scene->name,
            'createUser' => $userId,
            'createTime' => strtotime($scene->create_time) * 1000,
            'image' => $scene->property,
            'updateTime' => strtotime($scene->update_time) * 1000,
            'publishTime' => strtotime($scene->create_time) * 1000,
            'code' => $scene->code,
            'description' => $scene->description,
            'bgAudio' => [
                'id' => 1,
                'name' => 'noName.mp3',
                'url' => Storage::disk('scene')->url($scene->music_url),
            ],
            'cover' => Storage::disk('scene')->url($scene->cover),
            'property' => $scene->property,
            'propMap' => $scene->property,
            'pageCount' => $pageCount,
        ];
        $res['obj'] = array_merge($res['obj'], $data);
        $res['map']['count'] = $pageCount;
        return $this->response($res);
    }

    public function banners()
    {
        $result = json_decode(file_get_contents(resource_path('json/banners.json')), true);
        return $this->response($result);
    }

    public function userPreference()
    {
        $result = json_decode(file_get_contents(resource_path('json/preference.json')), true);
        return $this->response($result);
    }

    public function fontList()
    {
        $result = json_decode(file_get_contents(resource_path('json/font_list.json')), true);
        return $this->response($result);
    }

    public function pageList($id, Request $request)
    {
        $perPage = $request->input('pageSize', 20);
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $pageList = ScenePage::query()
            ->where('scene_id', $id)
            ->orderBy('num')
            ->paginate($perPage, ['*'], 'pageNo');
        $pageList = $pageList->toArray();
        $srcFields = ['src', 'originSrc', 'svgSrc', 'maskSrc', 'imgSrc'];
        return $this->pcSuccess(
            null,
            collect($pageList['list'])->transform(function ($item, $key) use ($scene, $srcFields) {
                $item['content'] = array_map(function ($element) use ($srcFields) {
                    foreach ($srcFields as $field) {
                        if (!empty($element['properties'][$field])) {
                            $element['properties'][$field] = Storage::disk('scene')->url($element['properties'][$field]);
                        }
                    }
                    return $element;
                }, $item['content']);
                return [
                    'id' => $item['id'],
                    'elements' => $item['content'],
                    'extend' => $item['extend'],
                    'forms' => null,
                    'groups' => [],
                    'isPaid' => null,
                    'name' => null,
                    'num' => $item['num'],
                    'price' => null,
                    'properties' => $item['property'],
                    'sceneId' => $scene->id,
                ];
            })->toArray(),
            [
                'count' => $pageList['map']['count'],
                'end' => $pageList['map']['page_size'] * $pageList['map']['page'] >= $pageList['map']['count'],
                'pageNo' => $pageList['map']['page'],
                'pageSize' => $pageList['map']['page_size'],
            ]
        );
    }
    
    /**
     * 页面排序操作
     * @return string
     */
    public function pageSort(Request $request)
    {
        /** var $id */
        $id = $request->input('id');
        $page = ScenePage::query()->find($id);
        if (empty($page)) {
            return $this->error('参数id非法请求');
        }
        
        /** var $positiotn */
        $position = $request->input('pos', false);
        if (empty($position)) {
            return $this->error('参数pos非法请求');
        }
        
        /** var $currentPage */
        $currentPage = ScenePage::query()->where('scene_id', $page->scene_id)->where('num', $position)->first();
        if (empty($currentPage)) {
            return $this->error('非法请求');
        }
        /** var $num */
        $num = $page->num;
        $page->num = $position;
        $currentPage->num = $num;
        
        if(!($currentPage->save() && $page->save())) {
            return $this->error('排序失败');
        }
        return $this->pcSuccess();
    }
        
     /**
     * 获取素材图片模态窗
     * @return string1
     */    
    public function image(Request $request)
    {
        return view('image');
    }
    
     /**
     * 根据参数获取列表
     * @param Request $request
     * @return mixed
     */
    public function listProdByParam(Request $request)
    {
        return $this->pcSuccess();
    }
    
     /**
     * 七牛云上传获取生成Token
     * @param Request $request
     * @return mixed
     */
    public function upTokens(Request $request)
    {
        try {
            //require 'path_to_sdk/vendor/autoload.php';
            // 初始化签权对象
            $auth = new \Qiniu\Auth(env('QINIU_ACCESS_KEY'), env('QINIU_SECRET_KEY'));
            var_dump($auth);
        } catch (\Exception $exception) {
            var_dump($exception->getMessage());
        }
        
        $list = ['list' => []];
        return $this->pcSuccess(
            null,
            null,
            [
                'expire' => 3600,
                'token' => 'yDWfmKBgXodTgwOjl5n2Gy7T3_PNGAXNX57JgXja:UGVkEsG3DfK9b9QjMUW7MdtZ8kc=:eyJzY29wZSI6Img1LWFsYnVtIiwiZGVhZGxpbmUiOjE2OTk1MjE2ODZ9'
            ]
        );
    }
    
    public function pcSavePage(Request $request)
    {
        $params = json_decode($request->getContent(), true);
        foreach ($params as $key => $value) {
            $request->offsetSet($key, $value);
        }
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $page = ScenePage::query()
            ->whereRaw('exists (select * from scene where id = scene_id and user_id = ' . $userId . ')')
            ->find($id);
        if (empty($page)) {
            return $this->error('非法请求');
        }
        $num = $request->input('num', false);
        if (!empty($num)) {
            $page->num = $num;
        }
        $property = $request->input('properties', []);
        if (!empty($property)) {
            if (!empty($property['thumbSrc'])) {
                $property['thumbSrc'] = pathinfo($property['thumbSrc'], PATHINFO_BASENAME);
            }
            $page->property = $property;
        }
        $content = $request->input('elements', []);
        if (!empty($content)) {
            $srcFields = ['src', 'originSrc', 'svgSrc', 'maskSrc', 'imgSrc'];
            foreach ($content as &$element) {
                foreach ($srcFields as $field) {
                    $src = $element['properties'][$field] ?? '';
                    if (!empty($src)) {
                        $element['properties'][$field] = pathinfo($src, PATHINFO_BASENAME);
                    }
                }
            }
            $page->content = $content;
        }
        $extend = $request->input('extend', []);
        if (!empty($extend)) {
            $page->extend = $extend;
        }
        $page->save();
        return $this->pcSuccess();
    }

    public function addFormData($sceneId, $pageId, $buttonId, Request $request)
    {
        $userId = Auth::user()->id;
        $page = ScenePage::query()
            ->whereRaw('exists (select * from scene where id = ' . $sceneId . ' and user_id = ' . $userId . ')')
            ->find($pageId);
        if (empty($page)) {
            return $this->error('非法请求');
        }
        $formData = $request->input('eq');
        $elements = $page->content;
        $formDataRecord = [];
        $elementMap = array_column($elements, null, 'id');
        foreach ($formData as $key => $value) {
            $id = str_replace('f_', '', $key);
            $element = $elementMap[$id] ?? [];
            if (!empty($element) && !empty($value)) {
                $formDataRecord[$element['title']] = $value;
            }
        }
        $form = new FormData([
            'scene_id' => $sceneId,
            'data' => $formDataRecord
        ]);
        $form->save();
        $buttonElement = $elementMap[$buttonId];
        $msg = '操作成功';
        if (!empty($buttonElement) && !empty($buttonElement['properties']['text'])) {
            $msg = $buttonElement['properties']['text'];
        }
        return $this->success(null, $msg);
    }

    public function getFormData(Request $request)
    {
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $formDataList = FormData::query()->where('scene_id', $scene->id)->get();
        return $this->success([
            'form_data' => $formDataList->transform(function ($item, $key) {
                return [
                    'id' => $item['scene_id'],
                    'did' => $item['id'],
                    'first_column' => (array_keys($item['data'])[0] ?? '') . '：' . (array_values($item['data'])[0] ?? ''),
                    'time' => $item['create_time']
                ];
            })->toArray(),
            'scene_info' => [
                'scenename_varchar' => $scene->name
            ],
            'sum_data' => $formDataList->count(),
        ]);
    }

    public function getFormDataInfo(Request $request)
    {
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $formDataId = $request->input('did');
        $formData = FormData::query()->where('scene_id', $id)->find($formDataId);
        if (empty($formData)) {
            return $this->error('非法请求, 数据不存在');
        }
        return $this->success([
            'form_createtime' => $formData['create_time'],
            'form_info_list' => collect($formData['data'])->transform(function ($item, $key) {
                return [
                    'label' => $key,
                    'val' => $item,
                ];
            })->values()->toArray(),
        ]);
    }

    public function exportFormData(Request $request)
    {
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $formData = FormData::query()->where('scene_id', $id)->get();
        if (empty($formData)) {
            return $this->error('没有数据可以导出');
        }
        $tableName = '我的场景数据_' . date('YmdHis') . '.csv';
        $columns = array_keys($formData[0]['data']);
        $allData = array_column($formData->toArray(), 'data');
        $list = array_merge([$columns], $allData);
        ob_start();
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="' . $tableName . '"');
        header('Cache-Control: max-age=0');
        $fp = fopen('php://output', 'w');//打开output流
        mb_convert_variables('GBK', 'UTF-8', $list);
        $allCount = count($list);//从数据库获取总量，假设是一百万
        $count = 1000;//每次查询的条数
        $pages = ceil($allCount / $count);
        for ($i = 1; $i <= $pages; $i++) {
            $output_data = array_slice($list, ($i - 1) * $count, $count);
            foreach ($output_data as &$item) {
                fputcsv($fp, $item);
                unset($item);//释放变量的内存
            }
            ob_flush();//刷新输出缓冲到浏览器
            flush();//必须同时使用ob_flush()和flush()函数来刷新输出缓冲。
        }
        fclose($fp);
    }

    public function getInvite(Request $request)
    {
        $id = $request->input('id');
        $sceneId = $request->input('scene_id');
        $userId = Auth::user()->id;
        $invite = InviteList::query()
            ->where('scene_id', $sceneId)
            ->whereRaw('exists (select * from scene where scene_id = ' . $sceneId . ' and user_id = ' . $userId . ')')
            ->find($id);
        if (empty($invite)) {
            return $this->error('非法请求');
        }
        return $this->success([
            'bkyq_info' => [
                'id' => $invite->id,
                'name' => $invite->name,
                'invite_word' => $invite->word,
                'sceneid_bigint' => $sceneId,
                'userid_int' => $userId,
                'url' => $invite->url,
                'created' => strtotime($invite->create_time),
            ]
        ]);
    }

    public function saveInvite(Request $request)
    {
        $sceneId = $request->input('scene_id', false);
        if (empty($sceneId)) {
            $sceneId = $request->input('id');
        }
        $word = $request->input('invite_word');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($sceneId);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        // 没有就是新增
        if (Route::currentRouteName() == 'api.addInvite') {
            $name = $request->input('name_list');
            $nameList = explode("\n", $name);
            foreach ($nameList as $item) {
                $item = trim($item, '\r');
                $invite = new InviteList([
                    'name' => $item,
                    'word' => $word,
                    'scene_id' => $sceneId
                ]);
                $invite->save();
            }
        } else {
            $name = $request->input('name');
            $id = $request->input('id');
            $invite = InviteList::query()
                ->where('scene_id', $sceneId)
                ->find($id);
            if (empty($invite)) {
                return $this->error('非法请求');
            }
            if (!empty($name)) {
                $invite->name = $name;
            }
            if (!empty($word)) {
                $invite->word = $word;
            }
            $invite->save();
        }
        return $this->success();
    }

    public function inviteList(Request $request)
    {
        $sceneId = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($sceneId);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $inviteList = InviteList::query()->where('scene_id', $sceneId)->get();

        return $this->success([
            'list' => $inviteList->transform(function ($item, $key) {
                return [
                    'id' => $item['id'],
                    'name' => $item['name'],
                    'invite_word' => $item['word'],
                    'url' => $item['url'],
                    'created' => strtotime($item['create_time']),
                    'sceneid_bigint' => $item['scene_id']
                ];
            })->toArray(),
        ]);
    }

    public function getInviteSetting(Request $request)
    {
        $sceneId = $request->input('scene_id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($sceneId);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $invite = InviteList::query()->where('scene_id', $sceneId)->orderByDesc('id')->first();
        $sceneInfo = [
            'scenename_varchar' => $scene->name,
        ];
        $inviteList = [];
        if (!empty($invite)) {
            $inviteList[] = [
                'id' => $invite->id,
                'invite_word' => $invite->word,
                'sceneid_bigint' => $invite->scene_id,
            ];
        }
        return $this->success([
            'list' => $inviteList,
            'scene_info' => $sceneInfo
        ]);
    }

    public function getInviteUrl(Request $request)
    {
        $id = $request->input('id');
        $sceneId = $request->input('scene_id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($sceneId);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $invite = InviteList::query()->where('scene_id', $sceneId)->find($id);
        if (empty($invite)) {
            return $this->error('非法请求');
        }
        if (!empty($invite->url)) {
            return $this->success([
                'url' => Storage::disk('scene')->url($invite->url)
            ]);
        }

        $voiceStr = '';
        try {
            $secretId = config('tencent_cloud.api_secret_id');
            $secretKey = config('tencent_cloud.api_secret_key');
            $cred = new Credential($secretId, $secretKey);
            // 实例化一个http选项，可选的，没有特殊需求可以跳过
            $httpProfile = new HttpProfile();
            $httpProfile->setEndpoint("tts.tencentcloudapi.com");

            // 实例化一个client选项，可选的，没有特殊需求可以跳过
            $clientProfile = new ClientProfile();
            $clientProfile->setHttpProfile($httpProfile);
            // 实例化要请求产品的client对象,clientProfile是可选的
            $client = new TtsClient($cred, "ap-guangzhou", $clientProfile);

            // 实例化一个请求对象,每个接口都会对应一个request对象
            $req = new TextToVoiceRequest();

            $params = array(
                "Text" => $invite->name . '您好，' . $invite->word,
                "SessionId" => "session-123123"
            );
            $req->fromJsonString(json_encode($params));

            // 返回的resp是一个TextToVoiceResponse的实例，与请求对象对应
            $resp = $client->TextToVoice($req);

            // 输出json格式的字符串回包
            $voiceStr = 'data:audio/wav;base64,' . json_decode($resp->toJsonString(), true)['Audio'] ?? '';
        } catch (TencentCloudSDKException $e) {
            return $this->error($e->getMessage());
        }
        if (!empty($voiceStr)) {
            $fileName = md5($voiceStr) . '.wav';
            Storage::disk('scene')->put($fileName, $voiceStr);
            $invite->url = $fileName;
            $invite->save();
            return $this->success(['url' => Storage::disk('scene')->url($fileName)]);
        } else {
            return $this->error('生成语音失败');
        }
    }

    public function giftList(Request $request)
    {
        $sceneId = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($sceneId);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $giftList = GiftRecord::query()->where('type', GiftRecord::TYPE_GIFT)
            ->where('scene_id', $sceneId)->get();
        return $this->success([
            'sent_list' => $giftList->transform(function ($item, $key) {
                return [
                    'id' => $item['id'],
                    'title' => $item['title'],
                    'name' => $item['name'],
                    'fee' => $item['price'],
                    'created' => strtotime($item['create_time']),
                ];
            })->toArray(),
            'scene_info' => [
                'scenename_varchar' => $scene->name,
            ]
        ]);
    }

    public function moneyList(Request $request)
    {
        $sceneId = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($sceneId);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $moneyList = GiftRecord::query()->where('type', GiftRecord::TYPE_MONEY)
            ->where('scene_id', $sceneId)->get();
        return $this->success([
            'list' => $moneyList->transform(function ($item, $key) {
                return [
                    'id' => $item['id'],
                    'uname' => $item['name'],
                    'fee' => $item['price'],
                    'created' => strtotime($item['create_time']),
                ];
            })->toArray(),
            'scene_info' => [
                'scenename_varchar' => $scene->name,
            ]
        ]);
    }

    public function getSubmitCash(Request $request)
    {
        $sceneId = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($sceneId);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $recFee = GiftRecord::query()->where('scene_id', $sceneId)->sum('price');
        $cashFee = CashRecord::query()->where('scene_id', $sceneId)->sum('end_fee');
        if ($recFee <= $cashFee - 100) {
            return $this->error('剩余可提现金额不足');
        }
        $feeRate = config('scene.fee_rate');
        $sumFee = $recFee - $cashFee;
        $handFee = $sumFee * $feeRate;
        $endFee = $sumFee - $handFee;
        // sum_fee hand_fee end_fee
        return $this->success([
            'sum_fee' => $sumFee,
            'hand_fee' => $handFee,
            'end_fee' => $endFee
        ]);
    }

    public function submitCash(Request $request)
    {
        $sceneId = $request->input('id');
        $userId = Auth::user()->id;
        $name = $request->input('name');
        if (empty($name)) {
            return $this->error('请填写真实名字');
        }
        $cardNo = $request->input('card_no');
        if (empty($cardNo)) {
            return $this->error('请填写提现卡号/账号');
        }
        if (empty($card))
        $scene = Scene::query()
            ->where('user_id', $userId)->find($sceneId);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $recFee = GiftRecord::query()->where('scene_id', $sceneId)->sum('price');
        $cashFee = CashRecord::query()->where('scene_id', $sceneId)->sum('end_fee');
        if ($recFee <= $cashFee - 100) {
            return $this->error('剩余可提现金额不足');
        }
        $feeRate = config('scene.fee_rate');
        $sumFee = $recFee - $cashFee;
        $handFee = $sumFee * $feeRate;
        $endFee = $sumFee - $handFee;
        $cashRecord = new CashRecord([
            'scene_id' => $sceneId,
            'user_id' => $userId,
            'name' => $name,
            'card_no' => $cardNo,
            'sum_fee' => $sumFee,
            'hand_fee' => $handFee,
            'end_fee' => $endFee
        ]);
        $cashRecord->save();
        return $this->success($cashRecord);
    }

    public function cashLog(Request $request)
    {
        // cash_log_list [name fee card_no created]
        $sceneId = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($sceneId);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $cashList = CashRecord::query()->where('scene_id', $sceneId)->get();
        return $this->success([
            'cash_log_list' => $cashList->transform(function ($item, $key) {
                return [
                    'id' => $item['id'],
                    'name' => $item['name'],
                    'card_no' => $item['card_no'],
                    'created' => strtotime($item['create_time']),
                ];
            })->toArray(),
        ]);
    }

    public function cashSum(Request $request)
    {
        // luckmoney_sum egift_sum sum_fee sum_fee_balance
        $sceneId = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($sceneId);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $luckMoneySum = GiftRecord::query()->where('scene_id', $sceneId)->where('type', GiftRecord::TYPE_MONEY)->sum('price');
        $giftSum = GiftRecord::query()->where('scene_id', $sceneId)->where('type', GiftRecord::TYPE_GIFT)->sum('price');
        $sumFee = GiftRecord::query()->where('scene_id', $sceneId)->sum('price');
        $cashFee = CashRecord::query()->where('scene_id', $sceneId)->sum('end_fee');
        return $this->success([
             'luckmoney_sum' => $luckMoneySum,
            'egift_sum' => $giftSum,
            'sum_fee' => $sumFee,
            'sum_fee_balance' => $sumFee - $cashFee,
        ]);
    }

    public function getFAQ()
    {
        $result = json_decode(file_get_contents(resource_path('json/faq.json')), true);
        return $this->response($result);
    }

    public function getRemoveEndPage(Request $request)
    {
        $sceneId = $request->input('scene_id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($sceneId);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $user = Auth::user();
        return $this->success([
            'hidden_gift_btn' => 0,
            'kb' => $user->kb,
            'scene_info' => [
                'cover' => Storage::disk('scene')->url($scene->cover),
                'name' => $scene->name,
                'price' => $scene->price,
            ]
        ]);
    }

    public function removeEndPage(Request $request)
    {
        $sceneId = $request->input('scene_id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($sceneId);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $user = Auth::user();
        if ($user->kb < 50) {
            return $this->error('喜币余额不足，请充值');
        }
        // $endPage = ScenePage::query()->where('scene_id', $sceneId)->orderByDesc('num')->first();
        // $endPage->delete();
        Scene::query()->where('id', $sceneId)->update(['end_page' => 0]);
        User::query()->where('id', $user->id)->decrement('kb', 50);
        return $this->success();
    }

    /**
     * @throws InvalidArgumentException
     * @throws InvalidConfigException
     * @throws GuzzleException
     * @throws RuntimeException
     */
    public function wxUpload(Request $request)
    {
        $serverId = $request->input('serverId');
        /**
         * @var $app Application
         */
        $app = app('wechat.official_account');
        $stream = $app->media->get($serverId);
        if ($stream instanceof StreamResponse) {
            $fileName = $stream->save(storage_path('app/public/upload/scene'));
            return $this->success([
                'serverId' => $serverId,
                'key' => ltrim(parse_url(Storage::disk('scene')->url($fileName), PHP_URL_PATH), '/')
            ]);
        }
        return $this->error('读取图片失败');
    }

    public function wxDel(Request $request)
    {
        return $this->success();
    }
    
    public function updatePageNum(Request $request)
    {
        $sceneId = $request->input('sceneId');
        $pageNumList = json_decode($request->input('pageNumStr'), true) ?? [];
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($sceneId);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        foreach ($pageNumList as $item) {
            $pageId = $item['pageId'];
            $num = $item['num'];
            if (empty($pageId) || empty($num)) {
                continue;
            }
            ScenePage::query()->where('scene_id', $sceneId)
                ->where('id', $pageId)->update(['num' => $num]);
        }
        return $this->pcSuccess();
    }
}
