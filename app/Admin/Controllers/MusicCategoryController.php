<?php

namespace App\Admin\Controllers;

use App\Models\Category;

class MusicCategoryController extends CategoryController
{
    protected $type = Category::TYPE_MUSIC;
}
