protected $middleware = [
    \App\Http\Middleware\CorsMiddleware::class,
    // Otros middlewares...
];


protected $routeMiddleware = [
    'cors' => \App\Http\Middleware\CorsMiddleware::class,
    // Otros middlewares...


    'checkProtektoraNewsCreate' => \App\Http\Middleware\CheckCreateNewsPermissions::class,
    'checkProtektoraNewsUpdate' => \App\Http\Middleware\CheckUpdateNewsPermissions::class,
    
];
