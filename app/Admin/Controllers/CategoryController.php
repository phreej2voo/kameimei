<?php

namespace App\Admin\Controllers;

use App\Models\Category;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use Encore\Admin\Tree;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends AdminController
{
    protected $type;

    public function index(Content $content)
    {
        $tree = new Tree(new Category());
        $tree->query(function ($model) {
            return $model->where('type', $this->type);
        });
        $tree->branch(function ($branch) {
            $logo = '<i style="margin-left: 6px;" class="fa ' . $branch['icon'] . '"></i>';

            if ($branch['pid'] == 0) {
                return "<strong>{$branch['id']} - {$branch['name']}</strong>   $logo";
            } else {
                return "{$branch['id']} - {$branch['name']}   $logo";
            }
        });
        return $content->header((Category::TYPE_NAME_MAP[$this->type] ?? '') . '分类')
            ->body($tree);
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $category = new Category();
        $grid = new Grid($category);

        foreach ($category->getFieldMap() as $name => $comment) {
            $grid->column($name, $comment);
        }

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $category = Category::query()->findOrFail($id);
        $show = new Show($category);

        foreach ($category->getFieldMap() as $name => $comment) {
            $show->field($name, $comment);
        }

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $category = new Category();
        $form = new Form($category);

        $fieldMap = $category->getFieldMap();

        $form->icon('icon', $fieldMap['icon']);

        $pidOptions = Category::query()->where('type', $this->type)
            ->where('pid', 0)->pluck('name', 'id')->toArray();
        $pidOptions = array_merge(['无'], $pidOptions);
        $form->select('pid', $fieldMap['pid'])->options($pidOptions)->default(0);

        $form->text('name', $fieldMap['name']);

        $options = [];
        foreach (Category::TYPE_NAME_MAP as $type => $name) {
            $options[$type] = $name;
        }
        $form->radio('type', $fieldMap['type'])->options($options)->default($this->type);;

        $form->number('sort', $fieldMap['sort']);
        $form->switch('show_in_home_page', $fieldMap['show_in_home_page']);
        $form->datetime('create_time', $fieldMap['create_time'])->default(date('Y-m-d H:i:s'));
        $form->datetime('update_time', $fieldMap['update_time'])->default(date('Y-m-d H:i:s'));

        return $form;
    }

    public function callAction($method, $parameters)
    {
        if (empty(request()->input('icon'))) {
            request()->offsetSet('icon', '');
        }
        return parent::callAction($method, $parameters); // TODO: Change the autogenerated stub
    }

    public function getSubCategoryList(Request $request)
    {
        $mainClassId = $request->input('q');
        if (empty($mainClassId)) {
            return response()->json([]);
        }
        $categoryList = Category::query()->where('pid', $mainClassId)
            ->select(['id', DB::raw('name as text')])
            ->orderBy('sort')
            ->get();
        return response()->json($categoryList);
    }
}
