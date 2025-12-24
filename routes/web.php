<?php

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