<?php


// añadir al .env
// despues crear las columas en la base de datos, la del token (string) y el bolean que esta verificado
// MAIL_MAILER=smtp
// MAIL_HOST=smtp.gmail.com
// MAIL_PORT=587
// MAIL_USERNAME=bastanimalsenterpise@gmail.com
// MAIL_PASSWORD=qbhh ohlw ghfi sjfl
// MAIL_ENCRYPTION=tls
// MAIL_FROM_ADDRESS=bastanimalsenterpise@gmail.com
// MAIL_FROM_NAME="${APP_NAME}"





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
Route::put('user-data-edit', [UserCreateController::class, 'edit'])->middleware('auth:sanctum');  // Ruta para editar un usuario
Route::delete('user-delete', [UserCreateController::class, 'delete'])->middleware('auth:sanctum');  // Ruta para editar un usuario

// ERABILTZAILE bateri ezarri protektora bat
Route::put('user-add-protectora', [UserCreateController::class, 'addProtectora'])->middleware('auth:sanctum');  // Ruta para asignar una protectora a un usuario
// SAIOA HASI
use App\Http\Controllers\AuthController;
Route::post('login', [AuthController::class, 'login']);


// NEWS API
// routes/api.php
use App\Http\Controllers\NewsController;

Route::middleware('auth:sanctum')->group(function () {
    Route::post('news', [NewsController::class, 'store'])->middleware('\App\Http\Middleware\CheckCreateNewsPermissions');
    Route::put('news/{news}', [NewsController::class, 'update'])->middleware('\App\Http\Middleware\CheckUpdateNewsPermissions');
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

Route::get('/animals-personal', [AnimalController::class, 'getPersonalAnimals'])->middleware('auth:sanctum');




Route::get('/verify-email/{token}', [UserCreateController::class, 'verifyEmail']);

// Ruta protegida, requiere autenticación
//Route::middleware('auth:sanctum')->get('/user', [UserController::class, 'getUser']);
