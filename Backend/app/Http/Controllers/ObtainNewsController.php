<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ObtainNewsController extends Controller
{
    public function getLatestNews(Request $request)
    {
        // Validar los parámetros
        $request->validate([
            'count' => 'required|integer|min:1',
            'offset' => 'required|integer|min:0',
        ]);

        // Obtener los parámetros
        $count = $request->input('count');
        $offset = $request->input('offset');

        // Crear una clave única para almacenar en caché, usando 'count' y 'offset'
        $cacheKey = "latest_news_{$count}_{$offset}";

        // Intentar obtener las noticias del caché
        $news = Cache::remember($cacheKey, now()->addMinutes(30), function () use ($count, $offset) {
            // Si no están en caché, consultar la base de datos
            return News::orderBy('created_at', 'desc')
                ->skip($offset)
                ->take($count)
                ->get();
        });

        // Devolver el resultado en JSON
        return response()->json($news);
    }
}
