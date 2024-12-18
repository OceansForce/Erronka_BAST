// app/Providers/RouteServiceProvider.php

public function map()
{
    $this->mapApiRoutes();  // Asegúrate de que esto esté presente

    // Otros métodos de mapeo...
}

protected function mapApiRoutes()
{
    Route::prefix('api')
        ->middleware('api')
        ->namespace($this->namespace)
        ->group(base_path('routes/api.php'));
}
