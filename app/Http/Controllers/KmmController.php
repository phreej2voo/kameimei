<?php

namespace App\Http\Controllers;

class KmmController extends Controller
{
    public function exposeTypes()
    {
        $data = json_decode(file_get_contents(resource_path('json/expose_types.json')), true);
        return $this->success($data['data']);
    }
}
