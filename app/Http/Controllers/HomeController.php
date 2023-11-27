<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Scene;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;


class HomeController extends Controller
{
    public function homeNew(): JsonResponse
    {
        /**
         * @var Collection|static[] $categoryList
         */
        $categoryList = Category::query()
            ->where('type', Category::TYPE_SCENE)
            ->where('show_in_home_page', 1)
            ->orderBy('sort')
            ->get();
        $categoryList = $categoryList->transform(function ($item, $key) {
            /**
             * @var Category $item
             */
            return [
                'id' => $item->id,
                'name' => $item->name,
                'ico' => ltrim($item->icon, 'fa-'),
            ];
        });
        $sceneList = [];
        foreach ($categoryList as $cat) {
            $querySceneList = Scene::query()
                ->select(['id', 'name', 'code', 'cover', 'price'])
                ->where('sub_class_id', $cat['id'])
                ->where('user_id', 0)
                ->orderByDesc('id')
                ->limit(4)->get();
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
        $result = [
            'scene_class' => $categoryList,
            'scene_list' => $sceneList
        ];
        return $this->success($result);
    }

    public function tpl_category()
    {
        $categoryList = Category::query()
            ->select(['id', "name as title"])
            ->where('pid', 0)->get();
        return $this->success([
            'list' => $categoryList->toArray()
        ]);
    }
}
