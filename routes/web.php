<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// http://localhost:8000
Route::get('/', function () {
    return Inertia::render("home");
});

// http://localhost:8000/about
Route::get('/about', function () {
    return Inertia::render("about");
});

// http://localhost:8000/posts/index
Route::get('/posts', [PostController::class, 'index']);

// http://localhost:8000/posts/1
Route::get('/posts/{id}', [PostController::class, 'show']);