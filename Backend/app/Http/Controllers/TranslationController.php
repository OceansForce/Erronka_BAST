<?php

namespace App\Http\Controllers;

use App\Models\Translation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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

        // Obtener los idiomas disponibles (esto puede ser dinámico si la tabla de traducciones tiene varios idiomas)
        $languages = Translation::select('language')->distinct()->get()->pluck('language')->toArray();

        // Si no hay idiomas disponibles en la base de datos
        if (empty($languages)) {
            return response()->json(['message' => 'No languages found'], 404);
        }

        // Obtener las traducciones para las claves solicitadas en todos los idiomas
        $translations = Translation::whereIn('keyValue', $keys)
            ->whereIn('language', $languages)
            ->get();

        // Verificar si se encontraron traducciones
        if ($translations->isEmpty()) {
            return response()->json(['message' => 'No translations found for the given keys'], 404);
        }

        // Organizar las traducciones por clave y por idioma
        $response = [];
        foreach ($translations as $translation) {
            // Agregar la traducción en el idioma correspondiente
            $response[$translation->keyValue][$translation->language] = $translation->value;
        }

        // Devolver las traducciones como un objeto JSON
        return response()->json([
            'translations' => $response,
        ]);
    }
}
