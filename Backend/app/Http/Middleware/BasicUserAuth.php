<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class BasicUserAuth
{
    public function handle(Request $request, Closure $next)
    {
        // Ver los encabezados completos
        \Log::info('Encabezados de la solicitud:', $request->headers->all());

        // Ver el encabezado Authorization (token)
        $authorizationHeader = $request->header('Authorization');
        \Log::info('Encabezado Authorization:', [$authorizationHeader]);

      //  // Verificar si el usuario está autenticado
        //if (!auth()->check()) {
          //  return response()->json(['message' => 'No autenticado'], 401);
       // }

        // Continuar con la solicitud si el usuario está autenticado
        return $next($request);
    }
}
