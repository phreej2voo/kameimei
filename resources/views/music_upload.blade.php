<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>音乐上传 - 大喜帖</title>
    <style>
        body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, input, textarea, p, blockquote {
            margin: 0;
            padding: 0;
            /* font-size: 100%;*/
            font-weight: normal;
        }

        ol, ul, li {
            list-style: none outside none;
        }

        a, a:active, a:hover, a:focus {
            text-decoration: none;
            outline: none;
            color: #999;
        }

        html, body {
            height: 100%;
            -webkit-touch-callout: none;
        }

        input, button, textarea {
            outline: none;
            border: 0;
            vertical-align: middle;
            border: 0;
            font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        }

        input[type="submit"], input[type="reset"], input[type="button"], button {
            -webkit-appearance: none;
            border-radius: 0
        }

        button {
            cursor: pointer;
        }

        select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none
        }

        select::-ms-expand {
            display: none;
        }

        textarea {
            resize: none
        }

        img {
            border: 0;
            vertical-align: middle;
        }

        span, b, i, em {
            display: inline-block;
            font-style: normal
        }

        body {
            background: #fff;
            width: 100%;
            min-height: 100%;
            text-align: left;
            font-size: 14px;
            font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        }

        .clearfix:after {
            content: ".";
            display: block;
            height: 0;
            visibility: hidden;
            clear: both;
        }

        .clearfix {
            *zoom: 1;
            overflow: hidden
        }

        .gotoUrl {
            cursor: pointer;
        }

        .cursorpoint {
            cursor: pointer;
        }

        .failed {
            background: #999 !important;
            color: #fff !important;
        }

        .floatleft {
            float: left;
            display: block
        }

        .floatright {
            float: right;
            display: block
        }

        .clear {
            clear: both
        }

        .foot {
            width: 100%;
            min-width: 1200px;
            background: #fafafa;
            border-top: 1px solid #e7e7e7;
            /*margin-top:80px;*/
            float: left;
        }

        .linkcom {
            width: 100%;
            min-width: 1200px;
            background: #333;
            color: #ccc;
            padding: 20px 0;
            margin-top: 20px;
            float: left;
        }

        .linkcom p {
            text-align: center;
            line-height: 30px;
        }

        .linkcom p a {
            cursor: pointer;
            color: #ccc;
            padding: 5px
        }

        .linkcom p a:hover {
            text-decoration: underline;
        }

        .top {
            padding: 20px;
        }

        .top, .middle {
            width: 1200px;
            margin: 0 auto;
        }

        .box {
            width: 420px;
            margin: 0 auto;
        }

        .box1 {
            text-align: center;
        }

        .box2 {
            text-align: center;
        }

        .box2 h3 {
            font-size: 28px;
            color: #000;
            line-height: 28px;
            margin-top: 40px;
        }

        .box2 h4 {
            font-size: 14px;
            color: #000;
            line-height: 24px;
            margin-top: 15px;
        }

        .box3 {
            width: 418px;
            height: 256px;
            border: 1px solid #e7e7e7;
            margin-top: 25px;
            border-radius: 4px;
        }

        .box3 ul {
            width: 100%;
            padding: 13px 0;
        }

        .box3 li {
            width: 360px;
            margin-left: 29px;
            font-size: 14px;
            color: #000;
            line-height: 46px;
        }

        .box3 li em {
            font-size: 16px;
            color: #f83244;
            font-weight: bold;
            float: right;
        }

        .box3 li i {
            font-size: 24px;
            color: #aaa;
            float: right;
            display: none;
            cursor: pointer;
        }

        #box4, #box5 {
            width: 100%;
            text-align: center;
            margin-top: 40px;
            padding-bottom: 100px;
        }

        #upload {
            width: 240px;
            height: 48px;
            margin: 0 auto;
            background: #f83244;
            color: #fff;
            font-size: 16px;
            border-radius: 24px;
        }

        #box5 {
            display: none;
        }

        #upload1 {
            width: 240px;
            height: 48px;
            margin: 0 auto;
            background: #ccc;
            color: #fff;
            font-size: 16px;
            border-radius: 24px;
        }

        .open_box {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 2;
            display: none;
        }

        .open_box1 {
            width: 480px;
            height: 280px;
            background: #fff;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }

        .open_box1 p {
            width: 100%;
            text-align: center;
            font-size: 16px;
            color: #333;
            line-height: 200px;
        }

        .open_box1 div {
            width: 100%;
            text-align: center;
        }

        .open_box1 a {
            width: 108px;
            height: 40px;
            border-radius: 4px;
            cursor: pointer;
            border: 1px solid #e8e8e8;
            color: #666;
            display: inline-block;
            text-align: center;
            line-height: 40px;
        }

        .open_box1 a.onok_but {
            background: #F83244;
            color: #fff;
            margin-right: 30px;
        }

        .open_box2 {
            width: 410px;
            height: 40px;
            background: #fff;
            border-radius: 4px;
            box-shadow: 0 0 5px 5px #f5f5f5;
            position: fixed;
            top: 40px;
            line-height: 40px;
            text-align: center;
            left: 50%;
            margin-left: -135px;
            display: none;
        }

        .open_box2 img {
            width: 14px;
        }
    </style>
</head>
<body>
<div class="top">
    <img src="{{asset('static/img/daxitie_logo.png')}}" width="250px"/>
</div>
<div class="middle">
    <div class="box">
        <div class="box1">
            <img src="{{asset('static/img/o_1bobn7cp1jon89u7qp1njk1gqd9.jpg')}}"/>
        </div>
        <div class="box2">
            <h3>音乐上传</h3>
            <h4>
                您最多可上传 <span style="color: #F83244">5</span> 首mp3或m4a格式的音乐，为了保证请帖能流畅播放，请控制文件大小
                （建议音乐品质：标准品质；大小：小于2M）
            </h4>
        </div>
        <div class="box3">
            <ul class="ul1">
                <!--<li><span>I like.mp3</span><i class="closed" style="display: block">×</i></li>-->
                <!--<li><span>I like.mp3</span><em>24%</em><i>×</i></li>-->
                <!--<li><span>I like.mp3</span><em>24%</em><i>×</i></li>-->
            </ul>
        </div>
        <div id="box4">
            <button id="upload">点此上传音乐</button>
        </div>
        <div id="box5">
            <button id="upload1">点此上传音乐</button>
        </div>
    </div>
</div>
<div class="bottom">
    <div class="foot">
        <div class="linkcom">
            <p>版权所有 @ 2016-2020 大喜帖</p>
        </div>
    </div>
</div>
<div class="open_box">
    <div class="open_box1">
        <p>是否删除这首音乐?</p>
        <div>
            <a class="onok_but">是的</a>
            <a class="close_but">取消</a>
        </div>
    </div>
</div>
<div class="open_box2">
    <img src="{{asset('static/img/o_1bocahtuq13r7tev1ffq1upo15ef7.jpg')}}"/>
    <span>音乐上传成功，手机上音乐选择界面，刷新后可见</span>
</div>
<script src="https://cdn.staticfile.org/jquery/2.0.0/jquery.min.js"></script>
<script src="{{asset('static/js/plupload.full.min.js')}}"></script>
<script src="{{asset('static/js/music.qiniu.js')}}"></script>
<script>
    var _Code = '{!! $code !!}';
    var updata = {
        base: function () {
            $('.close_but').on('click', function () {
                $('.open_box').hide()
            })
            updata.music_list()
            updata.uploader('upload', 'box4', function () {
                for (var i in seletA) {
                    var _html = '<li id=' + seletA[i].id + '><span></span><em class="' + seletA[i].id + '"></em><i class="closed">×</i></li>';
                    $('.ul1').prepend(_html)
                }
            }, function () {
                $('#' + seletB.id + ' span').html(_name);
                $('.' + seletB.id + '').html(Percent + '%');
            }, function () {
                $('.' + seletB.id + '').remove();
                $('.closed').show();
                /*$('#'+seletC.id+'').find('i').attr('num_id',_persistent_id);*/
                /*$('#'+seletC.id+'').find('span').eq(1).find('em').text(fileSize);
                $('#'+seletC.id+'').find('span').eq(2).find('em').text(sourceLink);*/
            }, function (data) {
                $.ajax({
                    url: '/music/upload',
                    type: 'post',
                    data: {
                        code: _Code,
                        song: data
                    },
                    success: function (result) {
                        console.log(result)
                        if (result.status.RetCode == 0) {
                            $('.open_box2 img').attr('src', '{!! asset('static/img/o_1bocahtuq13r7tev1ffq1upo15ef7.jpg') !!}')
                            $('.open_box2 span').html('音乐上传成功，手机上刷新后可见')
                            $('.open_box2').show()
                            updata.music_list()
                            setTimeout(function () {
                                $('.open_box2').hide()
                            }, 5000)
                        } else {
                            $('.open_box2 img').attr('src', '{!! asset('static/img/o_1bornj5v3ata1sn8a6c1m4slog7.png') !!}')
                            $('.open_box2 span').html(result.status.msg)
                            $('.open_box2').show()
                            updata.music_list()
                            setTimeout(function () {
                                $('.open_box2').hide()
                            }, 5000)
                        }
                    }
                })
            })
        },
        uploader: function (_pickBtn, _pickBox, load, upNum, func, add) {
            var uploader = Qiniu.uploader({
                runtimes: 'html5,flash,html4',
                browse_button: _pickBtn,
                container: _pickBox,
                drop_element: 'container',
                max_file_size: '2mb',
                flash_swf_url: 'static/js/Moxie.swf',
                max_retries: 3,
                dragdrop: false,
                unique_names: true,
                multi_selection: false,
                //false 为单选
                filters: {
                    mime_types: [{
                        title: "Video files",
                        extensions: "mp3,m4a"
                    }]
                },
                chunk_size: '4mb',
                uptoken: '{!! $code !!}',
                uptoken_url: '{!! route('api.getMusicUpToken', ['code' => $code]) !!}',
                domain: '{!! rtrim(env('APP_URL'), '/') !!}',
                auto_start: true,
                init: {
                    'FilesAdded': function (up, files) {
                        seletA = files;
                        console.log(seletA)
                        if (load != '') {
                            load()
                        }
                    },
                    'BeforeUpload': function (up, file) {
                        var li_num = $('.box3 .ul1 li').length
                        if (li_num >= 4) {
                            $('#box4').hide()
                            $('#box5').show()
                        }
                        fileSize = plupload.formatSize(file.size).toUpperCase();
                        _name = file.name;
                        if (file.size > 2*1024*1024) {
                            $('.open_box2 img').attr('src', '{!! asset('static/img/o_1bornj5v3ata1sn8a6c1m4slog7.png') !!}')
                            $('.open_box2 span').html('请控制文件大小小于 2M')
                            $('.open_box2').show()
                            setTimeout(function () {
                                $('.open_box2').hide()
                            }, 5000)
                            return false;
                        }
                        console.log('大小:' + fileSize + ',' + file.size, _name)
                        return true;
                    },
                    'UploadProgress': function (up, file) {
                        $('#box4').hide()
                        $('#box5').show()
                        seletB = file;
                        console.log(file.percent)
                        Percent = file.percent;
                        if (upNum != '') {
                            upNum()
                        }
                    },
                    'FileUploaded': function (up, file, info) {
                        seletC = file;
                        var domain = up.getOption('domain');
                        var res = jQuery.parseJSON(info);
                        console.log(file, res)
                        // _origin_path = domain + res.key;
                        // // _size = res.avinfo.format.size;
                        // if (func != '') {
                        //     func()
                        // }
                        // var data = {
                        //     name: _name,
                        //     origin_path: _origin_path,
                        // }
                        // if (add != '') {
                        //     add(data)
                        // }
                    },
                    'UploadComplete': function () {
                        var li_num = $('.box3 .ul1 li').length
                        if (li_num >= 5) {
                            $('#box4').hide()
                            $('#box5').show()
                        } else {
                            $('#box5').hide()
                            $('#box4').show()
                        }
                    },
                    'Error': function (up, err, errTip) {
                        console.log('weewr')
                        $('.open_box2 img').attr('src', '{!! asset('static/img/o_1bornj5v3ata1sn8a6c1m4slog7.png') !!}')
                        $('.open_box2 span').html('请控制文件大小小于 2M')
                        $('.open_box2').show()
                        setTimeout(function () {
                            $('.open_box2').hide()
                        }, 5000)
                    }
                }
            });
            $(document).on('click', '.closed', function () {
                var _id = $(this).attr('num_id')
                $('.open_box').show()
                console.log(_id)
                $('.onok_but').on('click', function () {
                    updata.delmusic(_id)
                })
            })
        },
        delmusic: function (_id) {
            //删除音乐
            $.ajax({
                url: '/music/del',
                type: 'post',
                data: {
                    code: _Code,
                    id: _id
                },
                success: function (result) {
                    console.log(result)
                    if (result.status.RetCode == 0) {
                        $('.open_box').hide()
                        $('.open_box2 img').attr('src', '{!! asset('static/img/o_1bocahtuq13r7tev1ffq1upo15ef7.jpg') !!}')
                        $('.open_box2 span').html('操作成功')
                        $('.open_box2').show()
                        updata.music_list()
                        setTimeout(function () {
                            $('.open_box2').hide()
                        }, 5000)
                    }
                }
            })
        },
        music_list: function () {
            //获取音乐列表
            $.ajax({
                url: '/music/upload/list',
                type: 'get',
                data: {
                    code: _Code,
                    from: 'PC'
                },
                success: function (result) {
                    console.log(result)
                    var _html = '';
                    for (var i = 0; i < result.data.length; i++) {
                        _html += '<li><span>' + result.data[i].name + '</span><i class="closed" num_id="' + result.data[i].id + '">×</i></li>'
                    }
                    $('.box3 .ul1').html(_html)
                    $('.closed').show();
                    var li_num = $('.box3 .ul1 li').length;
                    if (li_num >= 5) {
                        $('#box4').hide()
                        $('#box5').show()
                    } else {
                        $('#box5').hide()
                        $('#box4').show()
                    }
                }
            })
        }
    }
    updata.base()
</script>
</body>
</html>
