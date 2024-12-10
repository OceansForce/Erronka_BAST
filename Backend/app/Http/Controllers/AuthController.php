<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // Inicio de sesión y generación del token
    public function login(Request $request)
    {
        // Validar los datos de inicio de sesión (correo electrónico y contraseña)
        $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        // Verificar si el usuario existe por email
        $user = User::where('email', $request->email)->first();

        // Verificar la contraseña
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Credenciales incorrectas'], 401);
        }

        // Autenticar al usuario
        Auth::login($user);

        // Crear el token y devolverlo en la respuesta
        $token = $user->createToken('YourAppName')->plainTextToken;

        // Respuesta con el token generado
        return response()->json([
            'message' => 'Inicio de sesión exitoso',
            'token' => $token,
        ]);
    }
}
