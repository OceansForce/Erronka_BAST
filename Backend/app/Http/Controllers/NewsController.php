<?php

// app/Http/Controllers/NewsController.php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Protektora;
use Illuminate\Http\Request;
use App\Models\Translation;
use App\Http\Controllers\ImageController;

class NewsController extends Controller
{
    // Crear una noticia
    public function store(Request $request)
    {
        if (!auth()->check()) {
                return response()->json(['message' => 'No autenticado'], 401);
        }
        if (auth()->user()->idProtektora !=1){
            return response()->json(['message' => 'No tienes permisos'],401);
        }

            // Validación de los campos de texto y título en ambos idiomas
            try {
                $request->validate([
                    'titleES' => 'required|string',
                    'titleEU' => 'required|string',
                    'textES' => 'required|string',
                    'textEU' => 'required|string',
                    'img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            //'img' => 'nullable|string'->default('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
                ]);
            } catch (\Illuminate\Validation\ValidationException $e) {
                return response()->json([
                    'message' => 'Error de validación',
                    'errors' => $e->errors(),
                ], 422);
            }

            $imageUrl = null;
//		dd($request);
            if ($request->hasFile('img')) {
//		dd($request);
	        $imageController = new ImageController();
                $imageResponse = $imageController->upload($request);
//    		return response()->json(['status' => $imageResponse->status()],201);
                // Comprobamos si la subida fue exitosa
                if ($imageResponse->status() == 201) {
                    $imageUrl = $imageResponse->getData()->url;  // Extraemos la URL de la imagen subida
                }
            }

            // Crear la noticia
            $news = new News();
            $news->protektora = auth()->user()->idProtektora;  // El middleware ya validó que el usuario tenga un 'protektora_id'
            $news->img = $imageUrl;
            $news->save(); // Guardamos la noticia en la base de datos, para obtener el ID

            // Obtener el ID de la noticia recién creada
            $news_id = $news->id;

            // Crear las traducciones para el título
            // En español
            $title_es = Translation::create([
                'keyValue' => 'title' . $news_id,
                'language' => 'es',
                'value' => $request->input('titleES'),
            ]);

            // En euskera
            $title_eu = Translation::create([
                'keyValue' => 'title' . $news_id,
                'language' => 'eu',
                'value' => $request->input('titleEU'),
            ]);

            // Crear las traducciones para el texto
            // En español
            $text_es = Translation::create([
                'keyValue' => 'news' . $news_id,
                'language' => 'es',
                'value' => $request->input('textES'),
            ]);

            // En euskera
            $text_eu = Translation::create([
                'keyValue' => 'news' . $news_id,
                'language' => 'eu',
                'value' => $request->input('textEU'),
            ]);

            // Actualizamos los campos en la tabla `news` con las claves de traducción
            $news->title = $title_es->keyValue;  // Clave que apunta al título en español
            $news->text = $text_es->keyValue;    // Clave que apunta al texto en español
            $news->save();  // Guardamos nuevamente la noticia con las claves

            // Retornar la respuesta
            return response()->json([
                'message' => 'Noticia creada con éxito',
                'news' => $news
            ], 201);
    }
    // Actualizar una noticia
    public function update(Request $request, News $news)
    {
        if (auth()->user()->idProtektora !=1){
            return response()->json(['message' => 'No tienes permisos'],401);
        }
        // Validación de los campos de texto y título en ambos idiomas
        $request->validate([
            'titleES' => 'required|string',
            'titleEU' => 'required|string',
            'textES' => 'required|string',
            'textEU' => 'required|string',
            'img' => 'nullable|url',
        ]);

        // Actualizamos la imagen de la noticia
        $news->img = $request->input('img');
        
        // Actualizar las traducciones para el título
        // En español
        $title_es = Translation::where('keyValue', 'title' . $news->id)
            ->where('language', 'es')
            ->first();
        $title_es->value = $request->input('titleES');
        $title_es->save();

        // En euskera
        $title_eu = Translation::where('keyValue', 'title' . $news->id)
            ->where('language', 'eu')
            ->first();
        $title_eu->value = $request->input('titleEU');
        $title_eu->save();

        // Actualizar las traducciones para el texto
        // En español
        $text_es = Translation::where('keyValue', 'news' . $news->id)
            ->where('language', 'es')
            ->first();
        $text_es->value = $request->input('textES');
        $text_es->save();

        // En euskera
        $text_eu = Translation::where('keyValue', 'news' . $news->id)
            ->where('language', 'eu')
            ->first();
        $text_eu->value = $request->input('textEU');
        $text_eu->save();

        // Actualizamos los campos en la tabla `news` con las claves de traducción
        $news->title = $title_es->keyValue;  // Clave que apunta al título en español
        $news->text = $text_es->keyValue;    // Clave que apunta al texto en español
        $news->save();  // Guardamos nuevamente la noticia con las claves actualizadas

        // Retornar la respuesta
        return response()->json([
            'message' => 'Noticia actualizada con éxito',
            'news' => $news
        ], 200);
    }
    // Eliminar una noticia
    public function destroy(News $news)
    {
        $news->delete();

        return response()->json(['message' => 'Noticia eliminada con éxito.']);
    }
}

