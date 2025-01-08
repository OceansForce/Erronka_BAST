<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public function getAnimals(Request $request)
    {
        // Obtener los parámetros de la solicitud
        $limit = $request->input('limit', 10); // Valor por defecto de 10
        $offset = $request->input('offset', 0); // Valor por defecto de 0
        $protektoraId = $request->input('protektora_id', null); // El id de la protektora, si se pasa
        $type = $request->input('type', null); // El tipo de animal, si se pasa

        // Validación de los parámetros
        $request->validate([
            'limit' => 'integer|min:1|max:100', // Limitar el valor de limit a entre 1 y 100
            'offset' => 'integer|min:0',
            'protektora_id' => 'nullable|integer|min:1', // El id de la protektora es opcional
            'type' => 'nullable|string|in:txakurra,txakurra ppp,katua,besteak', // El tipo de animal es opcional
        ]);

        // Query para obtener animales que cumplan con las condiciones
        $query = Animal::with('user:idProtektora') // Cargar la relación del usuario con el campo idProtektora
            ->whereHas('user', function($query) use ($protektoraId) {
                $query->where('idProtektora', '!=', 0)
                      ->whereNotNull('idProtektora');

                // Si se pasa un idProtektora, filtra por este
                if ($protektoraId) {
                    $query->where('idProtektora', $protektoraId);
                }
            });

        // Si se pasa el tipo de animal, filtramos también por el tipo
        if ($type) {
            $query->where('type', $type);
        }

        // Aplicar paginación
        $animals = $query->offset($offset)
                         ->limit($limit)
                         ->get(['id', 'name', 'etxekoAnimalia', 'type', 'animalType', 'img', 'bakuna', 'gender', 'descripcion', 'year', 'losted', 'noiztik', 'userID']); // Selecciona solo los campos necesarios

        // Verificar si no se encontraron resultados
        if ($animals->isEmpty()) {
            return response()->json(['message' => 'No animals found for the given criteria'], 404);
        }

        // Agregar el idProtektora a la respuesta
        $animals->each(function($animal) {
            // Agregar el idProtektora a cada animal en la respuesta
            $animal->protektora_id = $animal->user->idProtektora;
        });

        // Retornar la respuesta como JSON
        return response()->json($animals);
    }
}
