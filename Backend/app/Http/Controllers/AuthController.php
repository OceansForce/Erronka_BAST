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

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'error' => 'Las credenciales proporcionadas son incorrectas.',
            ], 401);
        }

        // Generar el token de acceso
        $token = $user->createToken('YourAppName', ['*'], Carbon::now()->addDays(5))->plainTextToken;

        return response()->json([
            'token' => $token
        ]);
    }
}
