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
Route::get('user-data', [UserController::class, 'getUser'])->middleware('\App\Http\Middleware\BasicUserAuth');  // Ruta para crear un usuario

// ERABILTZAILEAREN DATUAK LORTU + BERE ANIMALIAK
Route::put('user-data-edit', [UserCreateController::class, 'edit'])->middleware('\App\Http\Middleware\BasicUserAuth');  // Ruta para crear un usuario

// ERABILTZAILE bateri ezarri protektora bat
Route::put('user-add-protectora', [UserCreateController::class, 'addProtectora'])->middleware('\App\Http\Middleware\AnimalMiddleware');  // Ruta para crear un usuario

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


// OBTENER LOS ANIMALES PARA ADOPTAR
use App\Http\Controllers\AnimalController;
Route::get('/animals-adopt', [AnimalController::class, 'getAnimals']);
Route::get('/animals-adopt-create', [AnimalController::class, 'createAnimal'])->middleware('\App\Http\Middleware\AnimalMiddleware');
Route::post('/animals-edit', [AnimalController::class, 'editAnimal'])->middleware('\App\Http\Middleware\BasicUserAuth');



Route::get('/verify-email/{token}', [UserCreateController::class, 'verifyEmail']);

// Ruta protegida, requiere autenticación
//Route::middleware('auth:sanctum')->get('/user', [UserController::class, 'getUser']);
