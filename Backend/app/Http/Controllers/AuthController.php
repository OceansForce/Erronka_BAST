<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

use Carbon\Carbon;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();
        if ($user->email_verified === 0) {
            return response()->json([
                'error' => 'El usuario no ha verificado su correo electrónico.',
            ], 401);
        }

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'error' => 'Las credenciales proporcionadas son incorrectas.',
            ], 401);
        }


	    $abilities = [];
        if ($user->role === 'admin') {
            // Los administradores tienen todos los permisos
            $abilities = ['*'];
        } elseif ($user->role === 'prokektora') {
            // Los moderadores pueden tener permisos limitados
            $abilities = ['moderate_content', 'view_content'];
        } else {
            // Los usuarios normales solo pueden ver contenido
            $abilities = ['view_content'];
        }


        // Generar el token de acceso
        $token = $user->createToken('Bast', $abilities, Carbon::now()->addDays(90))->plainTextToken;

        return response()->json([
	    'user' => $user,
            'token' => $token
        ]);
    }
}
