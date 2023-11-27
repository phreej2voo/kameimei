<?php

namespace App\Providers;

use App\Services\CustomizePagination;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        app()->bind('Illuminate\Pagination\LengthAwarePaginator', function($app, $options) {
            return (new CustomizePagination($options['items'], $options['total'], $options['perPage'], $options['currentPage'], $options['options']));
        });
    }
}
