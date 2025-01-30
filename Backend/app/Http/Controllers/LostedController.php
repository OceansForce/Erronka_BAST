<?php

namespace App\Http\Controllers;

use App\Models\Animals;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Models\Losted;
use App\Models\User;
use App\Models\Protektora;


class LostedController extends Controller
{
    public function getAnimals(Request $request)
    {
        // Obtener los parámetros de la solicitud
        $limit = $request->input('limit', 10); // Valor por defecto de 10
        $offset = $request->input('offset', 0); // Valor por defecto de 0
        $idProtektora = $request->input('protektora_id', null); // El id de la protektora, si se pasa
        $types = $request->input('type', []); // Ahora se espera un array de tipos
        $herria = $request->input('herria', null); // Ahorra pasamos el herria
        $herria = $request->input('lurraldea', null); // Ahorra pasamos el lurraldea



        // Validación de los parámetros
        $request->validate([
            'limit' => 'integer|min:1|max:25', // Limitar el valor de limit a entre 1 y 25
            'offset' => 'integer|min:0',
            'protektora_id' => 'nullable|integer|min:1', // El id de la protektora es opcional
            'type' => 'nullable|array', // El tipo ahora es un array opcional
            'type.*' => 'string|in:txakurra,txakurra ppp,katua,besteak', // Cada elemento del array debe ser uno de los tipos válidos
            'herria '=> 'nullable|string',
            'lurraldea '=> 'nullable|string',
        ]);


        $query = Animals::where(function($query) {
            // Verificar si el campo losted tiene algún valor y contiene al menos un número
            $query->whereNotNull('losted')
                ->where('losted', 'REGEXP', '[0-9]'); // Contiene al menos un número
        });
        

        
        // Si se pasa el array de tipos de animal, filtramos también por estos tipos
        if (!empty($types)) {
            $query->whereIn('type', $types);
        }

        // Aplicar paginación y obtener los resultados
        $animals = $query->with('galduta');

        // Si `$herria` tiene valor, ordenamos por `hiria` primero y luego por `fecha`
        if ($herria) {
            // Ordenar por 'hiria' de la relación 'galduta' (tabla 'losted')
            $animals = $animals->orderByRaw("galduta.hiria = ? DESC", [$herria]) // Los registros con 'hiria' igual a $herria van primero
                                ->orderBy('year', 'asc'); // Luego ordenamos por 'year' en orden ascendente
        } else {
            // Si no hay `$herria`, solo ordenamos por 'year'
            $animals = $animals->orderBy('year', 'asc');
        }
        

        $animals = $query->with('galduta') // Cargar la relación 'galduta' con los datos de la tabla 'losted'
            ->offset($offset)
            ->limit($limit)
            ->get(['id', 'name', 'etxekoAnimalia', 'type', 'animalType', 'img', 'bakuna', 'gender', 'descripcion', 'year', 'losted']);

        // Agregar 'hiria', 'probintzia', 'fecha', y 'moreInformation' desde la relación 'galduta' en la respuesta
        $animals->transform(function ($animal) {
            // Acceder a los datos de la relación 'galduta' (tabla 'losted')
            $animal->hiria = $animal->galduta->hiria ?? null; 
            $animal->probintzia = $animal->galduta->probintzia ?? null;
            $animal->fecha = $animal->galduta->fecha ?? null;
            $animal->moreInformation = $animal->galduta->moreInformation ?? null;

            return $animal;
        });

        // Verificar si no se encontraron resultados
        if ($animals->isEmpty()) {
            return response()->json(['message' => 'No animals found for the given criteria'], 404);
        }

        // Retornar la respuesta como JSON
        return response()->json($animals);
    }

    public function getAnimal(Request $request, $id)
    {
        $animal = Animals::where('id', $id) // Buscar por el id del animal
            ->whereNotNull('losted') // Verificar que esté marcado como perdido (si 'losted' no es nulo)
            ->with('galduta') // Cargar la relación 'galduta' (con datos de la tabla 'losted')
            ->first(['id', 'name', 'etxekoAnimalia', 'type', 'animalType', 'img', 'bakuna', 'gender', 'descripcion', 'year', 'losted', 'userID']);

        // Verificar si el animal existe
        if (!$animal) {
            return response()->json(['message' => 'Animal not found or does not meet the specified criteria'], 404);
        }

        // Agregar los campos de 'losted' (relación 'galduta') a la respuesta
        $animal->hiria = $animal->galduta->hiria ?? null; // Obtener 'hiria' de 'losted'
        $animal->probintzia = $animal->galduta->probintzia ?? null; // Obtener 'probintzia' de 'losted'
        $animal->fecha = $animal->galduta->fecha ?? null; // Obtener 'fecha' de 'losted'
        $animal->moreInformation = $animal->galduta->moreInformation ?? null; // Obtener 'moreInformation' de 'losted'

        $userEmail = User::where('id', $animal->userID);
        $idProtektora = User::where('id', $animal->idProtektora)->value('idProtektora');
        
        $protektoraEmail = null;
        if ($idProtektora) {
            $protektoraEmail = Protektora::where('id', $idProtektora)->value('email');
        }
            
        // Verificar si no se encontró el animal
        if (!$animal) {
        return response()->json(['message' => 'Animal not found or does not meet the specified criteria'], 404);
        }

        $contactEmail = $protektoraEmail ?? $userEmail;

        // Retornar los datos del animal
        return response()->json([
            'animal' => $animal,
            'contactEmail' => $contactEmail,
            "protektoraEmail" => $protektoraEmail,
            "userEmail" => $userEmail
        ]);

    }


    public function setLosted(Request $request)
    {
        // Validación de los parámetros
        $request->validate([
            'id' => 'required|integer|exists:animals,id', // Verifica que el id del animal exista en la base de datos
            'hiria' => 'required|string|max:255', 
            'probintzia' => 'required|string|max:255', 
            'fecha' => 'required|date', 
            'moreInformation' => 'required|string|max:255', 
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
    
        // Crear el nuevo registro en la tabla 'losted'
        $losted = Losted::create([
            'fecha' => $request->fecha,
            'descripcion' => $request->descripcion,
            'probintzia' => $request->probintzia,
            'hiria' => $request->hiria,
            'moreInformation' => $request->moreInformation,
        ]);
    
        // Comprobar si el animal pertenece al usuario autenticado
        if ($animal->userID == $user->id) {
            // Si el animal pertenece al usuario autenticado, se pueden editar sus datos
            $animal->losted = $losted->id; // Asignar directamente el ID del Losted
            $animal->save();
    
            return response()->json($animal, 200); // 200 OK
        }
    
        // Si el animal no pertenece al usuario autenticado, verificar si tiene una protektora
        if ($animal->protektora_id) {
            // Verificar si el ID de la protektora del animal coincide con el ID de la protektora del usuario
            if ($user->protektora_id == $animal->protektora_id) {
                // Si la protektora es la misma, permitir la edición
                $animal->update($request->only([
                    'losted' => $losted->id
                ]));
    
                // Guardar cambios (incluido userID si se actualizó)
                $animal->save();
    
                return response()->json($animal, 200); // 200 OK
            }
        }
    
        // Si no se cumple ninguna de las condiciones anteriores, devolver un error de autorización
        return response()->json(['error' => 'No tienes permisos para editar este animal'], 403); // 403 Forbidden
    }

    public function setNotLosted(Request $request)
    {
        // Validación de los parámetros
        $request->validate([
            'id' => 'required|integer|exists:animals,id', // Verifica que el id del animal exista en la base de datos
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
    
       
    
        // Comprobar si el animal pertenece al usuario autenticado
        if ($animal->userID == $user->id) {
            // Si el animal pertenece al usuario autenticado, se pueden editar sus datos
            $animal->update($request->only([
                'losted' => null
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
                    'losted' => null
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
