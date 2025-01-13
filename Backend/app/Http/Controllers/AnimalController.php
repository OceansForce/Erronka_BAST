<?php

namespace App\Http\Controllers;

use App\Models\Animals;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;


class AnimalController extends Controller
{
    public function getAnimals(Request $request)
    {
        // Obtener los parámetros de la solicitud
        $limit = $request->input('limit', 10); // Valor por defecto de 10
        $offset = $request->input('offset', 0); // Valor por defecto de 0
        $idProtektora = $request->input('protektora_id', null); // El id de la protektora, si se pasa
        $type = $request->input('type', null); // El tipo de animal, si se pasa

        // Validación de los parámetros
        $request->validate([
            'limit' => 'integer|min:1|max:25', // Limitar el valor de limit a entre 1 y 25
            'offset' => 'integer|min:0',
            'protektora_id' => 'nullable|integer|min:1', // El id de la protektora es opcional
            'type' => 'nullable|string|in:txakurra,txakurra ppp,katua,besteak', // El tipo de animal es opcional
        ]);

        // Generar una clave única para el caché basada en los parámetros de la solicitud
        $cacheKey = "animals_{$limit}_{$offset}_{$idProtektora}_{$type}";

        // Intentar obtener los animales del caché
        $animals = Cache::remember($cacheKey, now()->addMinutes(30), function () use ($limit, $offset, $idProtektora, $type) {
            // Query para obtener animales que cumplan con las condiciones
            $query = Animals::with('user:idProtektora') // Cargar la relación del usuario con el campo idProtektora
                ->whereHas('user', function($query) use ($idProtektora) {
                    // Filtrar animales cuyos usuarios tengan un idProtektora mayor a 1
                    $query->where('idProtektora', '>', 1)
                        ->whereNotNull('idProtektora');
                    
                    // Si se pasa el idProtektora, filtrar también por este valor
                    if ($idProtektora) {
                        $query->where('idProtektora', $idProtektora);
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

        // Retornar la respuesta como JSON
        return response()->json($animals);
    }

    public function getPersonalAnimals(Request $request)
    {
        // Obtener los parámetros de la solicitud
        $limit = $request->input('limit', 10); // Valor por defecto de 10
        $offset = $request->input('offset', 0); // Valor por defecto de 0
        $type = $request->input('type', null); // El tipo de animal, si se pasa

        // Validación de los parámetros
        $request->validate([
            'limit' => 'integer|min:1|max:25', // Limitar el valor de limit a entre 1 y 25
            'offset' => 'integer|min:0',
            'type' => 'nullable|string|in:txakurra,txakurra ppp,katua,besteak', // El tipo de animal es opcional
        ]);

        // Obtener el id del usuario autenticado
        $userId = auth()->id(); // Obtiene el id del usuario autenticado

        // Verificar si el usuario está autenticado
        if (!$userId) {
            return response()->json(['message' => 'Usuario no autenticado'], 403);
        }

        // Generar una clave única para el caché basada en los parámetros de la solicitud
        $cacheKey = "personal_animals_{$userId}_{$limit}_{$offset}_{$type}";

        // Intentar obtener los animales del caché
        $animals = Cache::remember($cacheKey, now()->addMinutes(30), function () use ($limit, $offset, $userId, $type) {
            // Query para obtener los animales del usuario autenticado
            $query = Animals::where('userID', $userId); // Filtramos por el user_id del usuario autenticado

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
        $animal = Animals::create([
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
        return response()->json($animals, 201); // Código 201: creado correctamente
    }

    public function editAnimal(Request $request)
    {
        // Validación de los parámetros
        $request->validate([
            'id' => 'required|integer|exists:animals,id', // Verifica que el id del animal exista en la base de datos
            'name' => 'nullable|string|max:255', // Nombre del animal
            'etxekoAnimalia' => 'nullable|boolean', // Es un animal de casa (booleano)
            'type' => 'nullable|string|in:txakurra,txakurra ppp,katua,besteak', // Tipo de animal
            'animalType' => 'nullable|string|max:255', // Subtipo del animal (opcional)
            'img' => 'nullable|url', // Imagen del animal (opcional)
            'bakuna' => 'nullable|integer|min:0', // 0 = no vacunado, otros números, el id de la vacuna
            'gender' => 'nullable|integer|in:0,1', // Género del animal, 0 = hembra, 1 = macho
            'descripcion' => 'nullable|string|max:255', // Descripción del animal (opcional)
            'year' => 'nullable|date', // Año de nacimiento o ingreso (opcional)
            'userEmail' => 'nullable|string|email|max:255', // Email del usuario al que pertenece el animal
        ]);
    
        // Obtener el usuario autenticado
        $user = auth()->user();
    
        // Si no hay usuario autenticado, devolver un error
        if (!$user) {
            return response()->json(['error' => 'Usuario no autenticado'], 401); // 401 Unauthorized
        }
    
        // Obtener el animal con el ID proporcionado
        $animal = Animals::find($request->input('id'));
    
        // Verificar si el animal existe
        if (!$animal) {
            return response()->json(['error' => 'Animal no encontrado'], 404); // 404 Not Found
        }
    
        // Si se proporciona userEmail, buscar el usuario correspondiente
        if ($request->has('userEmail')) {
            $newUser = User::where('email', $request->input('userEmail'))->first();
    
            if (!$newUser) {
                return response()->json(['error' => 'Usuario con el email proporcionado no encontrado'], 404); // 404 Not Found
            }
    
            // Actualizar el userID del animal con el ID del nuevo usuario
            $animal->userID = $newUser->id;
        }
    
        // Comprobar si el animal pertenece al usuario autenticado
        if ($animal->userID == $user->id) {
            // Si el animal pertenece al usuario autenticado, se pueden editar sus datos
            $animal->update($request->only([
                'name',
                'etxekoAnimalia',
                'type',
                'animalType',
                'img',
                'bakuna',
                'gender',
                'descripcion',
                'year',
            ]));
    
            // Guardar cambios (incluido userID si se actualizó)
            $animal->save();
    
            return response()->json($animal, 200); // 200 OK
        }
    
        // Si el animal no pertenece al usuario autenticado, verificar si tiene una protektora
        if ($animal->protektora_id) {
            // Verificar si el ID de la protektora del animal coincide con el ID de la protektora del usuario
            if ($user->protektora_id == $animal->protektora_id) {
                // Si la protektora es la misma, permitir la edición
                $animal->update($request->only([
                    'name',
                    'etxekoAnimalia',
                    'type',
                    'animalType',
                    'img',
                    'bakuna',
                    'gender',
                    'descripcion',
                    'year',
                ]));
    
                // Guardar cambios (incluido userID si se actualizó)
                $animal->save();
    
                return response()->json($animal, 200); // 200 OK
            }
        }
    
        // Si no se cumple ninguna de las condiciones anteriores, devolver un error de autorización
        return response()->json(['error' => 'No tienes permisos para editar este animal'], 403); // 403 Forbidden
    }
    

}
