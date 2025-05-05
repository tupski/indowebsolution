<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/services', [PageController::class, 'services'])->name('services');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::post('/contact', [PageController::class, 'submitContact'])->name('contact.submit');

// Admin Routes
Route::prefix('admin')->middleware(['auth'])->group(function () {
    Route::get('/', [App\Http\Controllers\AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('/blogs', [App\Http\Controllers\AdminController::class, 'blogs'])->name('admin.blogs');
    Route::get('/services', [App\Http\Controllers\AdminController::class, 'services'])->name('admin.services');
    Route::get('/team-members', [App\Http\Controllers\AdminController::class, 'teamMembers'])->name('admin.team-members');
    Route::get('/contacts', [App\Http\Controllers\AdminController::class, 'contacts'])->name('admin.contacts');
    Route::get('/settings', [App\Http\Controllers\AdminController::class, 'settings'])->name('admin.settings');
});
