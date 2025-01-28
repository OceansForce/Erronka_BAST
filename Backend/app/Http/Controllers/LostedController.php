<?php

namespace App\Http\Controllers;

use App\Models\Animals;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;


class LostedController extends Controller
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


        $query = Animals::where(function($query) {
            // Verificar si el campo losted tiene algún valor y contiene al menos un número
            $query->whereNotNull('losted')
                ->where('losted', 'REGEXP', '[0-9]'); // Contiene al menos un número
        });
        

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

    public function getAnimal(Request $request, $id)
    {
        // Buscar el animal por el id y verificar si está marcado como perdido
        $animal = Animals::where('id', $id) // Buscar por el id del animal
        ->whereNotNull('losted') // Verificar que esté marcado como perdido (si 'losted' no es nulo)
        ->first(['id', 'name', 'etxekoAnimalia', 'type', 'animalType', 'img', 'bakuna', 'gender', 'descripcion', 'year', 'losted', 'noiztik']);

        // Verificar si no se encontró el animal
        if (!$animal) {
        return response()->json(['message' => 'Animal not found or does not meet the specified criteria'], 404);
        }

        // Retornar los datos del animal
        return response()->json($animal);

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
