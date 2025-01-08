<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{

    protected $middleware = [
        \App\Http\Middleware\CorsMiddleware::class,
        // Otros middlewares...
    ];


    protected $routeMiddleware = [
        'cors' => \App\Http\Middleware\CorsMiddleware::class,
        // Otros middlewares...


        'NewsCreate' => \App\Http\Middleware\CheckCreateNewsPermissions::class,
        'checkProtektoraNewsUpdate' => \App\Http\Middleware\CheckUpdateNewsPermissions::class,
    
    ];
}