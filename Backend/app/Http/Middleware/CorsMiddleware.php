<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CorsMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Permitir todos los orígenes o definir orígenes específicos
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Authorization");

        // Si el método es OPTIONS, se devuelve una respuesta vacía con el código 200
        if ($request->getMethod() == "OPTIONS") {
            return response()->json([], 200);
        }

        return $next($request);
    }
}
