<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CommonController extends Controller
{
    public function upload(Request $request)
    {
        $file = $_FILES['file'];
        $fileName = storeFile($file['tmp_name'], 'scene');
        $res = ltrim(parse_url(Storage::disk('scene')->url($fileName), PHP_URL_PATH), '/');
        return $this->response([
            'hash' => $res,
            'key' => $res
        ]);
    }
}
