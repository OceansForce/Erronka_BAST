<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserCreateController extends Controller
{

	public function store(Request $request)
    {
        Log::info('Recibida solicitud de registro', $request->all());

        // Validación de los datos recibidos
        $validator = \Validator::make($request->all(), [
            'DNI' => 'required|string|max:10|unique:users,DNI',
            'name' => 'required|string|max:255',
            'secondName' => 'nullable|string|max:255',
            'email' => 'nullable|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'year' => 'nullable|date',
            'img' => 'nullable|url', // Validación para URL de la imagen
        ]);

        // Si la validación falla, devolver un 400 Bad Request
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Datos incorrectos o incompletos.',
                'errors' => $validator->errors()
            ], 400); // 400 Bad Request
        }

        Log::info('Datos validados correctamente');

        // Crear el usuario
        try {
            $user = User::create([
                'DNI' => $request->DNI,
                'name' => $request->name,
                'secondName' => $request->secondName,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'year' => $request->year ? $request->year : null,
                'img' => $request->img, // Guardar la URL de la imagen
            ]);

            Log::info('Usuario creado exitosamente', ['user' => $user]);

            return response()->json([
                'message' => 'Usuario creado exitosamente',
                'user' => $user,
            ], 201); // 201 Created

        } catch (\Exception $e) {
            // En caso de error inesperado (ej. problemas con la base de datos)
            return response()->json([
                'message' => 'Ocurrió un error al crear el usuario.',
                'error' => $e->getMessage(),
            ], 500); // 500 Internal Server Error
        }
    }

    public function edit(Request $request)
    {
        Log::info('Recibida solicitud de registro', $request->all());

        // Validación de los datos recibidos
        $validator = \Validator::make($request->all(), [
            'DNI' => 'required|string|max:10|unique:users,DNI',
            'name' => 'required|string|max:255',
            'secondName' => 'nullable|string|max:255',
            'email' => 'nullable|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'year' => 'nullable|date',
            'img' => 'nullable|url', // Validación para URL de la imagen
        ]);

        // Si la validación falla, devolver un 400 Bad Request
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Datos incorrectos o incompletos.',
                'errors' => $validator->errors()
            ], 400); // 400 Bad Request
        }

        Log::info('Datos validados correctamente');

        // Crear el usuario
        try {
            $user = User::create([
                'DNI' => $request->DNI,
                'name' => $request->name,
                'secondName' => $request->secondName,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'year' => $request->year ? $request->year : null,
                'img' => $request->img, // Guardar la URL de la imagen
            ]);

            Log::info('Usuario creado exitosamente', ['user' => $user]);

            return response()->json([
                'message' => 'Usuario creado exitosamente',
                'user' => $user,
            ], 201); // 201 Created

        } catch (\Exception $e) {
            // En caso de error inesperado (ej. problemas con la base de datos)
            return response()->json([
                'message' => 'Ocurrió un error al crear el usuario.',
                'error' => $e->getMessage(),
            ], 500); // 500 Internal Server Error
        }
    }


}

