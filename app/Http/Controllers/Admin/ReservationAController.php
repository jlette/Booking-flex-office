<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Place;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ReservationAController extends Controller
{
    public function index(){

        $reservation = DB::table('reservation')
            ->select('*')
            ->join('users', 'users.iduser', '=', 'reservation.id_user')
            ->join('place', 'place.idplace', '=', 'reservation.id_place')
            ->get();
        
        return Inertia::render('Admin/Reservations/ReservationIndex', [
            'reservations' => $reservation,
        ]);
    
    }
    
}
