<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckCreateNewsPermissions
{
    public function handle(Request $request, Closure $next)
    {
        // Verificar si el usuario está autenticado
        if (!auth()->check()) {
            return response()->json(['message' => 'No autenticado'], 401);
        }

        // Obtener el usuario autenticado
        $user = auth()->user();

        


        // Si pasa la verificación, continuar con la solicitud
        return $next($request);
    }
}
