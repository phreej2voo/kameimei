<?php

namespace App\Admin\Controllers;

use App\Models\Scene;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Grid\Displayers\Actions;
use Illuminate\Support\Facades\Storage;

class SceneController extends AdminController
{
    protected $title = '模板列表';

    protected $description = [
        'index' => '模板列表',
        'show' => '模板信息',
        'edit' => '编辑模板',
        'create' => '添加模板',
    ];
    
    protected $typeList = [
        1 => '翻页',
        2 => '长页'
    ];

    protected function grid()
    {
        $scene = new Scene();
        $grid = new Grid($scene);
        
        $grid->model()->where('user_id', 0);

        $grid->column('id', '模板ID');

        $grid->column('cover', '缩略图')->display(function ($cover) {
            return '<img src="' . $cover . '" style="width: 80px;"/>';
        });

        $grid->column('name', '名称');

        $grid->column('code', '模板编码');

        $grid->column('source_code', '采集编码');

        $grid->column('price', '售价(喜币)');
        
        $grid->column('show_type', '翻页类型')->using($this->typeList);;

        $grid->disableCreateButton();
        $grid->actions(function (Actions $actions) {
            $actions->disableView();
            $actions->disableDelete();
        });

        return $grid;
    }

    protected function form()
    {
        $scene = new Scene();
        $form = new Form($scene);

        $form->text('name', '名称');
        $form->number('price', '价格(喜币)');
        $form->select('show_type', '翻页类型')->options($this->typeList);

        $fields = array_keys($scene->getFieldMap());
        $form->ignore(array_diff($fields, ['id', 'name', 'price', 'show_type']));

        return $form;
    }
}
