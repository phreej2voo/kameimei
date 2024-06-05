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
     * 初始化生成详情数据
     * @param int $sceneId
     * @return \Illuminate\Http\RedirectResponse|void
     * @throws GuzzleException
     * @throws \JsonException
     */
    private function initSceneInfo(int $sceneId)
    {
        // Create a client with headers and a base URI
        /** @var  $client */
        $client = new Client([
            'headers' => [
                'Content-Length' => 57,
                'Content-Type' => 'application/x-www-form-urlencoded',
                'Host' => 'h5.hunbei.com'
            ],
            'base_uri' => 'https://h5.hunbei.com'
        ]);
        /** @var  $response */
        $response = $client->request('POST', '/index/Preview/getScene1', [
            'form_params' => [
                'scene_id' => $sceneId,
                'preview' => 1,
                'openid' => '',
                'fUser' => '',
                'stop' => 0,
                'show' => 'all'
            ]
        ]);
        /** @var  $data */
        $data = json_decode($response->getBody()->getContents());
        dd($this->decryptByAES($data->data));
        //dd(json_decode($response->getBody()->getContents()));
        /*if (empty($response['obj'])) {
            admin_error('获取请柬邀请函[' . $code . ']模板信息失败，请确认后重试');
            return redirect()->away(route('scene.crawl2'));
        }
        $this->sceneInfo = $response['obj'];
        $this->scenePageList = $response['list'];*/
    }

    /**
     * @param string $string
     * @param string $key
     * @return false|string|void
     */
    private function decryptByAES(string $string, string $key='SMCs5dzwOfTePGZh') {
        try {
            $string = base64_decode(hex2bin($string));
            $string = $this->base64Stringify($this->hexParse($string));
            $iv_size = openssl_cipher_iv_length('AES-256-CBC');
            $iv = substr($string, 0, $iv_size);
            $string = substr($string, $iv_size);
            $result = openssl_decrypt($string, 'AES-256-ECB', $key, OPENSSL_RAW_DATA | OPENSSL_NO_PADDING, $iv);

            return $result;
        } catch (\Exception $exception) {
            dd($exception->getMessage());
        }
    }

    /**
     * AES解密
     * @param string $string
     * @param string $key
     * @return string
     */
    private function decryptBakByAES(string $string, string $key='SMCs5dzwOfTePGZh')
    {
        try {
            //$string = base64_decode(hex2bin($string));// 对base64编码的字符串进行解码
            $string = base64_decode($string);// 对base64编码的字符串进行解码
            $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
            $iv = substr($string, 0, $iv_size);// 截取IV值
            $string = substr($string, $iv_size);// 截取密文部分
            $result = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, $string, MCRYPT_MODE_CBC, $iv);

            return $result;
        } catch (\Exception $exception) {
            dd($exception->getMessage());
        }
    }

    /**
     * 将十六进制字符串转换为WordArray
     * @param $hexString
     * @return array
     */
    private function hexParse($hexString) {
        $length = strlen($hexString);
        $byteArray = array_fill(0, $length / 2, 0);

        for ($i = 0; $i < $length; $i += 2) {
            $byteArray[$i / 2] = hexdec($hexString[$i] . $hexString[$i + 1]);
        }

        return $byteArray;
    }

    /**
     * 将WordArray转换为Base64字符串
     * @param $wordArray
     * @return string
     */
    private function base64Stringify($wordArray) {
        $length = count($wordArray);
        $base64String = '';

        for ($i = 0; $i < $length; $i++) {
            $base64String .= base64_encode($wordArray[$i]);
        }

        return $base64String;
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
