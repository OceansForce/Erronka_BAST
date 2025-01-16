<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;

use Illuminate\Support\Str;

class ImageController extends Controller
{
    
	public function upload(Request $request)
    {
        /*$user = auth()->user();
        if (!$user) {
            return response()->json(['message' => 'Usuario no autenticado'], 401);
        }*/

        try {
            // Validar la solicitud
            $request->validate([
                'img' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            $filename = Str::random(40) . '.' . $request->file('img')->getClientOriginalExtension();
            $path = $request->file('img')->move(storage_path('app/public/images'), $filename);
            //dd($path);
            if ($path === false) {
                return response()->json(['error' => 'No se pudo guardar la imagen.'], 500);
            }

            // Obtener el nombre del archivo
            $filename = basename($path);

            return response()->json([
                //'message' => 'Imagen subida correctamente',
                //'filename' => $filename,
                'url' => url('/storage/images/' . $filename),
            ], 201);

        } catch (\Illuminate\Validation\ValidationException $e) {
            // Capturar errores de validación
            return response()->json([
                'message' => 'Error de validación',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            // Capturar otros errores
            return response()->json([
                'message' => 'Ocurrió un error al subir la imagen',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    public function getImage($filename)
    {
        // Verificar si el archivo existe
        $path = storage_path('app/public/images/' . $filename);

        if (!file_exists($path)) {
            return response()->json([
                'message' => 'Imagen no encontrada',
            ], 404);
        }

        // Devolver la imagen
        return response()->file($path);
    }
}
