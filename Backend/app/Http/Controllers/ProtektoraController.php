<?php

namespace App\Http\Controllers;

use App\Models\Protektora;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;


class ProtektoraController extends Controller
{
    public function getAllProtektoras(Request $request)
    {
        // Obtener los parámetros de la solicitud
        $limit = $request->input('limit', 10); // Valor por defecto de 10
        $offset = $request->input('offset', 0); // Valor por defecto de 0
        
        // Validación de los parámetros
        $request->validate([
            'limit' => 'integer|min:1|max:25', // Limitar el valor de limit a entre 1 y 25
            'offset' => 'integer|min:0',
        ]);

        // Query para obtener todas las protecotras
        $query = Protektora::all();

        

        // Aplicar paginación y obtener los resultados
        // Query para obtener todas las protecotras con paginación utilizando offset y limit manualmente
        $protektorak = Protektora::orderBy('id', 'asc')
            ->select(['name', 'provintzia', 'hiria', 'telefono', 'email', 'logo']) // Selecciona solo los campos necesarios
            ->skip($offset)  // Aplica el offset
            ->take($limit)   // Aplica el limit
            ->get();
            
        // Verificar si no se encontraron resultados
        if ($protektorak->isEmpty()) {
            return response()->json(['message' => 'No protectora found for the given criteria'], 404);
        }

        // Retornar la respuesta como JSON
        return response()->json($protektorak);
    }


    public function getProtektora(Request $request, $id)
    {
        // Buscar el registro de la protectora por el id usando where
        $protektora = Protektora::where('id', $id)
            ->first(['name', 'provintzia', 'hiria', 'telefono', 'email', 'logo']);

        // Verificar si no se encontró el registro
        if (!$protektora) {
            return response()->json(['message' => 'Protectora not found or does not meet the specified criteria'], 404);
        }

        // Retornar los datos de la protectora
        return response()->json($protektora);
    }


    public function createProtektora(Request $request)
    {
        $user = auth()->user();

        // Si no hay usuario autenticado, devolver un error
        if (!$user) {
            return response()->json(['error' => 'usuario no autenticado'], 401); // 401 Unauthorized
        }

        if($user->id != 1){
            return response()->json(['error' => 'usuario no tiene protectora'], 401); // 401 Unauthorized
        }
        // Validación de los datos recibidos
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'provintzia' => 'required|string|max:255',
            'hiria' => 'required|string|max:255',
            'telefono' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imageUrl = null;
        if ($request->hasFile('logo')) {
            $imageController = new ImageController();
            $imageResponse = $imageController->upload($request);
            // Comprobamos si la subida fue exitosa
            if ($imageResponse->status() == 201) {
                  $imageUrl = $imageResponse->getData()->url;  // Extraemos la URL de la imagen subida
            }
        }

        try {
            // Crear una nueva protectora
            $protektora = Protektora::create([
                'name' => $validated['name'],
                'provintzia' => $validated['provintzia'],
                'hiria' => $validated['hiria'],
                'telefono' => $validated['telefono'],
                'email' => $validated['email'],
                'logo' => $imageUrl, // Si no se proporciona logo, se setea como null
            ]);

            // Retornar la protectora creada con un mensaje de éxito
            return response()->json([
                'message' => 'Protectora created successfully',
                'data' => $protektora,
            ], 201); // Código HTTP 201 - Created
        } catch (\Exception $e) {
            // Si hay algún error en la creación, retornamos un error
            return response()->json([
                'message' => 'Error creating protectora',
                'error' => $e->getMessage(),
            ], 500); // Código HTTP 500 - Internal Server Error
        }
    }

    public function editProtektora(Request $request)
    {
        $user = auth()->user();

        // Si no hay usuario autenticado, devolver un error
        if (!$user) {
            return response()->json(['error' => 'usuario no autenticado'], 401); // 401 Unauthorized
        }

        // Validación de los datos recibidos
        $validated = $request->validate([
            'id' => 'required|exists:protektoras,id', // Verificar que la protectora exista
            'name' => 'required|string|max:255',
            'provintzia' => 'required|string|max:255',
            'hiria' => 'required|string|max:255',
            'telefono' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // El logo es opcional en la actualización
        ]);

        if($user->id != $validated['id'] || $user->id !=1){
            return response()->json(['error' => 'usuario no tiene protectora'], 401); // 401 Unauthorized
        }

        // Buscar la protectora por el id
        $protektora = Protektora::find($validated['id']);

        if (!$protektora) {
            // Si no se encuentra la protectora, devolver error 404
            return response()->json([
                'message' => 'Protectora not found',
            ], 404);
        }

        $imageUrl = $protektora->logo; // Por defecto, mantener el logo actual

        // Verificar si se ha subido un nuevo logo
        if ($request->hasFile('logo')) {
            $imageController = new ImageController();
            $imageResponse = $imageController->upload($request);

            // Comprobar si la subida fue exitosa
            if ($imageResponse->status() == 201) {
                $imageUrl = $imageResponse->getData()->url; // Extraer la nueva URL del logo
            }
        }

        try {
            // Actualizar los datos de la protectora
            $protektora->update([
                'name' => $validated['name'],
                'provintzia' => $validated['provintzia'],
                'hiria' => $validated['hiria'],
                'telefono' => $validated['telefono'],
                'email' => $validated['email'],
                'logo' => $imageUrl, // Actualizar logo si hay uno nuevo
            ]);

            // Retornar los datos actualizados de la protectora
            return response()->json([
                'message' => 'Protectora updated successfully',
                'data' => $protektora,
            ], 200); // Código HTTP 200 - OK
        } catch (\Exception $e) {
            // Si hay algún error en la actualización, devolver error
            return response()->json([
                'message' => 'Error updating protectora',
                'error' => $e->getMessage(),
            ], 500); // Código HTTP 500 - Internal Server Error
        }
    }



    

}
