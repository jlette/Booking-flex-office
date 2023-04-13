<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\UserAController;
use App\Http\Controllers\Admin\ProfileAdminController;
use App\Http\Controllers\Admin\ReservationAController;
use App\Http\Controllers\ReservationPlaceController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/reservation', [ReservationPlaceController::class, 'selectplace'])
        ->name('reservation');
});


Route::middleware(['auth', 'roles:admin'])->group(function () {
    Route::get('/admin', function() {
        return Inertia::render('Admin/DashboardA');
    })->name('admin.dashboard');

    // Gerer la partie user
    Route::resource('/useradmin', UserAController::class);
    
    // Gerer les reservations
    Route::resource('/reservationadmin', ReservationAController::class);


    // Profile Admin
    Route::get('/profile/admin', [ProfileAdminController::class, 'edit'])
        ->name('admin.profile.edit');
    Route::patch('/profile/admin', [ProfileAdminController::class, 'update'])
        ->name('admin.profile.update');
    Route::delete('/profile/admin', [ProfileAdminController::class, 'destroy'])
        ->name('admin.profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
