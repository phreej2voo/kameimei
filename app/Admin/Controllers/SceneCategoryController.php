<?php

namespace App\Admin\Controllers;

use App\Models\Category;

class SceneCategoryController extends CategoryController
{
    protected $type = Category::TYPE_SCENE;
}
