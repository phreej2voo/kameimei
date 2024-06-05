<?php

namespace App\Admin\Controllers;

use App\Models\Music;
use App\Models\User;
use App\Models\Category;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Grid\Displayers\Actions;
use Illuminate\Support\Facades\Storage;

class MusicController extends AdminController
{
    protected $title = '会员音乐';

    protected $description = [
        'index' => '音乐列表',
        'show' => '音乐信息',
        'edit' => '编辑音乐',
        'create' => '添加音乐'
    ];

    /**
     * @return Grid
     */
    protected function grid()
    {
        /** @var  $music */
        $music = new Music();
        /** @var  $grid */
        $grid = new Grid($music);

        $grid->model()->orderBy('id', 'desc');

        $grid->column('id', 'ID');

        $grid->column('name', '名称');

        $grid->column('url', '音频链接播放')->display(function ($url) {
            /** @var  $fileType */
            $fileType = 'mp3';
            if (strpos($this->name, 'm4a') !== false) {
                $fileType = 'm4a';
            }
            /** @var  $src */
            $src = 'https://m.daxitie.com/scene/'.$url;
            if (strpos($this->url, 'mp3') === false && strpos($this->url, 'm4a') === false) {
                $src .= '.'.$fileType;
            }
            return '<audio controls><source src="'.$src.'"></audio>';

            // return '<audio src="'.Storage::disk('scene')->get($this->url.'.'.$fileType).'" />';
            // https://m.daxitie.com/scene/'.$this->url.'.'.$fileType.'"
            // <source src="https://m.daxitie.com/scene/'.$this->url.'.'.$fileType.'">
            // return '<audio controls><source src="https://m.daxitie.com/scene/'.$this->url.'.'.$fileType.'"></audio>';
        });

        /** @var  $topCategoryList */
        $topCategoryList = Category::query()
            ->where('pid', 0)
            ->where('type', Category::TYPE_MUSIC)
            ->orderBy('sort')
            ->pluck('name')->toArray();
        /** @var  $topCategoryList */
        $topCategoryList = array_merge([0=>'全部'], $topCategoryList);
        $grid->column('cat_id', '分类')->display(function ($id) use ($topCategoryList) {
            return $topCategoryList[$id] ?? '';
        });

        $grid->column('user_id', '用户')->display(function ($id) {
            /** @var  $user */
            $user = User::query()->find($id);
            return $user->name ?? '系统管理员';
        });

        //$grid->disableCreateButton();
        $grid->actions(function (Actions $actions) {
            $actions->disableView();
        });

        return $grid;
    }

    /**
     * @return Form
     */
    protected function form()
    {
        /** @var  $music */
        $music = new Music();
        /** @var  $form */
        $form = new Form($music);

        /** @var  $topCategoryList */
        $topCategoryList = Category::query()
            ->where('pid', 0)
            ->where('type', Category::TYPE_MUSIC)
            ->orderBy('sort')
            ->pluck('name')->toArray();
        $this->select('cat_id', '分类')->options(array_merge([0=>'全部'], $topCategoryList))->rules('required');

        $form->text('name', '音频名称')->required();

        $form->file('url', '音频编辑')->required()->rules('mimes:mp3,m4a')->name(function ($file) {
            dd($file, $file->guessExtension(), $file->getRealPath(), $file->getClientOriginalName());

            // files/
            $this->name = $file->getClientOriginalName();
            $storeFileName = storeFile($file->getRealPath(), 'scene', $file->guessExtension());
            dd($file, $file->guessExtension(), $file->getRealPath(), $storeFileName);
            return ltrim($storeFileName, 'files/');
            return storeFile($file->getRealPath(), 'scene', $file->guessExtension());
            // return 'test.'.$file->guessExtension();
        });
//            ->prepare(function ($file) {
//            dd($file);
//            return '';
//        });

        $fields = array_keys($music->getFieldMap());
        $form->ignore(array_diff($fields, ['id', 'cat_id', 'name', 'url']));

        return $form;
    }
}