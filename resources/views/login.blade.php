<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>大喜帖 登录</title>
    <meta name="Description" content="大喜帖 登录" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">

    <style>
        html,
        body,
        dl,
        dt,
        dd,
        ul,
        ol,
        li,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        form,
        input,
        label,
        textarea,
        p {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none
        }

        body {
            font: 400 14px/1.5;
            background: #D9E2E1;
        }

        a {
            text-decoration: none;
            color: #666
        }

        em,
        i {
            font-style: normal
        }

        img {
            border: none;
            vertical-align: middle
        }

        ol,
        ul {
            list-style: none
        }

        /**/
        .phlog {
            width: 100%;
            height: 100%;
            padding-top: 10%;
            margin: 0 auto;
        }

        @media screen and (min-width: 800px) {
            .phlog {
                width: 400px;
            }
        }

        .phlog_logo {
            width: 60%;
            margin: 0px auto 0px auto;
        }

        .phlog_mian {
            width: 80%;
            margin: 0px auto 0px auto;
            padding-top: 0;
        }

        .log_btn {
            width: 80%;
            margin: 0px auto;
        }

        .log_wx,
        .log_qq,
        .log_tel,
        .log_mobile {
            width: 100%;
            margin: 0px auto;
            z-index: 2;
            border-radius: 45px;
            margin: 30px 0px;
        }

        .log_tel {
            text-align: center;
            display: none;
        }

        .log_wx {
            background: #5fb337;
        }

        .log_qq {
            background: #44a0ed;
        }

        .log_mobile {
            background: #FA798F;
        }

        .log_tel {
            border: 1px #333534 solid;
        }

        .log_wx a,
        .log_qq a,
        .log_mobile a {
            display: block;
            line-height: 300%;
            color: #fff;
        }

        .log_tel a {
            display: block;
            line-height: 300%;
            color: #333534;
        }

        .log_wx a i,
        .log_qq a i,
        .log_mobile a i {
            margin: 0 3% 0 30%;
            font-size: 20px;
        }

        .log_acc {
            clear: both;
            color: #a2a8aa;
            opacity: 0.7;
            font-size: 12px;
            padding: 20px;
            text-align: center;
            display: none;
        }

        .log_acc a {
            clear: both;
            display: block;
            color: #686c6d;
            opacity: 0.7;
            font-size: 12px;
            line-height: 40px;
            text-align: center;
        }

        .log_acc a.acc_ed {
            text-decoration: underline;
        }

        .pclog_foot {
            width: 1000px;
            margin: 0px auto;
            font-size: 12px;
            color: #fff;
            opacity: 0.7;
            text-align: center;
            position: fixed;
            bottom: 20px;
            left: 50%;
            margin-left: -500px;
        }

        /**/
        .select_mask {
            display: none;
            position: fixed;
            z-index: 999;
            left: 0;
            top: 0;
            background: #000;
            height: 100%;
            width: 100%;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
            filter: alpha(opacity=50);
            opacity: 0.5;
        }

        .tip_box {
            display: none;
            position: absolute;
            z-index: 1000;
            left: 50%;
            top: 20%;
            width: 260px;
            margin-left: -130px;
            background: #FFF;
            border-radius: 5px;
            opacity: 1;
            text-align: left;
            padding: 15px 15px;
            line-height: 25px;
        }

        /**/
    </style>

    <script src="https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.2.0/css/font-awesome.min.css">
</head>

<body onselectstart="return true;" ondragstart="return false;">
<div class="phlog">
    <div class="phlog_logo" onclick="location.reload()">
        <img src="{{ asset('static/img/dxt_logo.png') }}" alt="大喜贴出品" width="100%" height="200px">
    </div>
    <div class="phlog_mian">
        <ul class="log_btn">
            <li class="log_wx">
                <a href="{{ $loginUrl }}" {!! $loginUrl=='javascript:;' ? 'id="get_tip_btn"' : '' !!}>
                    <i class="fa fa-wechat"></i>
                    微信快速登录
                </a>
            </li>
            <li class="log_qq">
                <a href="/card/login/qq_login">
                    <i class="fa fa-qq"></i>
                    QQ快速登录
                </a>
            </li>
            <li class="log_mobile">
                <a href="/#/login?action=login">
                    <i class="fa fa-mobile"></i>
                    手机号码登录
                </a>
            </li>
            <li class="log_mobile">
                <a href="/#/register?action=register">
                    <i class="fa fa-mobile"></i>
                    手机号码注册
                </a>
            </li>
            <li class="log_tel">
                <a href="javascript:;" onclick="alert('升级中')">商家版登录</a>
            </li>
        </ul>
    </div>
</div>
<div class="select_mask" id="select_mask"></div>
<div id="tip_box" class="tip_box">
    请用微信操作，详细如下：<br>
    <br>
    1、点击微信右上角<br>
    2、再点击【添加朋友】<br>
    3、然后点击【公众号】<br>
    4、输入“大喜帖”，然后点关注<br>
    5、进入公众号后点【立即制作】

</div>
<script type="text/javascript">
    $("#select_mask").bind("click", function () {
        $("#select_mask").fadeOut();
        $("#tip_box").fadeOut();
    });

    $("#tip_box").click(function (event) {
        //阻止事件向上冒泡
        event.stopPropagation();
    });

    $("#get_tip_btn").bind("click", function () {
        $("#select_mask").fadeIn();
        $("#tip_box").fadeIn();
    });

</script>

<div class="chat_box" style="position: fixed;right: 0;top: 35%;">
    <a href='/#/contactKf'><img src="{{asset('static/img/kf_box.png')}}"  alt=""/></a>
</div>

</body>

</html>