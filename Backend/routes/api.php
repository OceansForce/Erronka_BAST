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
    Route::post('news', [NewsController::class, 'store'])->middleware('NewsCreate');
    Route::put('news/{news}', [NewsController::class, 'update']);
    Route::delete('news/{news}', [NewsController::class, 'destroy'])->middleware('checkProtektora');
});


// OBTENER LAS NOTICIAS
use App\Http\Controllers\ObtainNewsController;
Route::get('/latest-news', [ObtainNewsController::class, 'getLatestNews']);


// Ruta protegida, requiere autenticación
//Route::middleware('auth:sanctum')->get('/user', [UserController::class, 'getUser']);
