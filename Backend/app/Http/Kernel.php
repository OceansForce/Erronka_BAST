protected $middleware = [
    \App\Http\Middleware\CorsMiddleware::class,
    // Otros middlewares...
];


protected $routeMiddleware = [
    'cors' => \App\Http\Middleware\CorsMiddleware::class,
    // Otros middlewares...
];
