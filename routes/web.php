<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MenfessController;
use App\Models\Menfess;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/auth/google/redirect', [AuthController::class, 'redirectToGoogle']);
Route::get('/auth-google-callback', [AuthController::class, 'handleGoogleCallback']);

Route::get('/', function () {
    $data = Menfess::get();
    return Inertia::render('Home', ['data' => $data]);
});

Route::post('/menfesses', [MenfessController::class, 'create'])->middleware('auth');
