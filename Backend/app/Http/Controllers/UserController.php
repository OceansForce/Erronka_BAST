<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUserDate(Request $request)
    {
        // Obtener el usuario autenticado
        $user = auth()->user();
        if (!$user) {
            return response()->json(['error' => $request->header('Authorization')], 401); // 401 Unauthorized
        }

        // Obtener el userID del usuario autenticado
        $userID = $user->id;


        // Obtener todos los animales que tienen el userID igual al id del usuario autenticado
        $animals = Animals::where('userID', $userID)->get();


        // Preparar la respuesta que incluye tanto el usuario como los animales
        $response = [
            'user' => $user,  // Información del usuario
            'animals' => $animals // Información de los animales
        ];

        // Retornar la respuesta con los datos
        return response()->json($response);
    }

    
}
