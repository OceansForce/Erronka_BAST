<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Allow CORS
    |--------------------------------------------------------------------------
    |
    | You can enable CORS for all your routes or restrict it by specifying
    | which origins, methods, and headers are allowed.
    |
    */

    'paths' => ['api/*'],  // Aquí puedes ajustar las rutas específicas a las que quieres permitir CORS.

    'allowed_methods' => ['*'],  // Permitir todos los métodos (GET, POST, etc.)

    'allowed_origins' => ['*'],  // Permitir todos los orígenes (o ajusta según tus necesidades)

    'allowed_headers' => ['*'],  // Permitir todos los encabezados

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,
];
