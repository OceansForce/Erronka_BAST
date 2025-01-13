<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class BasicUserAuth
{
    public function handle(Request $request, Closure $next)
    {
        // Verificar si el usuario ya está autenticado, si no, permite que el siguiente middleware (auth:api) lo haga
        if (auth()->check()) {
            return $next($request);
        }

        // Si no está autenticado, devolver un error 401 (No autenticado)
        return response()->json(['message' => 'No autenticado'], 401);
    }
}
