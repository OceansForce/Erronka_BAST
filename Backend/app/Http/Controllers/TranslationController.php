<?php
namespace App\Http\Controllers;

use App\Models\Translation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cache;

class TranslationController extends Controller
{
    public function getTranslationsByKeys(Request $request)
    {
        // Validar que 'keys' sea un array
        $validator = Validator::make($request->all(), [
            'keys' => 'required|array',
            'keys.*' => 'string', // Asegura que todos los elementos dentro de 'keys' sean cadenas
        ]);

        // Si la validación falla, se devuelve un error
        if ($validator->fails()) {
            return response()->json(['error' => 'Invalid input for keys parameter'], 400);
        }

        // Obtener las claves de la solicitud
        $keys = $request->input('keys');

        // Crear un array para almacenar las traducciones
        $translations = [];

        foreach ($keys as $key) {
            // Crear una clave única para cada traducción (por ejemplo, 'descripcion0_es')
            $cacheKey = 'translation_' . $key;

            // Intentar obtener la traducción desde la caché
            $translation = Cache::remember($cacheKey, now()->addMinutes(30), function () use ($key) {
                // Obtener todas las traducciones de la clave dada
                return Translation::where('keyValue', $key)->get();
            });

            // Si la traducción fue encontrada, organizarla por idioma
            if ($translation->isNotEmpty()) {
                $translations[$key] = $translation->mapWithKeys(function ($item) {
                    return [$item->language => $item->value]; // Organiza por idioma
                });
            }
        }

        // Si no se encontraron traducciones, devolver un mensaje de error
        if (empty($translations)) {
            return response()->json(['message' => 'No translations found for the given keys'], 404);
        }

        // Devolver las traducciones organizadas como un objeto JSON
        return response()->json([
            'translations' => $translations,
        ]);
    }
}
