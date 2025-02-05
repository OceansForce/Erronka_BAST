<?php








// Lortu tradukzioak
use App\Http\Controllers\TranslationController;

Route::post('/translations/keys', [TranslationController::class, 'getTranslationsByKeys']);


// ERABILTZAILEAK SORTU
use App\Http\Controllers\UserCreateController;
Route::post('register', [UserCreateController::class, 'store']);  // Ruta para crear un usuario

// ERABILTZAILEAREN DATUAK LORTU + BERE ANIMALIAK
use App\Http\Controllers\UserController;
Route::get('user-data', [UserController::class, 'getUserDate'])
//    ->middleware('\App\Http\Middleware\CorsMiddleware')  // Primero CORS
    ->middleware('auth:sanctum');  // Luego autenticación
    //->middleware('\App\Http\Middleware\BasicUserAuth');  // Luego autenticación


// ERABILTZAILEAREN DATUAK LORTU + BERE ANIMALIAK
Route::post('user-data-edit', [UserCreateController::class, 'edit'])->middleware('auth:sanctum');  // Ruta para editar un usuario
Route::delete('user-delete', [UserCreateController::class, 'delete'])->middleware('auth:sanctum');  // Ruta para editar un usuario


// ERABILTZAILE bateri ezarri protektora bat
Route::put('user-add-protectora', [UserCreateController::class, 'addProtectora'])->middleware('auth:sanctum');  // Ruta para asignar una protectora a un usuario
// SAIOA HASI
use App\Http\Controllers\AuthController;
Route::post('login', [AuthController::class, 'login']);


Route::get('/get-all-user', [UserController::class, 'getAllUserDate'])->middleware('auth:sanctum');

// NEWS API
// routes/api.php
use App\Http\Controllers\NewsController;

Route::middleware('auth:sanctum')->group(function () {
    Route::post('news', [NewsController::class, 'store'])->middleware('\App\Http\Middleware\CheckCreateNewsPermissions');
    Route::post('news/{news}', [NewsController::class, 'update'])->middleware('\App\Http\Middleware\CheckUpdateNewsPermissions');
    Route::delete('news/{news}', [NewsController::class, 'destroy'])->middleware('\App\Http\Middleware\CheckUpdateNewsPermissions');
});


// OBTENER LAS NOTICIAS
use App\Http\Controllers\ObtainNewsController;
Route::get('/latest-news', [ObtainNewsController::class, 'getLatestNews']);
Route::get('/new-obtein/{news}', [ObtainNewsController::class, 'getNew']);


// OBTENER LOS ANIMALES PARA ADOPTAR
use App\Http\Controllers\AnimalController;
Route::get('/animals-adopt', [AnimalController::class, 'getAnimals']);
Route::post('/animals-create', [AnimalController::class, 'createAnimal'])->middleware('auth:sanctum');
Route::post('/animals-edit', [AnimalController::class, 'editAnimal'])->middleware('auth:sanctum');
Route::get('/animal-adopt/{id}', [AnimalController::class, 'getAnimal']);


// Animali galduen atala
use App\Http\Controllers\LostedController;
Route::get('/animals-losted', [LostedController::class, 'getAnimals']);
Route::get('/animal-losted/{id}', [LostedController::class, 'getAnimal']);
Route::post('/set-losted', [LostedController::class, 'setLosted'])->middleware('auth:sanctum');
Route::post('/set-not-losted', [LostedController::class, 'setNotLosted'])->middleware('auth:sanctum');
Route::get('/losted-place', [LostedController::class, 'getLekuak']);




Route::get('/animals-personal', [AnimalController::class, 'getPersonalAnimals'])->middleware('auth:sanctum');


// Protectoras
use App\Http\Controllers\ProtektoraController;
Route::get('/protectora-list', [ProtektoraController::class, 'getAllProtektoras']);
Route::get('/protectora-list/{id}', [ProtektoraController::class, 'getProtektora']);
Route::get('/protectora-create', [ProtektoraController::class, 'createProtektora'])->middleware('auth:sanctum');;
Route::get('/protectora-edit', [ProtektoraController::class, 'editProtektora'])->middleware('auth:sanctum');;




// UP images
/*use App\Http\Controllers\ImageController;
Route::post('/upload-image', [ImageController::class, 'upload'])->middleware('auth:sanctum');
Route::get('/images/{filename}', [ImageController::class, 'getImage']);*/

Route::get('/verify-email/{token}', [UserCreateController::class, 'verifyEmail']);

// Ruta protegida, requiere autenticación
//Route::middleware('auth:sanctum')->get('/user', [UserController::class, 'getUser']);
