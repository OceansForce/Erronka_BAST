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






//Ruta protegida, requiere autenticación
//Route::middleware('auth:sanctum')->get('/user', [UserController::class, 'getUser']);
