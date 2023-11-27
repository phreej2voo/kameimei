<style>
    .product-cover > img {
        float: left;
        width: 80px;
        height: 95px;
        margin-top: 5px;
    }
    .product-title {
        margin-left: 95px;
    }
    .product-label, .product-body {
        margin: 3px 0 0 95px;
    }
    .product-title {
        font-size: 16px;
    }
    .product-label {
        padding: 5px 5px 5px 0;
    }
    .product-body {
        /*float: left;*/
        color: rgba(0,0,0,0.5);
    }
</style>
<div class="box box-default">
    <div class="box-header with-border">
        <h3 class="box-title">最近采集模板列表</h3>

        <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
            </button>
            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
        </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <ul class="products-list product-list-in-box">

            @foreach($sceneList as $scene)
                <li class="item">
                    <div class="product-cover">
                        <img src="{{$scene['cover']}}" />
                    </div>
                    <div class="product-title">
                        <a href="{{ $scene['link'] }}" target="_blank">
                            {{ $scene['name'] }}
                        </a>
                    </div>
                    <div class="product-label">
                        <span class="label label-info">{{$scene['category']}}</span>
                    </div>
                    <div class="product-body">
                        <span class="product-code">
                            <strong>采集编码：</strong>{{ $scene['code'] }}
                        </span>
                    </div>
                    <div class="product-body">
                        <span class="product-code" >
                            <strong>采集时间：</strong>{{ $scene['create_time'] }}
                        </span>
                    </div>
                </li>
            @endforeach

            <!-- /.item -->
        </ul>
    </div>
    <!-- /.box-body -->
    <div class="box-footer text-center">
        <a href="https://github.com/laravel-admin-extensions" target="_blank" class="uppercase">查看更多</a>
    </div>
    <!-- /.box-footer -->
</div>