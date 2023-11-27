<!DOCTYPE html>
<html ng-app="editor" ng-strict-di>

<head>
    <meta charset="utf-8">
    <base href="/c/">
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
    <meta name="baidu-site-verification" content="h9flCsK7dj" />
    <meta http-equiv="pragma" content="no-cache" />
    <title>大喜帖H5电脑版</title>
    <link rel="stylesheet" href="{{asset('static/css/4.0.11_iconfonts.min.css')}}">
    <link rel="stylesheet" href="{{asset('static/css/2.3.2_hint.min.css')}}">
    <link href="{{asset('static/css/editor-9613437_03271817.css')}}" rel="stylesheet">
</head>

<body>
<eqx-loading></eqx-loading>
<eqx-notification></eqx-notification>
<div id="eq_main" ng-view></div>
<div id="content_load_check" class="content_load_check" style="display:none;width:0px;height:0px"></div>

<script>
    var scene_arr = @json(getDomainArr())
</script>
<script src="{{asset('static/js/2.0.3_jquery.min.js')}}"></script>
<script src="{{asset('static/js/1.5.5_angular.min.js')}}"></script>
<script src="{{asset('static/js/1.5.5_angular-route.min.js')}}"></script>
<script src="{{asset('static/js/1.5.5_angular-sanitize.min.js')}}"></script>
<script src="{{asset('static/js/0.12.1_ui-bootstrap.min.js')}}"></script>
<script src="{{asset('static/js/0.12.1_ui-bootstrap-tpls.min.js')}}"></script>
<script src="{{asset('static/js/3.3.7_bootstrap.min.js')}}"></script>
<script src="{{asset('static/js/0.14.3_sortable.min.js')}}"></script>
<script src="{{asset('static/js/0.6.1_js_ngDialog.min.js')}}"></script>
<script src="{{asset('static/js/5.2.1_iscroll.min.js')}}"></script>
<script src="{{asset('static/js/5.2.0_iscroll-probe.min.js')}}"></script>

<script type="text/javascript" src="{{asset('static/js/editor-9613437_03271817.js')}}"></script>
</body>

</html>