<?php

use App\Http\Controllers\Admin\DashboardAdminController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\TestController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\PlaceController;
use App\Http\Controllers\Admin\UserAController;
use App\Http\Controllers\ReservationPlaceController;
use App\Http\Controllers\Admin\ProfileAdminController;
use App\Http\Controllers\Admin\ReservationAController;

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
})->middleware(['auth', 'verified', 'restrictAdminAccess'])->name('dashboard');


Route::middleware(['auth', 'verified', 'restrictAdminAccess'])->group(function () {
    Route::get('/mesreservations', [ReservationPlaceController::class, 'mesreservations'])
        ->name('mesreservations');

    Route::get('/reservation', [ReservationPlaceController::class, 'selectplace'])
        ->name('reservation');

    Route::post('/reservationplace', [ReservationPlaceController::class, 'reserverplace'])
        ->name('reserverplace');

    Route::get('/reservationcollegue/{id}', [ReservationPlaceController::class, 'showReservationCollegue'])
        ->name('reservationClient');
});


Route::middleware(['auth', 'roles:admin'])->group(function () {
    Route::get('/admin', [DashboardAdminController::class, 'index'])
        ->name('admin.dashboard');

    // Gerer la partie user
    Route::resource('/useradmin', UserAController::class);
    
    // Gerer les reservations
    Route::resource('/reservationadmin', ReservationAController::class);

    // Gerer les places
    Route::resource('/placeadmin', PlaceController::class);

    // Gerer les rôles
    Route::resource('/roles', RoleController::class);
    
    // Profile Admin
    Route::get('/profile/admin', [ProfileAdminController::class, 'edit'])
        ->name('adminprofile.edit');
    Route::patch('/profile/admin', [ProfileAdminController::class, 'update'])
        ->name('adminprofile.update');
    Route::delete('/profile/admin', [ProfileAdminController::class, 'destroy'])
        ->name('adminprofile.destroy');
});


Route::middleware(['auth', 'restrictAdminAccess'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
