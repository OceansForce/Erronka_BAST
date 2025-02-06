<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Animals;
use App\Models\User;
use App\Models\Protektora;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;


use Carbon\Carbon;

class AdoptController extends Controller
{
    public function adoptButtom(Request $request)
    {

        $user = auth()->user();

        // Si no hay usuario autenticado, devolver un error
        if (!$user) {
            return response()->json(['error' => 'usuario no autenticado'], 401); // 401 Unauthorized
        }

        $request->validate([
            'id' => 'required|integer|exists:animals,id', // Verifica que el id del animal exista en la base de datos
        ]);

        $userId = $user->id; // Suponiendo que tienes el ID del usuario
        $verificationToken = Str::random(255 - strlen($userId) - 1) . '-' . $userId;
        
        $animal = Animals::where('id', $request->id)->first();

        $idUser = $animal->userID;

        $userToAdoptIt = User::where('id', $idUser)->first();

        if(!$userToAdoptIt->idProtektora){
            return response()->json(['error' => 'That animal can be adopted'], 401); // 401 Unauthorized
        }

        $protectora = Protektora::where('id', $userToAdoptIt->idProtektora)->first();
        // return response()->json(['error' => $protectora], 401); // 401 Unauthorized

        $animal -> adoptToken = $verificationToken;
        $animal->save();

        Mail::send('emails.adopt', ['token' => $verificationToken, 'user' => $user, 'animal' => $animal, 'protectora' => $protectora], function ($message) use ($protectora) {
            $message->to($protectora->email);
            $message->subject('Animal para adoptar');
        });

        // Retornar una respuesta de éxito
        return response()->json(['success' => 'Mensaje enviado']);
    }


    public function adoptConfirmation($token)
    {

        $animal = Animals::where('adoptToken', $token)->first();

        if (!$animal) {
            return response()->json(['message' => 'Token inválido.'], 400);
        }

        $parts = explode('-', $token);
        $userId = end($parts);  // Obtiene la última parte del array resultante

        $user = User::where('id', $userId)->first();

        if (!$user) {
            return response()->json(['message' => 'Token inválido.'], 400);
        }

        $animal->update([
            'adoptToken' => null,
            'userID' => $user->id,
        ]);

        Mail::send('emails.adopted', ['user' => $user, 'animal'=> $animal], function ($message) use ($user) {
            $message->to($protectora->email);
            $message->subject('Felicidades por tu nuevo mienbro de la familia');
        });

        return response()->json(['message' => 'Animal adoptar.'], 200);
    }



    public function adoptCancel($token)
    {

        $animal = Animals::where('adoptToken', $token)->first();

        if (!$animal) {
            return response()->json(['message' => 'Token inválido.'], 400);
        }

        $parts = explode('-', $token);
        $userId = end($parts);  // Obtiene la última parte del array resultante

        $user = User::where('id', $userId)->first();

        if (!$user) {
            return response()->json(['message' => 'Token inválido.'], 400);
        }

        $animal->update([
            'adoptToken' => null,
        ]);

        Mail::send('emails.cancel', ['user' => $user, 'animal'=> $animal], function ($message) use ($user) {
            $message->to($protectora->email);
            $message->subject("Lamentamos que no hayas podido adoptar a {$animal->name}");
        });

        return response()->json(['message' => 'Adopcion cancelada.'], 200);
    }

    
}
