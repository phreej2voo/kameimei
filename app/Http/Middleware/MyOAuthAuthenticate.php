<?php

namespace App\Http\Middleware;

use Closure;
use Jenssegers\Agent\Agent;
use Overtrue\LaravelWeChat\Middleware\OAuthAuthenticate;

class MyOAuthAuthenticate extends OAuthAuthenticate
{
    public function handle($request, Closure $next, $account = 'default', $scope = null, $type = 'service')
    {
        if (!(new Agent())->isWeChat()) {
            $account = 'open-platform';
        }
        return parent::handle($request, $next, $account, $scope, $type);
    }
}