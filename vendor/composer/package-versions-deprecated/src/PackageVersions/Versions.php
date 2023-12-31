<?php

declare(strict_types=1);

namespace PackageVersions;

use Composer\InstalledVersions;
use OutOfBoundsException;

class_exists(InstalledVersions::class);

/**
 * This class is generated by composer/package-versions-deprecated, specifically by
 * @see \PackageVersions\Installer
 *
 * This file is overwritten at every run of `composer install` or `composer update`.
 *
 * @deprecated in favor of the Composer\InstalledVersions class provided by Composer 2. Require composer-runtime-api:^2 to ensure it is present.
 */
final class Versions
{
    /**
     * @deprecated please use {@see self::rootPackageName()} instead.
     *             This constant will be removed in version 2.0.0.
     */
    const ROOT_PACKAGE_NAME = 'laravel/laravel';

    /**
     * Array of all available composer packages.
     * Dont read this array from your calling code, but use the \PackageVersions\Versions::getVersion() method instead.
     *
     * @var array<string, string>
     * @internal
     */
    const VERSIONS          = array (
  'asm89/stack-cors' => 'v2.1.1@73e5b88775c64ccc0b84fb60836b30dc9d92ac4a',
  'brick/math' => '0.9.3@ca57d18f028f84f777b2168cd1911b0dee2343ae',
  'composer/package-versions-deprecated' => '1.11.99.5@b4f54f74ef3453349c24a845d22392cd31e65f1d',
  'dflydev/dot-access-data' => 'v3.0.2@f41715465d65213d644d3141a6a93081be5d3549',
  'doctrine/cache' => '2.2.0@1ca8f21980e770095a31456042471a57bc4c68fb',
  'doctrine/dbal' => '3.2.2@d1e581da590d611c8699acff9848056b2403c05b',
  'doctrine/deprecations' => 'v0.5.3@9504165960a1f83cc1480e2be1dd0a0478561314',
  'doctrine/event-manager' => '1.2.0@95aa4cb529f1e96576f3fda9f5705ada4056a520',
  'doctrine/inflector' => '2.0.8@f9301a5b2fb1216b2b08f02ba04dc45423db6bff',
  'doctrine/lexer' => '1.2.3@c268e882d4dbdd85e36e4ad69e02dc284f89d229',
  'dragonmantank/cron-expression' => 'v3.3.3@adfb1f505deb6384dc8b39804c5065dd3c8c8c0a',
  'easywechat-composer/easywechat-composer' => '1.4.1@3fc6a7ab6d3853c0f4e2922539b56cc37ef361cd',
  'egulias/email-validator' => '2.1.25@0dbf5d78455d4d6a41d186da50adc1122ec066f4',
  'encore/laravel-admin' => 'v1.8.19@6c292ebb5efa886fa4776d86e975180608505946',
  'fruitcake/laravel-cors' => 'v2.2.0@783a74f5e3431d7b9805be8afb60fd0a8f743534',
  'graham-campbell/result-type' => 'v1.1.1@672eff8cf1d6fe1ef09ca0f89c4b287d6a3eb831',
  'guzzlehttp/guzzle' => '7.8.0@1110f66a6530a40fe7aea0378fe608ee2b2248f9',
  'guzzlehttp/promises' => '2.0.1@111166291a0f8130081195ac4556a5587d7f1b5d',
  'guzzlehttp/psr7' => '2.6.1@be45764272e8873c72dbe3d2edcfdfcc3bc9f727',
  'jaybizzle/crawler-detect' => 'v1.2.116@97e9fe30219e60092e107651abb379a38b342921',
  'jenssegers/agent' => 'v2.6.4@daa11c43729510b3700bc34d414664966b03bffe',
  'laravel/framework' => 'v8.83.27@e1afe088b4ca613fb96dc57e6d8dbcb8cc2c6b49',
  'laravel/sanctum' => 'v2.15.1@31fbe6f85aee080c4dc2f9b03dc6dd5d0ee72473',
  'laravel/serializable-closure' => 'v1.3.1@e5a3057a5591e1cfe8183034b0203921abe2c902',
  'laravel/socialite' => 'v5.8.1@9989b4530331597fae811bca240bf4e8f15e804b',
  'laravel/tinker' => 'v2.8.2@b936d415b252b499e8c3b1f795cd4fc20f57e1f3',
  'league/commonmark' => '2.4.0@d44a24690f16b8c1808bf13b1bd54ae4c63ea048',
  'league/config' => 'v1.2.0@754b3604fb2984c71f4af4a9cbe7b57f346ec1f3',
  'league/flysystem' => '1.1.10@3239285c825c152bcc315fe0e87d6b55f5972ed1',
  'league/mime-type-detection' => '1.13.0@a6dfb1194a2946fcdc1f38219445234f65b35c96',
  'league/oauth1-client' => 'v1.10.1@d6365b901b5c287dd41f143033315e2f777e1167',
  'mobiledetect/mobiledetectlib' => '2.8.41@fc9cccd4d3706d5a7537b562b59cc18f9e4c0cb1',
  'monolog/monolog' => '2.9.1@f259e2b15fb95494c83f52d3caad003bbf5ffaa1',
  'nesbot/carbon' => '2.69.0@4308217830e4ca445583a37d1bf4aff4153fa81c',
  'nette/schema' => 'v1.2.4@c9ff517a53903b3d4e29ec547fb20feecb05b8ab',
  'nette/utils' => 'v3.2.10@a4175c62652f2300c8017fb7e640f9ccb11648d2',
  'nikic/php-parser' => 'v4.17.1@a6303e50c90c355c7eeee2c4a8b27fe8dc8fef1d',
  'opis/closure' => '3.6.3@3d81e4309d2a927abbe66df935f4bb60082805ad',
  'overtrue/laravel-wechat' => '6.1.1@583c4da43cc4f4feff3e7daebaec1e83d13c76f6',
  'overtrue/socialite' => '3.5.4@6bd4f0230bcaec5ccfd64a10581a9063233b5a48',
  'phpoption/phpoption' => '1.9.1@dd3a383e599f49777d8b628dadbb90cae435b87e',
  'pimple/pimple' => 'v3.5.0@a94b3a4db7fb774b3d78dad2315ddc07629e1bed',
  'psr/cache' => '1.0.1@d11b50ad223250cf17b86e38383413f5a6764bf8',
  'psr/clock' => '1.0.0@e41a24703d4560fd0acb709162f73b8adfc3aa0d',
  'psr/container' => '1.1.2@513e0666f7216c7459170d56df27dfcefe1689ea',
  'psr/event-dispatcher' => '1.0.0@dbefd12671e8a14ec7f180cab83036ed26714bb0',
  'psr/http-client' => '1.0.2@0955afe48220520692d2d09f7ab7e0f93ffd6a31',
  'psr/http-factory' => '1.0.2@e616d01114759c4c489f93b099585439f795fe35',
  'psr/http-message' => '2.0@402d35bcb92c70c026d1a6a9883f06b2ead23d71',
  'psr/log' => '1.1.4@d49695b909c3b7628b6289db5479a1c204601f11',
  'psr/simple-cache' => '1.0.1@408d5eafb83c57f6365a3ca330ff23aa4a5fa39b',
  'psy/psysh' => 'v0.11.20@0fa27040553d1d280a67a4393194df5228afea5b',
  'ralouphie/getallheaders' => '3.0.3@120b605dfeb996808c31b6477290a714d356e822',
  'ramsey/collection' => '1.3.0@ad7475d1c9e70b190ecffc58f2d989416af339b4',
  'ramsey/uuid' => '4.2.3@fc9bb7fb5388691fd7373cd44dcb4d63bbcf24df',
  'socialiteproviders/manager' => 'v4.3.0@47402cbc5b7ef445317e799bf12fd5a12062206c',
  'socialiteproviders/qq' => '4.2.0@e1c46151db25d15f7f1578319cebbd6b8a0e18c8',
  'swiftmailer/swiftmailer' => 'v6.3.0@8a5d5072dca8f48460fce2f4131fcc495eec654c',
  'symfony/cache' => 'v5.4.28@62b7ae3bccc5b474a30fadc7ef6bbc362007d3f9',
  'symfony/cache-contracts' => 'v2.5.2@64be4a7acb83b6f2bf6de9a02cee6dad41277ebc',
  'symfony/console' => 'v5.4.28@f4f71842f24c2023b91237c72a365306f3c58827',
  'symfony/css-selector' => 'v5.4.26@0ad3f7e9a1ab492c5b4214cf22a9dc55dcf8600a',
  'symfony/deprecation-contracts' => 'v2.5.2@e8b495ea28c1d97b5e0c121748d6f9b53d075c66',
  'symfony/dom-crawler' => 'v5.4.25@d2aefa5a7acc5511422792931d14d1be96fe9fea',
  'symfony/error-handler' => 'v5.4.26@b26719213a39c9ba57520cbc5e52bfcc5e8d92f9',
  'symfony/event-dispatcher' => 'v5.4.26@5dcc00e03413f05c1e7900090927bb7247cb0aac',
  'symfony/event-dispatcher-contracts' => 'v2.5.2@f98b54df6ad059855739db6fcbc2d36995283fe1',
  'symfony/finder' => 'v5.4.27@ff4bce3c33451e7ec778070e45bd23f74214cd5d',
  'symfony/http-foundation' => 'v5.4.28@365992c83a836dfe635f1e903ccca43ee03d3dd2',
  'symfony/http-kernel' => 'v5.4.28@127a2322ca1828157901092518b8ea8e4e1109d4',
  'symfony/mime' => 'v5.4.26@2ea06dfeee20000a319d8407cea1d47533d5a9d2',
  'symfony/polyfill-ctype' => 'v1.28.0@ea208ce43cbb04af6867b4fdddb1bdbf84cc28cb',
  'symfony/polyfill-iconv' => 'v1.28.0@6de50471469b8c9afc38164452ab2b6170ee71c1',
  'symfony/polyfill-intl-grapheme' => 'v1.28.0@875e90aeea2777b6f135677f618529449334a612',
  'symfony/polyfill-intl-idn' => 'v1.28.0@ecaafce9f77234a6a449d29e49267ba10499116d',
  'symfony/polyfill-intl-normalizer' => 'v1.28.0@8c4ad05dd0120b6a53c1ca374dca2ad0a1c4ed92',
  'symfony/polyfill-mbstring' => 'v1.28.0@42292d99c55abe617799667f454222c54c60e229',
  'symfony/polyfill-php72' => 'v1.28.0@70f4aebd92afca2f865444d30a4d2151c13c3179',
  'symfony/polyfill-php73' => 'v1.28.0@fe2f306d1d9d346a7fee353d0d5012e401e984b5',
  'symfony/polyfill-php80' => 'v1.28.0@6caa57379c4aec19c0a12a38b59b26487dcfe4b5',
  'symfony/polyfill-php81' => 'v1.28.0@7581cd600fa9fd681b797d00b02f068e2f13263b',
  'symfony/process' => 'v5.4.28@45261e1fccad1b5447a8d7a8e67aa7b4a9798b7b',
  'symfony/psr-http-message-bridge' => 'v2.3.1@581ca6067eb62640de5ff08ee1ba6850a0ee472e',
  'symfony/routing' => 'v5.4.26@853fc7df96befc468692de0a48831b38f04d2cb2',
  'symfony/service-contracts' => 'v2.5.2@4b426aac47d6427cc1a1d0f7e2ac724627f5966c',
  'symfony/string' => 'v5.4.26@1181fe9270e373537475e826873b5867b863883c',
  'symfony/translation' => 'v5.4.24@de237e59c5833422342be67402d487fbf50334ff',
  'symfony/translation-contracts' => 'v2.5.2@136b19dd05cdf0709db6537d058bcab6dd6e2dbe',
  'symfony/var-dumper' => 'v5.4.28@684b36ff415e1381d4a943c3ca2502cd2debad73',
  'symfony/var-exporter' => 'v5.4.26@11401fe94f960249b3c63a488c63ba73091c1e4a',
  'tencentcloud/tencentcloud-sdk-php' => '3.0.965@4fc48fefc0df8f1e752f6f5ef40355da25267e7b',
  'tijsverkoyen/css-to-inline-styles' => '2.2.6@c42125b83a4fa63b187fdf29f9c93cb7733da30c',
  'vlucas/phpdotenv' => 'v5.5.0@1a7ea2afc49c3ee6d87061f5a233e3a035d0eae7',
  'voku/portable-ascii' => '1.6.1@87337c91b9dfacee02452244ee14ab3c43bc485a',
  'w7corp/easywechat' => '5.34.0@a09f7af9710b0ac2656d5c0366f75bd27b1acbf7',
  'webmozart/assert' => '1.11.0@11cb2199493b2f8a3b53e7f19068fc6aac760991',
  'doctrine/instantiator' => '1.5.0@0a0fa9780f5d4e507415a065172d26a98d02047b',
  'facade/flare-client-php' => '1.10.0@213fa2c69e120bca4c51ba3e82ed1834ef3f41b8',
  'facade/ignition' => '2.17.7@b4f5955825bb4b74cba0f94001761c46335c33e9',
  'facade/ignition-contracts' => '1.0.2@3c921a1cdba35b68a7f0ccffc6dffc1995b18267',
  'fakerphp/faker' => 'v1.23.0@e3daa170d00fde61ea7719ef47bb09bb8f1d9b01',
  'filp/whoops' => '2.15.3@c83e88a30524f9360b11f585f71e6b17313b7187',
  'hamcrest/hamcrest-php' => 'v2.0.1@8c3d0a3f6af734494ad8f6fbbee0ba92422859f3',
  'laravel/sail' => 'v1.19.0@4f230634a3163f3442def6a4e6ffdb02b02e14d6',
  'mockery/mockery' => '1.6.6@b8e0bb7d8c604046539c1115994632c74dcb361e',
  'myclabs/deep-copy' => '1.11.1@7284c22080590fb39f2ffa3e9057f10a4ddd0e0c',
  'nunomaduro/collision' => 'v5.11.0@8b610eef8582ccdc05d8f2ab23305e2d37049461',
  'phar-io/manifest' => '2.0.3@97803eca37d319dfa7826cc2437fc020857acb53',
  'phar-io/version' => '3.2.1@4f7fd7836c6f332bb2933569e566a0d6c4cbed74',
  'phpunit/php-code-coverage' => '9.2.27@b0a88255cb70d52653d80c890bd7f38740ea50d1',
  'phpunit/php-file-iterator' => '3.0.6@cf1c2e7c203ac650e352f4cc675a7021e7d1b3cf',
  'phpunit/php-invoker' => '3.1.1@5a10147d0aaf65b58940a0b72f71c9ac0423cc67',
  'phpunit/php-text-template' => '2.0.4@5da5f67fc95621df9ff4c4e5a84d6a8a2acf7c28',
  'phpunit/php-timer' => '5.0.3@5a63ce20ed1b5bf577850e2c4e87f4aa902afbd2',
  'phpunit/phpunit' => '9.6.11@810500e92855eba8a7a5319ae913be2da6f957b0',
  'sebastian/cli-parser' => '1.0.1@442e7c7e687e42adc03470c7b668bc4b2402c0b2',
  'sebastian/code-unit' => '1.0.8@1fc9f64c0927627ef78ba436c9b17d967e68e120',
  'sebastian/code-unit-reverse-lookup' => '2.0.3@ac91f01ccec49fb77bdc6fd1e548bc70f7faa3e5',
  'sebastian/comparator' => '4.0.8@fa0f136dd2334583309d32b62544682ee972b51a',
  'sebastian/complexity' => '2.0.2@739b35e53379900cc9ac327b2147867b8b6efd88',
  'sebastian/diff' => '4.0.5@74be17022044ebaaecfdf0c5cd504fc9cd5a7131',
  'sebastian/environment' => '5.1.5@830c43a844f1f8d5b7a1f6d6076b784454d8b7ed',
  'sebastian/exporter' => '4.0.5@ac230ed27f0f98f597c8a2b6eb7ac563af5e5b9d',
  'sebastian/global-state' => '5.0.6@bde739e7565280bda77be70044ac1047bc007e34',
  'sebastian/lines-of-code' => '1.0.3@c1c2e997aa3146983ed888ad08b15470a2e22ecc',
  'sebastian/object-enumerator' => '4.0.4@5c9eeac41b290a3712d88851518825ad78f45c71',
  'sebastian/object-reflector' => '2.0.4@b4f479ebdbf63ac605d183ece17d8d7fe49c15c7',
  'sebastian/recursion-context' => '4.0.5@e75bd0f07204fec2a0af9b0f3cfe97d05f92efc1',
  'sebastian/resource-operations' => '3.0.3@0f4443cb3a1d92ce809899753bc0d5d5a8dd19a8',
  'sebastian/type' => '3.2.1@75e2c2a32f5e0b3aef905b9ed0b179b953b3d7c7',
  'sebastian/version' => '3.0.2@c6c1022351a901512170118436c764e473f6de8c',
  'theseer/tokenizer' => '1.2.1@34a41e998c2183e22995f158c581e7b5e755ab9e',
  'laravel/laravel' => 'dev-main@126fdd3e43326a1d125fd81e005fe37bbc0f7250',
);

    private function __construct()
    {
    }

    /**
     * @psalm-pure
     *
     * @psalm-suppress ImpureMethodCall we know that {@see InstalledVersions} interaction does not
     *                                  cause any side effects here.
     */
    public static function rootPackageName() : string
    {
        if (!self::composer2ApiUsable()) {
            return self::ROOT_PACKAGE_NAME;
        }

        return InstalledVersions::getRootPackage()['name'];
    }

    /**
     * @throws OutOfBoundsException If a version cannot be located.
     *
     * @psalm-param key-of<self::VERSIONS> $packageName
     * @psalm-pure
     *
     * @psalm-suppress ImpureMethodCall we know that {@see InstalledVersions} interaction does not
     *                                  cause any side effects here.
     */
    public static function getVersion(string $packageName): string
    {
        if (self::composer2ApiUsable()) {
            return InstalledVersions::getPrettyVersion($packageName)
                . '@' . InstalledVersions::getReference($packageName);
        }

        if (isset(self::VERSIONS[$packageName])) {
            return self::VERSIONS[$packageName];
        }

        throw new OutOfBoundsException(
            'Required package "' . $packageName . '" is not installed: check your ./vendor/composer/installed.json and/or ./composer.lock files'
        );
    }

    private static function composer2ApiUsable(): bool
    {
        if (!class_exists(InstalledVersions::class, false)) {
            return false;
        }

        if (method_exists(InstalledVersions::class, 'getAllRawData')) {
            $rawData = InstalledVersions::getAllRawData();
            if (count($rawData) === 1 && count($rawData[0]) === 0) {
                return false;
            }
        } else {
            $rawData = InstalledVersions::getRawData();
            if ($rawData === null || $rawData === []) {
                return false;
            }
        }

        return true;
    }
}
