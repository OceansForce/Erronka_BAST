<?php

// app/Http/Controllers/NewsController.php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Protektora;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    // Crear una noticia
    public function store(Request $request)
    {
        $user = auth()->user();

        // Verificar que el usuario tenga un idProtektora
        if (!$user->idProtektora) {
            return response()->json(['message' => 'El usuario no tiene una protektora asignada.'], 403);
        }

        // Crear la noticia para la protektora asociada
        $news = News::create([
            'text' => $request->text,
            'protektora' => $user->idProtektora
        ]);

        return response()->json($news, 201);
    }

    // Actualizar una noticia
    public function update(Request $request, News $news)
    {
        $news->update($request->only('text'));

        return response()->json($news);
    }

    // Eliminar una noticia
    public function destroy(News $news)
    {
        $news->delete();

        return response()->json(['message' => 'Noticia eliminada con éxito.']);
    }
}

