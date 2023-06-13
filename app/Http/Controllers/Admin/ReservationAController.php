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
    // afficher les reservations
    public function index(){

        $reservationsUser = DB::table('reservation')
            ->select('*')
            ->join('users', 'users.iduser', '=', 'reservation.id_user')
            ->join('place', 'place.idplace', '=', 'reservation.id_place')
            ->get();
        
        return Inertia::render('Admin/Reservations/ReservationIndex', [
            'reservationsUser' => $reservationsUser,
        ]);
    
    }

    // supprimer reservation
    public function destroy($id){

        $reservation = Reservation::findOrFail($id);
        $reservation->delete();

        return redirect()->route('reservationadmin.index')->with('message', 'La réservation a bien été supprimée');    
    }
    
}
