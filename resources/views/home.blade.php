<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" id="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>大喜帖</title>
    <meta name="keywords" content="微喜帖,微信喜帖,电子喜帖,电子请柬,电子邀请函,电子请帖">
    <meta name="description" content="大喜帖微信电子喜帖让您的邀请更轻松、与从不同。"/>
    <meta name="baidu-site-verification" content="codeva-1Wl7eAoIpD" />
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.staticfile.org/weui/1.1.2/style/weui.min.css">
    <link href="{{asset('static/css/editor.css')}}" rel="stylesheet">
</head>
<body>
<div id="app" style='height: 100%;'></div>
<script>
    var scene = @json(getDomainArr());
</script>
<script src="https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/hammer.js/2.0.8/hammer.min.js"></script>
<script src="https://cdn.staticfile.org/iScroll/5.2.0/iscroll-zoom.min.js"></script>
<script src="{{asset('static/js/lrz.all.bundle.js')}}"></script>
<script src="{{asset('static/js/PhotoClip.js')}}"></script>
<script charset="utf-8" src="https://map.qq.com/api/js?v=2.exp&key=RL6BZ-NQSCI-S32GS-UBKD7-3QKFQ-OWF6G"></script>
<script type="text/javascript" src="{{asset('static/js/editor.js')}}"></script>
@if(isWeixin())
    <script src="//res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
    <script>
        wx.config({!! json_encode(getWXConfig()) !!});
        wx.ready(function () {
            var shareData64 = {
                title: "大喜帖",
                desc: "让邀请更轻松",
                imgUrl: "{{ asset('static/img/logo_100.png') }}",
                link: window.location.href,
            };
            wx.updateTimelineShareData(shareData64);
            wx.updateAppMessageShareData(shareData64);
        });
        wx.error(function (res) {

        });
    </script>
@endif
</body>
</html>
