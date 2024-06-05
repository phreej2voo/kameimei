<style>

</style>
<div class="box box-default">
    <div class="box-header with-border">
        <h3 class="box-title">婚贝模板采集</h3>

        <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
        </div>
    </div>
    <!-- /.box-header -->
    <form id="crawl" method="POST" action="/crawl/handle" class="form-horizontal" accept-charset="UTF-8">
        <div class="box-body fields-group">

            <div class="form-group">
                <label for="code" class="col-sm-2 control-label">婚贝模板编码</label>
                <div class="col-sm-8">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-pencil fa-fw"></i></span>
                        <input type="hidden" id="data" name="data" value="" class="data" required>
                        <input type="text" id="code" name="code" value="" class="form-control code" placeholder="输入婚贝模板编码" required>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label for="mainClassId" class="col-sm-2 asterisk control-label">一级品类</label>
                <div class="col-sm-8">
                    <select class="form-control mainClassId" style="width: 100%;" name="mainClassId" required>
                        <option value=""></option>
                        @foreach($topCategoryList as $id => $category)
                            <option value={{ $id }}>{{ $category }}</option>
                        @endforeach
                    </select>
                </div>
            </div>

            <div class="form-group">
                <label for="subClassId" class="col-sm-2 asterisk control-label">二级品类</label>
                <div class="col-sm-8">
                    <select class="form-control subClassId" style="width: 100%;" name="subClassId" required>
                        <option value=""></option>
{{--                        @foreach($secondCategoryList as $id => $category)--}}
{{--                            <option value={{ $id }}>{{ $category }}</option>--}}
{{--                        @endforeach--}}
                    </select>
                </div>
            </div>

            <div class="form-group">
                <label for="showType" class="col-sm-2 asterisk control-label">翻页类型</label>
                <div class="col-sm-8">
                    <select class="form-control showType" style="width: 100%;" name="showType" required>
                        <option value=""></option>
                        @foreach($pageTypeList as $id => $type)
                            <option value={{ $id }}>{{ $type }}</option>
                        @endforeach
                    </select>
                </div>
            </div>

        </div>

        <!-- /.box-body -->
        <div class="box-footer">
            <div class="col-md-2"></div>

            <div class="col-md-8">
                <div class="btn-group pull-left">
                    <button type="reset" class="btn btn-warning pull-right">重置</button>
                </div>

                <div class="btn-group pull-right">
                    <button type="submit" class="btn btn-info pull-right">提交</button>
                </div>
            </div>
        </div>
        <!-- /.box-footer -->
    </form>
</div>

<script type="text/javascript" src="https://cdn.staticfile.org/jquery/2.0.0/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js"></script>
<script>
    $('input[name="code"]').on('change', function() {
        $.ajax({
            url: '/crawl/code',
            type: 'get',
            data: {
                code: $(this).val()
            },
            success: function (result) {
                console.log('crawl result', result)
                let decryptedStr = decryptByAES(result.data.data);
                // console.log('crawl result', result, 'decrypted string', decryptedStr);

                let decryptedObj = JSON.parse(decryptedStr);
                // console.log('decrypted object urlJson', decryptedObj.urlJson);
                $.ajax({
                    url: '/crawl/urlJson',
                    type: 'get',
                    data: {
                        json: decryptedObj.urlJson
                    },
                    success: function (data) {
                        // console.log('decrypted object data', data.data.data);
                        decryptedObj.urlJson = decryptByAES(data.data.data);
                        $('input[name="data"]').val(JSON.stringify(decryptedObj));
                    }
                });
            }
        })
    });

    function decryptByAES(string) {
        var k = eval(function(e, t, n, i, r, o) {
            if (r = function(e) {
                return (e < 2 ? "" : r(parseInt(e / 2))) + ((e %= 2) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
            }
                ,
                !"".replace(/^/, String)) {
                for (; n--; )
                    o[r(n)] = i[n] || r(n);
                i = [function(e) {
                    return o[e]
                }
                ],
                    r = function() {
                        return "\\w+"
                    }
                    ,
                    n = 1
            }
            for (; n--; )
                i[n] && (e = e.replace(new RegExp("\\b" + r(n) + "\\b","g"), i[n]));
            return e
        }("0('1')", 0, 2, "atob|SMCs5dzwOfTePGZh".split("|"), 0, {}))
            , key = eval(function(e, t, n, i, r, o) {
            if (r = function(e) {
                return (e < 2 ? "" : r(parseInt(e / 2))) + ((e %= 2) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
            }
                ,
                !"".replace(/^/, String)) {
                for (; n--; )
                    o[r(n)] = i[n] || r(n);
                i = [function(e) {
                    return o[e]
                }
                ],
                    r = function() {
                        return "\\w+"
                    }
                    ,
                    n = 1
            }
            for (; n--; )
                i[n] && (e = e.replace(new RegExp("\\b" + r(n) + "\\b","g"), i[n]));
            return e
        }("0(1)", 0, 2, "btoa|k".split("|"), 0, {}))
            , ckey = CryptoJS.enc.Utf8.parse(key)
            , ciphertext = CryptoJS.enc.Hex.parse(string)
            , srcs = CryptoJS.enc.Base64.stringify(ciphertext)
            , decrypt = CryptoJS.AES.decrypt(srcs, ckey, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        })
            , decrypted = decrypt.toString(CryptoJS.enc.Utf8);

        console.log('decrypted key', decrypted.toString(CryptoJS.enc.Utf8));
        return decrypted.toString(CryptoJS.enc.Utf8)
    }

    $(document).ready(function() {
        if (!confirm('确认采集吗? 点击确认等待采集中')) {
            return false;
        }

        $('#crawl').on('submit', function(e) {
            e.preventDefault(); // 阻止表单默认提交行为

            if ($('.data').val() == '' || $('.data').val() == undefined) {
                $.ajax({
                    url: '/crawl/code',
                    type: 'get',
                    data: {
                        code: $('.code').val()
                    },
                    success: function (result) {
                        console.log('crawl result', result)
                        let decryptedStr = decryptByAES(result.data.data);

                        let decryptedObj = JSON.parse(decryptedStr);
                        $.ajax({
                            url: '/crawl/urlJson',
                            type: 'get',
                            data: {
                                json: decryptedObj.urlJson
                            },
                            success: function (data) {
                                decryptedObj.urlJson = decryptByAES(data.data.data);
                                $('input[name="data"]').val(JSON.stringify(decryptedObj));
                            }
                        });
                    }
                })
            }

            $.ajax({
                url: '/crawl/handle',
                type: 'post',
                data: {
                    code: $('.code').val(),
                    data: $('.data').val(),
                    mainClassId: $('.mainClassId').val(),
                    subClassId: $('.subClassId').val(),
                    showType: $('.showType').val()
                },
                success: function (result) {
                    if (result.status == 0) {
                        alert('采集成功');
                    } else {
                        alert(result.msg);
                    }
                    location.reload();
                }
            })
        })
    });
</script>
