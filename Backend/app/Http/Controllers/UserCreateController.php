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
//	dd($request);
        // Validación de los datos recibidos
        $validator = \Validator::make($request->all(), [
            'DNI' => 'required|string|max:10|unique:users,DNI',
            'name' => 'required|string|max:255',
            'secondName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'year' => 'required|date',
            'img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
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
	    $imageUrl = null;
        if ($request->hasFile('img')) {
            $imageController = new ImageController();
            $imageResponse = $imageController->upload($request);
            // Comprobamos si la subida fue exitosa
            if ($imageResponse->status() == 201) {
                  $imageUrl = $imageResponse->getData()->url;  // Extraemos la URL de la imagen subida
            }
        }

        // Crear el usuario
        try {
            $user = User::create([
                'DNI' => $request->DNI,
                'name' => $request->name,
                'secondName' => $request->secondName,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'year' => $request->year ? $request->year : null,
                'img' => $imageUrl, // Guardar la URL de la imagen
                'email_verification_token' => $verificationToken,
            ]);

            Mail::send('emails.verify', ['token' => $verificationToken, 'user' => $user], function ($message) use ($user) {
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
	    //dd($request->all());
	    //return response()->json(['error'=>'que pollas']);
        // Obtener el usuario autenticado
        $user = auth()->user();
	    //return response()->json(['error' => $user]);
	    if (!$user) {
            return response()->json(['error' => 'Usuario no autenticado'], 401); // 401 Unauthorized
        }
        //return response()->json(['error' => $request->name], 401); // 401 Unauthorized
            //dd($request);
        //dd($request->all());
        //dd($request->input());  // Para obtener todos los datos del cuerpo de la solicitud
        // Validación de los datos recibidos
        $validator = \Validator::make($request->all(), [
            'DNI' => 'nullable|string|max:10|unique:users,DNI,' . $user->id, // Validar solo si el DNI ha cambiado
            'name' => 'required|string|max:255',
            'secondName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id, // Validar solo si el email ha cambiado
            'password' => 'nullable|string|min:8|confirmed', // La contraseña es opcional al editar, pero si se proporciona debe cumplir con las reglas
            'year' => 'nullable|date',
            'img' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
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

            $imageUrl = null;
            if ($request->hasFile('img')) {
                $imageController = new ImageController();
                $imageResponse = $imageController->upload($request);
                // Comprobamos si la subida fue exitosa
                if ($imageResponse->status() == 201) {
                    $imageUrl = $imageResponse->getData()->url;  // Extraemos la URL de la imagen subida
                }
            }
            // Actualizamos los campos proporcionados por el usuario
            $user->name = $request->name;
            $user->secondName = $request->secondName;
            $user->email = $request->email;
            $user->img = $imageUrl;
            
            // Si la contraseña fue proporcionada, la actualizamos
            if ($request->password) {
                $user->password = Hash::make($request->password);
            }
            
            //$user->year = $request->year ? $request->year : null;
            //$user->img = $request->img;

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

    public function editUserImage(Request $request)
    {
	dd($request->files->all());
        $user = auth()->user();
	    
	    if (!$user) {
            return response()->json(['error' => 'Usuario no autenticado'], 401); // 401 Unauthorized
        }
        
        $validator = \Validator::make($request->all(), [
            'img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
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

            $imageUrl = null;
            if ($request->hasFile('img')) {
                $imageController = new ImageController();
                $imageResponse = $imageController->upload($request);
                // Comprobamos si la subida fue exitosa
                if ($imageResponse->status() == 201) {
                    $imageUrl = $imageResponse->getData()->url;  // Extraemos la URL de la imagen subida
                }
            }
            // Actualizamos los campos proporcionados por el usuario
            $user->img = $imageUrl;
            
            
            //$user->year = $request->year ? $request->year : null;
            //$user->img = $request->img;

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

    public function delete(Request $request)
    {
	    //return response()->json(['error'=>'que pollas']);
        // Obtener el usuario autenticado
        $user = auth()->user();
    	//return response()->json(['error' => $user]);
	    if (!$user) {
            return response()->json(['error' => 'Usuario no autenticado'], 401); // 401 Unauthorized
        }

        // Borrar los datos del usuario
        try {
            // Borramos el usuario
            $user->email_verified = 0;
            
            // Guardar los cambios en la base de datos
            $user->save();

            Log::info('Usuario borrado exitosamente', ['user' => $user]);

            return response()->json([
                'message' => 'Usuario borrato exitosamente',
                'user' => $user,
            ], 200); // 200 OK

        } catch (\Exception $e) {
            // En caso de error inesperado (ej. problemas con la base de datos)
            return response()->json([
                'message' => 'Ocurrió un error al borrar el usuario.',
                'error' => $e->getMessage(),
            ], 500); // 500 Internal Server Error
        }
    }

    public function addProtectora(Request $request)
    {
        // Obtener el usuario autenticado
        $user = auth()->user();
        if (!$user) {
            return response()->json(['error' => 'Usuario no autenticado'], 401); // 401 Unauthorized
        }

        // Verificar si el usuario autenticado tiene un idProtektora
        if (is_null($user->idProtektora)) {
            return response()->json(['error' => 'El usuario no tiene asignada una protectora.'], 400); // 400 Bad Request
        }

        $idProtektora = $user->idProtektora;

        // Validación de los datos recibidos
        $validator = \Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:users,email,', 
        ]);

        // Si la validación falla, devolver un 400 Bad Request
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Datos incorrectos o incompletos.',
                'errors' => $validator->errors()
            ], 400); // 400 Bad Request
        }

        $email = $request->input('email');
        $existingUser = \App\Models\User::where('email', $email)->first();

        // Verificar si el usuario existe
        if (!$existingUser) {
            return response()->json([
                'message' => 'El email no existe.',
            ], 409); // 409 Conflict
        }

        // Verificar si el usuario objetivo ya tiene asignada una protectora
        if (!is_null($existingUser->idProtektora)) {
            return response()->json([
                'message' => 'El usuario ya tiene asignada una protectora.',
            ], 400); // 400 Bad Request
        }

        // Asignar el idProtektora del usuario autenticado al usuario encontrado
        try {
            $existingUser->idProtektora = $idProtektora;
            $existingUser->save();

            Log::info('Usuario actualizado exitosamente con protectora', ['user' => $existingUser]);

            return response()->json([
                'message' => 'Protector asignado exitosamente al usuario.',
                'user' => $existingUser,
            ], 200); // 200 OK

        } catch (\Exception $e) {
            // En caso de error inesperado (ej. problemas con la base de datos)
            return response()->json([
                'message' => 'Ocurrió un error al asignar la protectora al usuario.',
                'error' => $e->getMessage(),
            ], 500); // 500 Internal Server Error
        }
    }




}

