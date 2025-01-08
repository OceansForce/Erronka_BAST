<?php

// Lortu tradukzioak
use App\Http\Controllers\TranslationController;

Route::post('/translations/keys', [TranslationController::class, 'getTranslationsByKeys']);


// ERABILTZAILEAK SORTU
use App\Http\Controllers\UserCreateController;
Route::post('register', [UserCreateController::class, 'store']);  // Ruta para crear un usuario


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
Route::get('/animals-adopt-create', [AnimalController::class, 'createAnimal'])->middleware('\App\Http\Middleware\CheckCreateNewsPermissions');



// Ruta protegida, requiere autenticación
//Route::middleware('auth:sanctum')->get('/user', [UserController::class, 'getUser']);
