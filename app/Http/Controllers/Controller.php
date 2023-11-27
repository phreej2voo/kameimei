<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function success($data = [], $msg = '操作成功')
    {
        return response()->json([
            'status' => 0,
            'msg' => $msg,
            'data' => $data
        ]);
    }

    public function pcSuccess($data = [], $list = [], $map = [])
    {
        return response()->json([
            'success' => true,
            'code' => 200,
            'msg' => '操作成功',
            'obj' => $data,
            'list' => $list,
            'map' => $map
        ]);
    }

    public function response($data)
    {
        return response()->json($data);
    }

    public function successMsg($msg)
    {
        return response()->json([
            'status' => 0,
            'msg' => $msg
        ]);
    }

    public function error($msg)
    {
        return response()->json([
            'status' => -1,
            'msg' => $msg,
            'data' => new \stdClass()
        ]);
    }
}
