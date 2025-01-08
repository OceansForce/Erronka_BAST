<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckUpdateNewsPermissions
{
    public function handle(Request $request, Closure $next)
    {
        // Verificar si el usuario está autenticado
        if (!auth()->check()) {
            return response()->json(['message' => 'No autenticado'], 401);
        }

        // Obtener el usuario autenticado
        $user = auth()->user();

        // Obtener el 'protektora_id' del usuario autenticado
        $protektora_id = $user->idProtektora;

        // Verificar que el usuario tiene permisos para actualizar la noticia
        if ($request->news->protektora !== $protektora_id) {
            return response()->json([
                'message' => 'No tienes permisos para actualizar esta noticia.',
            ], 403);
        }

        // Si pasa las verificaciones, continuar con la solicitud
        return $next($request);
    }
}
