<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test()
    {
        dd(config('database.connections.mysql'));
    }

    public function test2()
    {
        dd(encrypt('ljgade'));
        $data = 'a="b";b=c;';
            preg_match('/a=\"(.+?)\";/', $data, $row);
            dd($row);
    }

    public function test1()
    {
        dd(parse_url('http://album.h5.kameimei.cn/o_1buvs8nqaajf19f61q5d15v116jk12.png?imageMogr2/auto-orient/thumbnail/54x188%3E/format/webp', PHP_URL_QUERY));
    }

    public const ALI_UA = '';

    protected function Get_curl($url, $a, $b, $c, $d, $ua)
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);    //SSL 报错时使用
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);    //SSL 报错时使用
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        dd(curl_exec($ch));
    }

    public function testCheck_AliLogin($id)
    {

        $intlpay = explode("CodePay", $id);
        $url = "https://securitycore.alipay.com/barcode/barcodeProcessStatus.json?";
        $post_intl["securityId"] = $intlpay[0];
        $post_intl["_callback"] = "light.request._callbacks.callback2";
        $post_intl = http_build_query($post_intl);
        $data_intl = $this->Get_curl($url . $post_intl, 0, 0, 0, 0, $this->ALI_UA);
        $url = "https://authet2.alipay.com/login/index.htm";
        $post["support"] = "000001";
        $post["needTransfer"] = "";
        $post["CtrlVersion"] = "1,1,0,1";
        $post["loginScene"] = "index";
        $post["redirectType"] = "";
        $post["personalLoginError"] = "";
        $post["goto"] = "https://www.alipay.com/";
        $post["errorVM"] = "";
        $post["sso_hid"] = "";
        $post["site"] = "";
        $post["errorGoto"] = "";
        $post["rds_form_token"] = $intlpay[2];
        $post["json_tk"] = "";
        $post["method"] = "qrCodeLogin";
        $post["logonId"] = "";
        $post["superSwitch"] = "true";
        $post["noActiveX"] = "false";
        $post["passwordSecurityId"] = $intlpay[1];
        $post["qrCodeSecurityId"] = $intlpay[0];
        $post["scid"] = "";
        $post["password_input"] = "";
        $post["J_aliedit_using"] = "true";
        $post["password"] = "";
        $post["J_aliedit_key_hidn"] = "password";
        $post["J_aliedit_uid_hidn"] = "alieditUid";
        $post["alieditUid"] = $intlpay[3];
        $post["REMOTE_PCID_NAME"] = "_seaside_gogo_pcid";
        $post["_seaside_gogo_pcid"] = "";
        $post["_seaside_gogo_"] = "";
        $post["_seaside_gogo_p"] = "";
        $post["J_aliedit_prod_type"] = "";
        $post["security_activeX_enabled"] = "true";
        $post["checkCode"] = "";
        $post["idPrefix"] = "";
        $post["preCheckTimes"] = 5;
        $post["ua"] = "dxlTasyfLePewE7ifH7HyT5wJ5cASsGqMaYnOomEiyTBeHyI6CezVWDWcDouca6W6Y4Svep9ulZ8H0cF1X4Mgi.JZTbQL3NddYS7bCmG.cFh45fZXR3kTmjsMi3xByeTW2V5hnaat0y1OOiv8qoAfKgaUuigtJAp3UL2QgUVrpASMRKdStX0h.hzFfH26FHtMkCmnf1nRcw74yljdFFMC03XWUBNZDhPUI0aL76t.NVxaOJQngu.KFQoPrVjSWYgym6MackvvBhmL37Y0s4H.ROLsAdVrDnLoQR7y07wcwWbUSqq.6AdBebIIVg1RHjyn3K9ahqPk_HOBlXyg6_voFZWwvoFlVAZ9c_ARvTidwDCE.18sT9z2ELtWGaAVClk6HN0HXMQUwOH7Rr7sfpn3zp__eOAe75qTBmYMNXnYnChZmqWOAaVdJAcFpjoUtwtwwqcZvdvoX4_UH.06SpF.Z0i85GWt4jSkki5ijEyvav5KeLQX6Tvj7MziuxQasAOVX6CHZu62D3FhWwj1cesYq9iKyzNmhMcqc.ULS88i3oq2vZko8vOI3BFufd0GcYAMI.YS8a4IqoaE4ydLO4ALR.8WuHvpOZiilHq.hOZogZB2QoQApBuo5smKdhzGlcybdYtsoxPtD_jIRXtf7aRzIWtIlcgEHk6RyOhjsA7bSuWurcukkCAvTZtO05xq6s_lmjMUVNeyS34DpiEXKJlqmbi.amq3hj2Oph0AZtvPb8LvZJy8V.aYdcC4RH9UeAOEzzJgpeiiAAUcMRexpGs5ZDcBFdgn4MIXfq2aTIUFVHf0W3in7tGaeNmx1MUIWHHTL_3SmNYyPVaEo5qZzNLTMrc318MBiIFjcTmaub1IJw7IZefBjspVK9bzzYMwhe0ljkUqoCoshjN9rlXjKyJ.vsXLosDb7KEKmWejetEAPRlw2e49JmWJj5ohGrOGzlsTzyMUtY07nlv3gjXWkaUaE";
        $post = http_build_query($post);
        if (!strpos($data_intl, "waiting") && !strpos($data_intl, "scanned")) {
            $data = $this->Get_curl_header($url, $post, 0, $this->ALI_UA);
        }
        $data = $data["header"];
        $ALIPAYJSESSIONID = explode("ALIPAYJSESSIONID=", $data)[2];
        $ALIPAYJSESSIONID = explode("Domain=", $ALIPAYJSESSIONID)[0];
        $ctoken = explode("ctoken=", $data)[2];
        $ctoken = explode("Domain=", $ctoken)[0];
        $CLUB_ALIPAY_COM = explode("CLUB_ALIPAY_COM=", $data)[1];
        $CLUB_ALIPAY_COM = explode("Domain=", $CLUB_ALIPAY_COM)[0];
        $JSESSIONID = explode("JSESSIONID=", $data)[1];
        $JSESSIONID = explode(";", $JSESSIONID)[0];
        $alipay = explode("alipay=", $data)[1];
        $alipay = explode(";", $alipay)[0];
        $spanner = explode("spanner=", $data)[1];
        $spanner = explode(";", $spanner)[0];
        if ($ALIPAYJSESSIONID && $CLUB_ALIPAY_COM) {
            $cookies = "zone=GZ00C; JSESSIONID=" . $JSESSIONID . "; ali_apache_tracktmp=\"uid=" . $CLUB_ALIPAY_COM . "\"; IntroKey=true; session.cookieNameId=ALIPAYJSESSIONID; ALIPAYJSESSIONID=" . $ALIPAYJSESSIONID . " ctoken=" . $ctoken . " CLUB_ALIPAY_COM=" . $CLUB_ALIPAY_COM;
        }
        if (strpos($data_intl, "waiting")) {
            $msg = "等待扫码中";
            $code = 1;
        } elseif (strpos($data_intl, "scanned")) {
            $msg = "等待确认中";
            $code = 2;
        } else {
            $msg = "登录成功";
            $code = 200;
        }
        if ($msg > 0) {
            return ["code" => $code, "msg" => $msg, "cookie" => $cookies,"uid"=>trim($CLUB_ALIPAY_COM,"; ")];
        } else {
            return ["code" => $code, "msg" => $msg, "cookie" => $cookies,"uid"=>trim($CLUB_ALIPAY_COM,"; ")];
        }
    }
}
