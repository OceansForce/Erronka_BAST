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
            'count' => 'required|integer|min:1|max:25',
            'offset' => 'required|integer|min:0',
            'protektora_id' => 'nullable|integer|exists:protekctoras,id', // Validamos que el ID de la protectora sea válido si se pasa
        ]);

        // Obtener los parámetros
        $count = $request->input('count');
        $offset = $request->input('offset');
        $protektoraId = $request->input('protektora_id'); // Este parámetro es opcional

        // Asignar un valor predeterminado a 'protektora_id' si no se pasa
        $protektoraIdCache = $protektoraId ? $protektoraId : 'no_protektora';

        // Crear una clave única para almacenar en caché, usando 'count', 'offset' y 'protektora_id'
        $cacheKey = "latest_news_{$count}_{$offset}_{$protektoraIdCache}";

        // Intentar obtener las noticias del caché
        $news = Cache::remember($cacheKey, now()->addMinutes(30), function () use ($count, $offset, $protektoraId) {
            // Si no están en caché, consultar la base de datos
            $query = News::orderBy('created_at', 'desc')
                        ->skip($offset)
                        ->take($count);

            // Si se proporciona el ID de la protectora, filtrar por ello
            if ($protektoraId) {
                $query->where('protektora_id', $protektoraId);
            }

            return $query->get();
        });

        // Devolver el resultado en JSON
        return response()->json($news);
    }

}
