<?php

namespace App\Admin\Forms;

use App\Models\Category;
use App\Models\Scene;
use App\Models\ScenePage;
use Encore\Admin\Widgets\Form;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SceneCrawl3 extends Form
{
    /**
     * The form title.
     *
     * @var string
     */
    public $title = '婚贝模板采集';

    /**
     * @var array
     */
    protected $sceneInfo = [];
    /**
     * @var array
     */
    protected $scenePageList = [];

    /**
     * Handle the form request.
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\RedirectResponse
     * @throws GuzzleException
     */
    public function handle(Request $request)
    {
        /** @var  $code */
        $code = $request->input('code');
        /** @var  $mainClassId */
        $mainClassId = $request->input('mainClassId');
        /** @var  $subClassId */
        $subClassId = $request->input('subClassId');

        if (Scene::query()->where('source_code', $code)->exists()) {
            admin_error('模板[' . $code . ']已存在');
            return redirect()->away(route('scene.crawl3'));
        }

        $this->initSceneInfo($code);
        /**
         * @var Scene $sceneModel
         * @var ScenePage[] $scenePageModelList
         */
        $sceneModel = $this->getSceneModel($mainClassId, $subClassId);
        $scenePageModelList = $this->getScenePageList();

        DB::transaction(function () use ($sceneModel, $scenePageModelList) {
            $sceneModel->save();
            $sceneId = $sceneModel->id;
            foreach ($scenePageModelList as $page) {
                $page->scene_id = $sceneId;
                $page->save();
            }
        });

        admin_success('模板[' . $code . ']采集成功');
        return back();
    }

    /**
     * @throws GuzzleException
     * @throws \JsonException
     */
    private function initSceneInfo($code)
    {
        /** @var  $client */
        $client = new Client();
        /** @var  $url */
        $url = sprintf('https://h5.hunbei.com/view/%s', $code);
        /** @var  $response */
        $response = $client->request('GET', $url);
        $response = $response->getBody()->getContents();
        $matches = [];
        preg_match('/var scene = \{id:(.+?),/', $response, $matches);
        $sceneId = $matches[1] ?? '';
        preg_match('/var read_sc_ac="(.+?)";/', $response, $matches);
        $accessKey = $matches[1] ?? '';
        $sceneInfoUrl = sprintf('http://dzqj.dianziyaoqinghan.com/index.php?c=scene&a=view&id=%s&c_ac=%s&time=%s', $sceneId, $accessKey, intval(microtime(true) * 1000));
        $response = $client->request('GET', $sceneInfoUrl);
        $response = json_decode(trim(str_replace(["\r\n", "\t", "\r", "\n"], "", htmlspecialchars_decode($response->getBody()->getContents())), chr(239) . chr(187) . chr(191)), true, 512, JSON_THROW_ON_ERROR);
        if (empty($response['obj'])) {
            admin_error('获取请柬邀请函[' . $code . ']模板信息失败，请确认后重试');
            return redirect()->away(route('scene.crawl2'));
        }
        $this->sceneInfo = $response['obj'];
        $this->scenePageList = $response['list'];
    }

    /**
     * @param $mainClassId
     * @param $subClassId
     * @return Scene
     * @throws GuzzleException
     */
    private function getSceneModel($mainClassId, $subClassId)
    {
        /** @var  $sceneData */
        $sceneData = $this->sceneInfo;
        /** @var  $cover */
        $cover = $sceneData['cover'];
        $sceneData['cover'] = $this->storeSrcFile($cover);
        if (is_string($sceneData['bgAudio'])) {
            $sceneData['bgAudio'] = json_decode($sceneData['bgAudio'], true);
        }
        /** @var  $musicUrl */
        $musicUrl = $sceneData['bgAudio']['url'] ?? '';
        if (!empty($musicUrl)) {
            $sceneData['bgAudio']['url'] = $this->storeSrcFile($musicUrl);
        }

        /** @var  $attrs */
        $attrs = [
            'name' => $sceneData['name'] ?? '',
            'description' => $sceneData['description'] ?? '',
            'cover' => $sceneData['cover'] ?? '',
            'is_luckmoney' => 1,
            'is_gift' => 1,
            'is_wish' => 1,
            'price' => 0,
            'main_class_id' => $mainClassId,
            'sub_class_id' => $subClassId,
            'is_show_btn' => 1,
            'is_show_preview' => 1,
            'is_show_guide' => 0,
            'is_wish_h5' => 1,
            'barrage_text' => '送上您的祝福',
            'end_page' => 1
        ];
        $attrs['property'] = [
            'wxCount' => 0,
            'autoFlipTime' => 3,
            'yqcAd' => false,
            'autoFlip' => false,
            'slideNumber' => true,
            'triggerLoop' => true,
            'forbidHandFlip' => false,
            'shareDes' => [
                'title' => $sceneData['name'] ?? '',
                'description' => $sceneData['description'] ?? '',
            ],
            'wxClickFarmerCount' => 0,
            'editorModel' => 1,
        ];
        /** @var  $attrs */
        $attrs = array_merge($attrs, [
            'code' => $this->generateSceneCode(),
            'source_code' => $sceneData['code'],
            'music_url' => $sceneData['bgAudio']['url'],
        ]);
        return new Scene($attrs);
    }

    /**
     * @return \Illuminate\Http\RedirectResponse|string
     */
    private function generateSceneCode()
    {
        $tryCount = 0;
        while ($tryCount < 5) {
            $code = strtoupper(uniqid('DXT'));
            if (!Scene::query()->where('code', $code)->exists()) {
                return $code;
            }
            $tryCount++;
        }
        admin_error('生成模板编号失败，请重试');
        return redirect()->away(route('scene.crawl2'));
    }

    /**
     * @return array
     * @throws GuzzleException
     */
    private function getScenePageList()
    {
        /** @var  $result */
        $result = [];
        /** @var  $srcFields */
        $srcFields = ['src', 'originSrc', 'svgSrc', 'maskSrc', 'imgSrc'];
        foreach ($this->scenePageList as $pageItem) {
            $property = $pageItem['properties'];
            $extend = $pageItem['extend'] ?? [];
            $content = $pageItem['elements'] ?? [];
            $num = $pageItem['num'];
            $compIds = [];
            foreach ($content as &$element) {
                $compIds[] = $element['id'];
                foreach ($srcFields as $field) {
                    $src = $element['properties'][$field] ?? '';
                    if (!empty($src)) {
                        $element['properties'][$field] = $this->storeSrcFile($src);
                    }
                }
            }
            if (empty($extend)) {
                $extend = [
                    'screens' => [
                        'compIds' => $compIds,
                        'id' => 'layer:' . mt_rand(1000000000, 9999999999)
                    ]
                ];
            }
            if (!empty($property['thumbSrc'])) {
                $property['thumbSrc'] = $this->storeSrcFile($property['thumbSrc']);
            }
            $result[] = new ScenePage([
                'num' => $num,
                'content' => $content,
                'extend' => $extend,
                'property' => $property
            ]);
        }

        return $result;
    }

    /**
     * @param $src
     * @return string
     * @throws GuzzleException
     */
    private function storeSrcFile($src)
    {
        if (empty($src)) {
            return '';
        }
        if (strpos($src, '.com') === false) {
            if (strpos($src, 'syspic') !== false) {
                $src = 'http://img.eqiyingxiao.com/Uploads/' . ltrim($src, '/');
            } else {
                $src = 'http://dzqj.dianziyaoqinghan.com/Uploads/' . ltrim($src, '/');
            }
        }
        return storeFile($src, 'scene');
    }

    /**
     * Build a form here.
     * @return void
     */
    public function form()
    {
        $this->text('code', '婚贝模板模板编码')->rules('required');
        $topCategoryList = Category::query()
            ->where('type', 1)
            ->where('pid', 0)
            ->orderBy('sort')
            ->pluck('name', 'id')->toArray();
        $this->select('mainClassId', '一级品类')->options($topCategoryList)
            ->load('subClassId', '/admin/category/subCategory')->rules('required');
        $this->select('subClassId', '二级品类')->rules('required');

        /** @var  $typeList */
        $typeList = [
            1 => '翻页',
            2 => '长页'
        ];
        $this->select('showType', '翻页类型')->options($typeList)->rules('required');
    }
}
