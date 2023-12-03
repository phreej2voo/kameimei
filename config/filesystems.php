<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default filesystem disk that should be used
    | by the framework. The "local" disk, as well as a variety of cloud
    | based disks are available to your application. Just store away!
    |
    */

    'default' => env('FILESYSTEM_DRIVER', 'local'),

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Here you may configure as many filesystem "disks" as you wish, and you
    | may even configure multiple disks of the same driver. Defaults have
    | been setup for each driver as an example of the required options.
    |
    | Supported Drivers: "local", "ftp", "sftp", "s3"
    |
    */

    'disks' => [

        'local' => [
            'driver' => 'local',
            'root' => storage_path('app/public/upload/common'),
            'visibility' => 'public',
            'url' => env('APP_URL') . '/upload/scene/',
        ],

        'scene' => [
            'driver' => 'local',
            'root' => storage_path('app/public/upload/scene'),
            'visibility' => 'public',
            'url' => env('APP_URL') . '/scene/',
        ],

        'public' => [
            'driver' => 'local',
            'root' => storage_path('app/public'),
            'url' => env('APP_URL') . '/storage',
            'visibility' => 'public',
        ],

        's3' => [
            'driver' => 's3',
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'region' => env('AWS_DEFAULT_REGION'),
            'bucket' => env('AWS_BUCKET'),
            'url' => env('AWS_URL'),
            'endpoint' => env('AWS_ENDPOINT'),
            'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false),
        ],

        'admin' => [
            'driver' => 'local',
            'root' => storage_path('app/public/upload/admin'),
            'visibility' => 'public',
            'url' => env('APP_URL') . '/admin_upload/',
        ],

        'static' => [
            'driver' => 'local',
            'root' => public_path('/static/img'),
            'visibility' => 'public',
            'url' => env('APP_URL') . '/static/img/',
        ],

        'qiniu' => [
            'driver'  => 'qiniu',
            'domains' => [
                'default'   =>  'qiniu.daxitie.com', //你的七牛域名
                'https'     =>  'm.daxitie.com',	//你的HTTPS域名
                'custom'    =>  'static.daxitie.com',	//你的自定义域名
            ],
            'access_key'=>  env('QINIU_ACCESS_KEY'),	//AccessKey
            'secret_key'=>  env('QINIU_SECRET_KEY'),	//SecretKey
            'bucket'    =>  env('QINIU_BUCKET'),	//Bucket名字
            'notify_url'    =>  '',	//持久化处理回调地址
            'url'   =>  'http://of8kfibjo.bkt.clouddn.com/',	// 填写文件访问根url
        ]
    ],

    /*
    |--------------------------------------------------------------------------
    | Symbolic Links
    |--------------------------------------------------------------------------
    |
    | Here you may configure the symbolic links that will be created when the
    | `storage:link` Artisan command is executed. The array keys should be
    | the locations of the links and the values should be their targets.
    |
    */

    'links' => [
        public_path('admin_upload') => storage_path('app/public/upload/admin'),
        public_path('scene') => storage_path('app/public/upload/scene'),
    ],

];
