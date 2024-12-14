<?php
namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

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

        // Consultar las noticias con paginación manual
        $news = News::orderBy('created_at', 'desc')
            ->skip($offset) // Saltar las primeras 'offset' noticias
            ->take($count)  // Tomar las siguientes 'count' noticias
            ->get();

        // Devolver el resultado en JSON
        return response()->json($news);
    }
}
