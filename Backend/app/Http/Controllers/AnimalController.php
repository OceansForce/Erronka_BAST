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
        $types = $request->input('type', [], null); // Ahora se espera un array de tipos

        // Validación de los parámetros
        $request->validate([
            'limit' => 'integer|min:1|max:25', // Limitar el valor de limit a entre 1 y 25
            'offset' => 'integer|min:0',
            'protektora_id' => 'nullable|integer|min:1', // El id de la protektora es opcional
            'type' => 'nullable|array', // El tipo ahora es un array opcional
            'type.*' => 'nullable|string|in:txakurra,txakurra ppp,katua,besteak', // Cada elemento del array debe ser uno de los tipos válidos
        ]);

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

        // Si se pasa el array de tipos de animal, filtramos también por estos tipos
        if (!empty($types)) {
            $query->whereIn('type', $types);
        }

        // Aplicar paginación y obtener los resultados
        $animals = $query->offset($offset)
            ->limit($limit)
            ->orderBy('year', 'asc')
            ->get(['id', 'name', 'etxekoAnimalia', 'type', 'animalType', 'img', 'bakuna', 'gender', 'descripcion', 'year', 'losted', 'noiztik']); // Selecciona solo los campos necesarios

        // Verificar si no se encontraron resultados
        if ($animals->isEmpty()) {
            return response()->json(['message' => 'No animals found for the given criteria'], 404);
        }

        // Retornar la respuesta como JSON
        return response()->json($animals);
    }


    public function getAnimal(Request $request, $id)
    {
        // Buscar el animal por el id
        $animal = Animals::with('user:idProtektora') // Cargar la relación con el usuario
            ->whereHas('user', function($query) {
                // Filtrar por el idProtektora mayor a 1 y que no sea nulo
                $query->where('idProtektora', '>', 1)
                    ->whereNotNull('idProtektora');
            })
            ->where('id', $id) // Buscar por el id del animal
            ->first(['id', 'name', 'etxekoAnimalia', 'type', 'animalType', 'img', 'bakuna', 'gender', 'descripcion', 'year', 'losted', 'noiztik']);

        // Verificar si no se encontró el animal
        if (!$animal) {
            return response()->json(['message' => 'Animal not found or does not meet the specified criteria'], 404);
        }

        // Retornar los datos del animal
        return response()->json($animal);
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

        $user = auth()->user();
        if (!$user) {
            return response()->json(['message' => 'Usuario no autenticado'], 401);
        }

        $userId = $user->id;


        // Verificar si el usuario está autenticado
        if (!$userId) {
            return response()->json(['message' => 'Usuario no autenticado'], 403);
        }

        // // Generar una clave única para el caché basada en los parámetros de la solicitud
        // $cacheKey = "personal_animals_{$userId}_{$limit}_{$offset}_{$type}";

        // // Intentar obtener los animales del caché
        // $animals = Cache::remember($cacheKey, now()->addMinutes(30), function () use ($limit, $offset, $userId, $type) {
        //     // Query para obtener los animales del usuario autenticado
        //     $query = Animals::where('userID', $userId); // Filtramos por el user_id del usuario autenticado

        //     // Si se pasa el tipo de animal, filtramos también por el tipo
        //     if ($type) {
        //         $query->where('type', $type);
        //     }

        //     // Aplicar paginación y obtener los resultados
        //     return $query->offset($offset)
        //                 ->limit($limit)
        //                 ->get(['id', 'name', 'etxekoAnimalia', 'type', 'animalType', 'img', 'bakuna', 'gender', 'descripcion', 'year', 'losted', 'noiztik']); // Selecciona solo los campos necesarios
        // });


        // Query para obtener los animales del usuario autenticado
        $query = Animals::where('userID', $userId); // Filtramos por el user_id del usuario autenticado

        // Si se pasa el tipo de animal, filtramos también por el tipo
        if ($type) {
            $query->where('type', $type);
        }

        // Aplicar paginación y obtener los resultados
        $animals = $query->offset($offset)
                ->limit($limit)
                ->get(['id', 'name', 'etxekoAnimalia', 'type', 'animalType', 'img', 'bakuna', 'gender', 'descripcion', 'year', 'losted', 'noiztik']); // Selecciona solo los campos necesarios


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
//        dd($request);
        // Validación de los parámetros

        $user = auth()->user();

        // Si no hay usuario autenticado, devolver un error
        if (!$user) {
            return response()->json(['error' => 'usuario no autenticado'], 401); // 401 Unauthorized
        }
        
        try {
        $request->validate([
            'name' => 'required|string|max:255',
            'etxekoAnimalia' => 'required|boolean',
            'type' => 'required|string|in:txakurra,txakurra ppp,katua,besteak',
            'animalType' => 'nullable|string|max:255',
            'img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'bakuna' => 'nullable|integer|min:0',
            'gender' => 'required|integer|in:1,2',
            'descripcion' => 'nullable|string|max:255',
            'year' => 'nullable|date',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            \Log::error("Validation Exception: " . $e->getMessage());
            return response()->json([
                'message' => 'Error de validación',
                'errors' => $e->errors(),
            ], 422);
        }

        // Aquí intenta imprimir el contenido del request para confirmar que los datos llegan correctamente
        \Log::info('Datos recibidos: ', $request->all());
        //return response()->json(['error' => 'Usuario no autenticado'], 401); 


        // Obtener el usuario autenticado
            
        $imageUrl = null;
        if ($request->hasFile('img')) {
            $imageController = new ImageController();
            $imageResponse = $imageController->upload($request);
            // Comprobamos si la subida fue exitosa
            if ($imageResponse->status() == 201) {
                  $imageUrl = $imageResponse->getData()->url;  // Extraemos la URL de la imagen subida
            }
        }

        // Obtener el userID del usuario autenticado
        $userID = $user->id;

        // Crear el nuevo animal
        $animals = Animals::create([
            'name' => $request->input('name'),
            'etxekoAnimalia' => $request->input('etxekoAnimalia'),
            'type' => $request->input('type'),
            'animalType' => $request->input('animalType', null), // Si no se pasa, se guarda como null
            'img' => $imageUrl, // Si no se pasa, se guarda como null
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
            'img' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'bakuna' => 'nullable|integer|min:0', // 0 = no vacunado, otros números, el id de la vacuna
            'descripcion' => 'nullable|string|max:255', // Descripción del animal (opcional)
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
    
        $imageUrl = null;
        if ($request->hasFile('img')) {
            $imageController = new ImageController();
            $imageResponse = $imageController->upload($request);
            // Comprobamos si la subida fue exitosa
            if ($imageResponse->status() == 201) {
                  $imageUrl = $imageResponse->getData()->url;  // Extraemos la URL de la imagen subida
            }
        }

        // Comprobar si el animal pertenece al usuario autenticado
        if ($animal->userID == $user->id) {
            // Si el animal pertenece al usuario autenticado, se pueden editar sus datos
            $updatedData = $request->only([
                'name',
                'etxekoAnimalia',
                'type',
                'animalType',
                'bakuna',
                'gender',
                'descripcion',
                'year',
            ]);
            
            if ($imageUrl) {
                $updatedData['img'] = $imageUrl;
            }
    
            // Actualizamos los datos solo con los campos que se han enviado
            $animal->update($updatedData);
    
            return response()->json($animal, 200); // 200 OK
        }
    
        // Si el animal no pertenece al usuario autenticado, verificar si tiene una protektora
        if ($animal->protektora_id) {
            // Verificar si el ID de la protektora del animal coincide con el ID de la protektora del usuario
            if ($user->protektora_id == $animal->protektora_id) {
                // Si la protektora es la misma, permitir la edición
                $updatedData = $request->only([
                    'name',
                    'etxekoAnimalia',
                    'type',
                    'animalType',
                    'bakuna',
                    'gender',
                    'descripcion',
                    'year',
                ]);
    
                // Solo actualizamos si hay un valor nuevo en 'img'
                if ($imageUrl) {
                    $updatedData['img'] = $imageUrl;
                }

                // Actualizamos los datos solo con los campos que se han enviado
                $animal->update($updatedData);

                // Guardar cambios
                $animal->save();
    
                return response()->json($animal, 200); // 200 OK
            }
        }
    
        // Si no se cumple ninguna de las condiciones anteriores, devolver un error de autorización
        return response()->json(['error' => 'No tienes permisos para editar este animal'], 403); // 403 Forbidden
    }
    

}
