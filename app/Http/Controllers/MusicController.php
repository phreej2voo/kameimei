<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Music;
use App\Models\Scene;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class MusicController extends Controller
{
    public function getMusicCategory(Request $request)
    {
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $categoryList = Category::query()->where('type', Category::TYPE_MUSIC)->where('pid', 0)
            ->orderBy('sort')->pluck('name')->toArray();
        array_unshift($categoryList, '全部');
        return $this->success([
            'list' => $categoryList,
            'scene_info' => [
                'scenename_varchar' => $scene->name
            ]
        ]);
    }

    public function getMusicList(Request $request)
    {
        $id = $request->input('id');
        $userId = Auth::user()->id;
        $scene = Scene::query()
            ->where('user_id', $userId)->find($id);
        if (empty($scene)) {
            return $this->error('非法请求');
        }
        $sid = $request->input('sid');
        $pageSize = $request->input('page_size', 20);
        $categoryList = Category::query()->where('type', Category::TYPE_MUSIC)
            ->orderBy('sort')->pluck('id')->toArray();
        $catId = !empty($sid) ? $categoryList[$sid - 1] : 0;
        $name = $request->input('name', '');
        $query = Music::query()
            ->select(['id', 'name', 'url'])
            ->where('user_id', 0);
        if (!empty($name)) {
            $query->where('name', 'like', '%' . $name . '%');
        }
        if (!empty($catId)) {
            $query->where('cat_id', $catId);
        }
        $musicList = $query->paginate($pageSize)->toArray();
        $myMusicList = Music::query()
            ->where('user_id', $userId)
            ->select(['id', 'name', 'url'])
            ->get();
        return $this->success([
            'count' => $musicList['map']['count'],
            'music_list' => $musicList['list'],
            'my_music_list' => $myMusicList->transform(function ($item, $key) {
                $item['url'] = Storage::disk('scene')->url($item['url']);
                return $item;
            })->toArray(),
            'page_size' => $pageSize,
            'scene_obj' => [
                'musictype' => 3,
                'mp3_url' => Storage::disk('scene')->url($scene['music_url']),
            ]
        ]);
    }

    public function getMusicToken(Request $request)
    {
        $user = Auth::user();
        $token = md5(uniqid($user->id));
        User::query()->where('id', $user->id)->update(['music_token' => $token]);
        return $this->success([
            'music_token' => $token,
        ]);
    }

    public function getUptoken(Request $request)
    {
        return $this->response(['uptoken' => $request->input('code', '')]);
    }

    public function getUserUploadList(Request $request)
    {
        $code = $request->input('code');
        $user = User::query()->where('music_token', $code)->first();
        if (empty($user)) {
            return $this->error('当前页面链接已更新，请重试');
        }
        $userId = $user->id;
        $myMusicList = Music::query()
            ->where('user_id', $userId)
            ->select(['id', 'name'])
            ->orderByDesc('id')
            ->get();
        return $this->response([
            'current_time' => time(),
            'status' => ['RetCode' => 0, 'msg' => 'success'],
            'data' => $myMusicList
        ]);
    }

    public function del(Request $request)
    {
        $code = $request->input('code');
        $user = User::query()->where('music_token', $code)->first();
        if (empty($user)) {
            return $this->error('当前页面链接已更新，请重试');
        }
        $userId = $user->id;
        $id = $request->input('id');
        Music::query()->where('id', $id)->where('user_id', $userId)->delete();
        return $this->success([]);
    }


    public function uploadPage(Request $request)
    {
        $code = $request->input('code');
        $user = User::query()->where('music_token', $code)->first();
        if (empty($user)) {
            return $this->error('当前页面链接已更新，请重试');
        }
        return view('music_upload', [
            'code' => $code,
        ]);
    }

    public function upload(Request $request)
    {
        $code = $request->input('token');
        $user = User::query()->where('music_token', $code)->first();

        if (empty($user)) {
            return $this->error('当前页面链接已更新，请重试');
        }
        $file = $_FILES['file'];
        $originFileName = $file['name'];
        /** @var  $fileType */
        $fileType = 'mp3';
        if (strpos($originFileName, 'm4a') === 0) {
            $fileType = 'm4a';
        }

        list(, $fileType) = explode('/', $file['type']);
        if (!in_array($fileType, ['mp3', 'm4a'])) {
            $fileType = 'mp3';
        }
        $storeFileName = storeFile($file['tmp_name'], 'scene', $fileType);
      
        $music = new Music([
            'name' => $originFileName,
            'url' => $storeFileName,
            'user_id' => $user->id,
        ]);
        $music->save();
        return $this->response([
            'current_time' => time(),
            'data' => [
                'insert_id' => $music->id,
            ],
            'status' => ['RetCode' => 0, 'msg' => 'success'],
        ]);
    }
}
