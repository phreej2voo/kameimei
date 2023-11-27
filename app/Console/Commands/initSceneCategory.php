<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\Gift;
use GuzzleHttp\Client;
use Illuminate\Console\Command;

class initSceneCategory extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'init:sceneCategory';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '初始化场景分类';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $client = new Client();
        $topCategoryData = json_decode(file_get_contents(resource_path('json/scene_top_category.json')), true);
        foreach ($topCategoryData['data']['list'] ?? [] as $index => $topCategory) {
            $name = $topCategory['title'];
            Category::query()->updateOrCreate(['type' => Category::TYPE_SCENE, 'name' => $name, 'pid' => 0], ['sort' => $index + 1]);
        }
        foreach ($topCategoryData['data']['list'] as $pIndex => $topCategory) {
            $file = resource_path('json/category_' . ($pIndex+1) . '.json');
            $categoryData = json_decode(file_get_contents($file), true);
            foreach ($categoryData['data']['list'] as $index => $item) {
                $name = $item['cate']['name'];
                $cat = Category::query()->updateOrCreate(['type' => Category::TYPE_SCENE, 'pid' => $pIndex + 1, 'name' => $name], ['sort' => $index + 1]);
                $url = 'http://m.kameimei.cn/h5/view/egift?egift_sid=' . $item['cate']['tagid'];
                $response = $client->request('get', $url)->getBody()->getContents();
                $giftList = json_decode($response, true)['data']['gift_list'] ?? [];
                /**
                 * create table gift (
                `id` int unsigned not null auto_increment primary key comment 'ID',
                `cat_id` int unsigned not null default 0 comment '分类ID',
                `title` varchar(120) not null default '' comment '名称',
                `info` varchar(255) not null default '' comment '提示语',
                `icon` varchar(255) not null default '' comment '图标',
                `price` decimal(10,2) not null default 0.00 comment '价格',
                index `idx_cat_id` (`cat_id`)
                );
                 */
                foreach ($giftList as $gift) {
                    $icon = storeFile($gift['icon'], 'static');
                    Gift::query()->updateOrCreate(
                        [
                            'cat_id' => $cat->id,
                            'title' => $gift['title'],
                            'default' => 0,
                        ],
                        [
                            'info' => $gift['info'],
                            'icon' => $icon,
                            'price' => $gift['price'],
                        ]);
                }
                $sceneId = $item['scene'][0]['id'] ?? false;
                if (!empty($sceneId)) {
                    $url = 'http://m.kmmqt.com/h5/view/egift?id=' . $sceneId .'&egift_sid=' . $item['cate']['tagid'];
                    $this->info('url:' . $url . PHP_EOL);
                    $response = $client->request('get', $url)->getBody()->getContents();
                    $sentList = json_decode($response, true)['data']['sent_list'] ?? [];
                    if (!empty($sentList)) {
                        foreach ($sentList as $sent) {
                            $icon = storeFile($sent['icon'], 'static');
                            Gift::query()->updateOrCreate(
                                [
                                    'cat_id' => $cat->id,
                                    'title' => $sent['title'],
                                    'default' => 1,
                                ],
                                [
                                    'info' => $sent['info'],
                                    'icon' => $icon,
                                ]
                            );
                            break;
                        }
                    }
                }
            }
        }
        return 0;
    }
}
