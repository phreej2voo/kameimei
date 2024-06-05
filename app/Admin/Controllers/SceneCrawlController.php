<?php

namespace App\Admin\Controllers;

use App\Admin\Forms\SceneCrawl;
use App\Admin\Forms\SceneCrawl2;
use App\Admin\Forms\SceneCrawl3;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Controllers\Dashboard;
use Encore\Admin\Layout\Column;
use Encore\Admin\Layout\Content;
use Encore\Admin\Layout\Row;

class SceneCrawlController extends AdminController
{
    public function index(Content $content)
    {
        $crawlForm = new SceneCrawl();
        return $content
            ->title('模板采集')
            ->description('本采集功能目前仅支持卡美美模板采集')
            ->row(function (Row $row) use ($crawlForm) {

                $row->column(7, function (Column $column) use ($crawlForm) {
                    $column->append($crawlForm->render());
                });

                $row->column(5, function (Column $column) {
                    $column->append(SceneCrawl::recentlyCrawlSceneList());
                });
            });
    }
    
    public function index2(Content $content)
    {
        $crawlForm = new SceneCrawl2();
        return $content
            ->title('请柬邀请函模板采集')
            ->description('本采集功能目前仅支持请柬邀请函模板采集')
            ->row(function (Row $row) use ($crawlForm) {

                $row->column(7, function (Column $column) use ($crawlForm) {
                    $column->append($crawlForm->render());
                });

                $row->column(5, function (Column $column) {
                    $column->append(SceneCrawl::recentlyCrawlSceneList());
                });
            });
    }

    /**
     * @param Content $content
     * @return Content
     */
    public function index3(Content $content)
    {
        return $content
            ->title('婚贝模板采集')
            ->description('本采集功能目前仅支持婚贝模板采集')
            ->row(function (Row $row) {
                $row->column(7, function (Column $column) {
                    $column->append(SceneCrawl::hunbeiCrawlPage());
                });

                $row->column(5, function (Column $column) {
                    $column->append(SceneCrawl::recentlyCrawlSceneList());
                });
            });
    }

    /**
     * @param Content $content
     * @return Content
     */
    public function index4(Content $content)
    {
        $crawlForm = new SceneCrawl3();
        return $content
            ->title('婚贝模板采集')
            ->description('本采集功能目前仅支持婚贝模板采集')
            ->row(function (Row $row) use ($crawlForm) {

                $row->column(7, function (Column $column) use ($crawlForm) {
                    $column->append($crawlForm->render());
                });

                $row->column(5, function (Column $column) {
                    $column->append(SceneCrawl::recentlyCrawlSceneList());
                });
            });
    }
}
