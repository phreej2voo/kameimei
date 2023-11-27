<?php

namespace App\Admin\Controllers;

use App\Models\User;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;

class UserController extends AdminController
{
    protected $title = '会员管理';

    protected $description = [
        'index' => '会员列表',
        'show' => '会员信息',
        'edit' => '编辑会员信息',
        'create' => '添加会员',
    ];

    protected function grid()
    {
        $user = new User();
        $grid = new Grid($user);

        $grid->column('id', '会员ID');

        $grid->column('name', '昵称');

        $grid->column('phone', '手机号');

        $grid->column('password', '登录密码')->hide();

        $grid->column('group', '会员等级')->display(function ($group) {
            return $group == User::GROUP_VIP ? '会员' : '普通用户';
        });

        $grid->column('end_time', '会员到期时间')->display(function ($endTime) {
            return strtotime($endTime) < time() ? '未开通会员' : $endTime;
        });

        $grid->column('kb', '喜币余额');

        $grid->disableCreateButton();
        $grid->actions(function (Grid\Displayers\Actions $actions) {
            $actions->disableView();
            $actions->disableDelete();
        });

        $grid->quickCreate(function (Grid\Tools\QuickCreate $create) {
             $create->text('name', '昵称')->required();
             $create->mobile('phone', '手机号')->required();
             $create->password('password', '密码')->required();
        });

        return $grid;
    }

    protected function form()
    {
        $user = new User();
        $form = new Form($user);

        $form->text('name', '昵称')->prepare(function ($value) {
            return !empty($value) ? $value : '';
        });
        $form->mobile('phone', '手机号')->prepare(function ($value) {
            return !empty($value) ? $value : '';
        });
        $form->password('password', '登录密码')->prepare(function ($value) {
            return !empty($value) ? encrypt($value) : '';
        });
        $form->switch('group', '会员等级')->states([
            'on'  => ['value' => 2, 'text' => '会员', 'color' => 'primary'],
            'off' => ['value' => 1, 'text' => '普通用户', 'color' => 'default'],
        ]);
        $form->date('end_time', '会员到期时间')->default('1970-01-01');
        $form->number('kb', '喜币余额');

        $form->submitted(function (Form $form) {
            if ($form->isEditing()) {
                $fields = ['name', 'phone', 'password'];
                foreach ($fields as $field) {
                    if (empty(request()->get($field)) && empty($form->$field))
                        $form->ignore([$field]);
                }
            }
        });

        $form->saving(function (Form $form) {
            $form->password = encrypt($form->password);
        });

        return $form;
    }
}