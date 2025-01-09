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
            'limit' => 'integer|min:1|max:25', // Limitar el valor de limit a entre 1 y 25
            'offset' => 'integer|min:0',
            'protektora_id' => 'nullable|integer|min:1', // El id de la protektora es opcional
            'type' => 'nullable|string|in:txakurra,txakurra ppp,katua,besteak', // El tipo de animal es opcional
        ]);

        // Generar una clave única para el caché basada en los parámetros de la solicitud
        $cacheKey = "animals_{$limit}_{$offset}_{$protektoraId}_{$type}";

        // Intentar obtener los animales del caché
        $animals = Cache::remember($cacheKey, now()->addMinutes(30), function () use ($limit, $offset, $protektoraId, $type) {
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

            // Aplicar paginación y obtener los resultados
            return $query->offset($offset)
                        ->limit($limit)
                        ->get(['id', 'name', 'etxekoAnimalia', 'type', 'animalType', 'img', 'bakuna', 'gender', 'descripcion', 'year', 'losted', 'noiztik']); // Selecciona solo los campos necesarios
        });

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


    // Create animals to adopt
    public function createAnimal(Request $request)
    {
        // Validación de los parámetros
        $request->validate([
            'name' => 'required|string|max:255', // Nombre del animal
            'etxekoAnimalia' => 'required|boolean', // Es un animal de casa (booleano)
            'type' => 'required|string|in:txakurra,txakurra ppp,katua,besteak', // Tipo de animal
            'animalType' => 'nullable|string|max:255', // Subtipo del animal (opcional)
            'img' => 'nullable|url', // Imagen del animal (opcional)
            'bakuna' => 'required|integer|min:0', // 0 = no vacunado, otros numeros, el id de la bakuna
            'gender' => 'required|integer|in:0,1', // Género del animal, 0 = hembra, 1 = macho
            'descripcion' => 'nullable|string|max:255', // Descripción del animal (opcional)
            'year' => 'nullable|date', // Año de nacimiento o ingreso (opcional)
        ]);

        // Obtener el usuario autenticado
        $user = auth()->user();

        // Si no hay usuario autenticado, devolver un error
        if (!$user) {
            return response()->json(['error' => 'Usuario no autenticado'], 401); // 401 Unauthorized
        }

        // Obtener el userID del usuario autenticado
        $userID = $user->id;

        // Crear el nuevo animal
        $animal = Animal::create([
            'name' => $request->input('name'),
            'etxekoAnimalia' => $request->input('etxekoAnimalia'),
            'type' => $request->input('type'),
            'animalType' => $request->input('animalType', null), // Si no se pasa, se guarda como null
            'img' => $request->input('img', null), // Si no se pasa, se guarda como null
            'bakuna' => $request->input('bakuna'),
            'gender' => $request->input('gender'),
            'descripcion' => $request->input('descripcion', null), // Si no se pasa, se guarda como null
            'year' => $request->input('year', null), // Si no se pasa, se guarda como null
            'losted' => null, // Se establece como null
            'noiztik' => null, // Se establece como null
            'userID' => $userID, // Asignamos el ID del usuario autenticado
        ]);

        // Retornar el animal creado en formato JSON
        return response()->json($animal, 201); // Código 201: creado correctamente
    }
}
