<?php

use App\Http\Controllers\TranslationController;

Route::post('/translations/keys', [TranslationController::class, 'getTranslationsByKeys']);
