<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;


class UserCreateController extends Controller
{

	public function store(Request $request)
    {
        Log::info('Recibida solicitud de registro', $request->all());

        // Validación de los datos recibidos
        $validator = \Validator::make($request->all(), [
            'DNI' => 'required|string|max:10|unique:users,DNI',
            'name' => 'required|string|max:255',
            'secondName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'year' => 'required|date',
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

        $verificationToken = Str::random(32);

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
                'email_verification_token' => $verificationToken,
            ]);

            Mail::send('emails.verify', ['token' => $verificationToken], function ($message) use ($user) {
                $message->to($user->email);
                $message->subject('Confirma tu correo electrónico');
            });
            

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
    public function verifyEmail($token)
    {
        $user = User::where('email_verification_token', $token)->first();

        if (!$user) {
            return response()->json(['message' => 'Token inválido.'], 400);
        }

        $user->update([
            'email_verified' => true,
            'email_verification_token' => null,
        ]);

        return response()->json(['message' => 'Correo confirmado con éxito.'], 200);
    }


    public function edit(Request $request)
    {
        // Obtener el usuario autenticado
        $user = auth()->user();
        if (!$user) {
            return response()->json(['error' => 'Usuario no autenticado'], 401); // 401 Unauthorized
        }

        // Validación de los datos recibidos
        $validator = \Validator::make($request->all(), [
            'DNI' => 'required|string|max:10|unique:users,DNI,' . $user->id, // Validar solo si el DNI ha cambiado
            'name' => 'required|string|max:255',
            'secondName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id, // Validar solo si el email ha cambiado
            'password' => 'required|string|min:8|confirmed', // La contraseña es opcional al editar, pero si se proporciona debe cumplir con las reglas
            'year' => 'required|date',
            'img' => 'nullable|url', // Validación para URL de la imagen
        ]);

        // Si la validación falla, devolver un 400 Bad Request
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Datos incorrectos o incompletos.',
                'errors' => $validator->errors()
            ], 400); // 400 Bad Request
        }

        // Actualizar los datos del usuario
        try {
            // Actualizamos los campos proporcionados por el usuario
            $user->DNI = $request->DNI;
            $user->name = $request->name;
            $user->secondName = $request->secondName;
            $user->email = $request->email;
            
            // Si la contraseña fue proporcionada, la actualizamos
            if ($request->password) {
                $user->password = Hash::make($request->password);
            }
            
            $user->year = $request->year ? $request->year : null;
            $user->img = $request->img;

            // Guardar los cambios en la base de datos
            $user->save();

            Log::info('Usuario actualizado exitosamente', ['user' => $user]);

            return response()->json([
                'message' => 'Usuario actualizado exitosamente',
                'user' => $user,
            ], 200); // 200 OK

        } catch (\Exception $e) {
            // En caso de error inesperado (ej. problemas con la base de datos)
            return response()->json([
                'message' => 'Ocurrió un error al actualizar los datos del usuario.',
                'error' => $e->getMessage(),
            ], 500); // 500 Internal Server Error
        }
    }



}

