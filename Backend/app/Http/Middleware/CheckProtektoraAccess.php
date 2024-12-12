<?php

// app/Http/Middleware/CheckProtektoraAccess.php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\News;

class CheckProtektoraAccess
{
    public function handle(Request $request, Closure $next)
    {
        // Obtener el usuario autenticado
        $user = auth()->user();

        // Obtener el ID de la noticia desde los parámetros (suponiendo que el ID se pasa en la URL)
        $newsId = $request->route('news'); // Ajusta esto según cómo se pasa el ID

        // Obtener la noticia desde la base de datos
        $news = News::findOrFail($newsId);

        // Verificar si el usuario tiene acceso a la protektora correspondiente
        if ($user->idProtektora != $news->protektora) {
            return response()->json(['message' => 'No tienes acceso a esta noticia.'], 403);
        }

        return $next($request);
    }
}

