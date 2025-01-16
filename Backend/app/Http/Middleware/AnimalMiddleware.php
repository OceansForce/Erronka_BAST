<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AnimalMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Verificar si el usuario está autenticado
        if (!auth()->check()) {
            return response()->json(['message' => 'No autenticado que pollas'], 401);
        }

        // Obtener el usuario autenticado
        $user = auth()->user();

        // Obtener el 'protektora_id' del usuario autenticado
        $protektora_id = $user->idProtektora;

        // Verificar si el usuario es administrador
        if ($user->idProtektora === 0) {
            // Si es administrador, permitir la acción
            return $next($request);
        }


        // return response()->json([
        //     'message' => 'Este usuario no tiene permisos para crear noticias.',
        // ], 403);



        // Verificar si el usuario tiene un 'protektora_id' asociado
        if (!$protektora_id) {
            return response()->json([
                'message' => 'Este usuario no tiene permisos para crear animales.',
            ], 403);
        }

        // Si pasa la verificación, continuar con la solicitud
        return $next($request);
    }
}
