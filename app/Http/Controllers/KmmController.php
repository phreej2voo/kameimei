<?php

namespace App\Http\Controllers;

class KmmController extends Controller
{
    public function exposeTypes()
    {
        $data = json_decode(file_get_contents(resource_path('json/expose_types.json')), true);
        return $this->success($data['data']);
    }

    /**
     * 上传文件
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function putFile(Request $request)
    {
        /** @var  $disk */
        $disk = \Storage::disk('qiniu');
        /** @var  $file */
        $file = $request->input('path');
        //文件是否存在
        if (!$disk->exists($file)) {
            return $this->error('上传文件不存在');
        }
        //获取文件内容
        /** @var  $contents */
        $contents = $disk->get($file);
        //上传文件
        /** @var  $ret */
        $ret = $disk->put($file, $contents);
        if (!$ret) {
            return $this->error('上传文件失败');
        }
        \Storage::disk('scene')->put($file, $contents);

        /** @var  $data */
        $data = $request->all();
        /** @var  $qiniu */
        $qiniu = new Qiniu([
            'name' => $file,
            'extName' => 'img',
            'fileType' => $data['fileType'],
            'bizType' => $data['bizType'],
            'path' => '/scene/'.$file,
            'tmbPath' => $file,
            'createTime' => time(),
            'createUser' => Auth::user()->id
        ]);
        $qiniu->save();
        return $this->pcSuccess(
            $qiniu,
            null,
            null
        );
    }

    /**
     * 七牛云上传图片列表
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadList(Request $request)
    {
        /** @var  $perPage */
        $perPage = $request->input('pageSize', 20);
        /** @var  $pageList */
        $pageList = Qiniu::query()
            ->where('createUser', Auth::user()->id)
            ->where('status', 0)
            ->orderBy('create_time')
            ->paginate($perPage, ['*'], 'pageNo')
            ->toArray();

        return $this->pcSuccess(
            null,
            collect($pageList['list'])->transform(function ($item) {
                return $item;
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
     * My tag
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function myTag(Request $request)
    {
        return $this->pcSuccess(
            null,
            [],
            null
        );
    }
}
