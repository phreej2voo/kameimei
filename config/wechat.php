<?php

/*
 * This file is part of the overtrue/laravel-wechat.
 *
 * (c) overtrue <i@overtrue.me>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

return [
    /*
     * 默认配置，将会合并到各模块中
     */
    'defaults' => [
        /*
         * 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名
         */
        'response_type' => 'array',

        /*
         * 使用 Laravel 的缓存系统
         */
        'use_laravel_cache' => true,

        /**
         * 日志配置
         *
         * level: 日志级别, 可选为：
         *         debug/info/notice/warning/error/critical/alert/emergency
         * path：日志文件位置(绝对路径!!!)，要求可写权限
         */
        'log' => [
            'default' => env('APP_DEBUG', false) ? 'dev' : 'prod', // 默认使用的 channel，生产环境可以改为下面的 prod
            'channels' => [
                // 测试环境
                'dev' => [
                    'driver' => 'daily',
                    'path' => storage_path('logs/laravel.log'),
                    'level' => 'debug',
                ],
                // 生产环境
                'prod' => [
                    'driver' => 'daily',
                    'path' => storage_path('logs/laravel.log'),
                    'level' => 'info',
                ],
            ],
        ],
    ],

    /*
     * 路由配置
     */
//    'route' => [
//        /*
//         * 开放平台第三方平台路由配置
//         */
//        'open_platform' => [
//            'uri' => 'serve',
//            'action' => Overtrue\LaravelWeChat\Controllers\OpenPlatformController::class,
//            'attributes' => [
//                'prefix' => 'open-platform',
//                'middleware' => null,
//            ],
//        ],
//    ],

    /*
     * 公众号
     */
    'official_account' => [
        'default' => [
            'app_id' => env('WECHAT_OFFICIAL_ACCOUNT_APPID', 'your-app-id'),         // AppID
            'secret' => env('WECHAT_OFFICIAL_ACCOUNT_SECRET', 'your-app-secret'),    // AppSecret
            'token' => env('WECHAT_OFFICIAL_ACCOUNT_TOKEN', 'your-token'),           // Token
            'aes_key' => env('WECHAT_OFFICIAL_ACCOUNT_AES_KEY', ''),                 // EncodingAESKey

            /*
             * OAuth 配置
             *
             * scopes：公众平台（snsapi_userinfo / snsapi_base），开放平台：snsapi_login
             * callback：OAuth授权完成后的回调页地址(如果使用中间件，则随便填写。。。)
             * enforce_https：是否强制使用 HTTPS 跳转
             */
            'oauth' => [
                'scopes' => array_map('trim', explode(',', env('WECHAT_OFFICIAL_ACCOUNT_OAUTH_SCOPES', 'snsapi_userinfo'))),
                'callback' => env('WECHAT_OFFICIAL_ACCOUNT_OAUTH_CALLBACK', '/examples/oauth_callback.php'),
                'enforce_https' => false,
            ],
        ],
        'open-platform' => [
            'app_id' => env('WECHAT_OPEN_PLATFORM_APPID', 'wx0404bf24913c71e4'),
            'secret' => env('WECHAT_OPEN_PLATFORM_SECRET', 'e229e3c5306b85f4326fb541c16b3207'),
            'token' => env('WECHAT_OPEN_PLATFORM_TOKEN', 'daxitie2023'),
            'aes_key' => env('WECHAT_OPEN_PLATFORM_AES_KEY', 'QnXkYeGBQwhqX3xUsiXo1OrhGtKoFdA040ZqpM4aqaV'),
            'oauth' => [
                'scopes' => 'snsapi_login',
                'callback' => env('WECHAT_OFFICIAL_ACCOUNT_OAUTH_CALLBACK', '/examples/oauth_callback.php'),
                'enforce_https' => false,
            ]
        ],
    ],

    /*
     * 开放平台第三方平台
     */
//    'open_platform' => [
//        'default' => [
//            'app_id' => env('WECHAT_OPEN_PLATFORM_APPID', 'wx0404bf24913c71e4'),
//            'secret' => env('WECHAT_OPEN_PLATFORM_SECRET', 'e229e3c5306b85f4326fb541c16b3207'),
//            'token' => env('WECHAT_OPEN_PLATFORM_TOKEN', 'daxitie2023'),
//            'aes_key' => env('WECHAT_OPEN_PLATFORM_AES_KEY', 'QnXkYeGBQwhqX3xUsiXo1OrhGtKoFdA040ZqpM4aqaV'),
//            'oauth' => [
//                'scopes' => 'snsapi_login'
//            ]
//        ],
//
//    ],

    /*
     * 小程序
     */
    // 'mini_program' => [
    //     'default' => [
    //         'app_id'  => env('WECHAT_MINI_PROGRAM_APPID', ''),
    //         'secret'  => env('WECHAT_MINI_PROGRAM_SECRET', ''),
    //         'token'   => env('WECHAT_MINI_PROGRAM_TOKEN', ''),
    //         'aes_key' => env('WECHAT_MINI_PROGRAM_AES_KEY', ''),
    //     ],
    // ],

    /*
     * 微信支付
     */
     'payment' => [
         'default' => [
             'sandbox'            => env('WECHAT_PAYMENT_SANDBOX', false),
             'app_id'             => env('WECHAT_PAYMENT_APPID', 'wx0404bf24913c71e4'),
             'mch_id'             => env('WECHAT_PAYMENT_MCH_ID', '1651331555'),
             'key'                => env('WECHAT_PAYMENT_KEY', '2e03d538a263576143af824a480f73c3'),
             'cert_path'          => env('WECHAT_PAYMENT_CERT_PATH', resource_path('cert/apiclient_cert.pem')),    // XXX: 绝对路径！！！！
             'key_path'           => env('WECHAT_PAYMENT_KEY_PATH', resource_path('cert/apiclient_key.pem')),      // XXX: 绝对路径！！！！
             'notify_url'         => rtrim(env('APP_URL'), '/') . '/pay/wxNotify',                       // 默认支付结果通知地址
         ],
         // ...
     ],

    /*
     * 企业微信
     */
    // 'work' => [
    //     'default' => [
    //         'corp_id' => 'xxxxxxxxxxxxxxxxx',
    //         'agent_id' => 100020,
    //         'secret'   => env('WECHAT_WORK_AGENT_CONTACTS_SECRET', ''),
    //          //...
    //      ],
    // ],
];
