<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Place;
use App\Models\Reservation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ReservationPlaceController extends Controller
{
    
    public function mesreservations(){

        $reservations = Reservation::where('id_user', Auth::id())->get();
        $places = Place::all();

        return Inertia::render('MesReservations', [
            'reservations' => $reservations,
            'places' => $places,
        ]);
    }

    public function selectplace(){
        $places = DB::table('place')
                ->select('*') 
                ->get();  
            
        $reservations = DB::table('reservation')
                ->select('*')
                ->join('place', 'place.idplace', '=', 'reservation.id_place')
                ->get();

        $searchUser = DB::table('users')
                ->select('*')
                ->where('iduser', '<>', Auth::id())
                ->where(function ($query) {
                    $query->where('roleid', '<>', '1')
                        ->orWhereNull('roleid');
                })
                ->get();


        return Inertia::render('Reservation', [
            'places' => $places,
            'reservations' => $reservations,
            'searchUser' => $searchUser,

        ]);
    }

    public function reserverplace(Request $request){

        $request->validate([
            'date' => 'required|date',
            'matin' => 'required|boolean',
            'apresmidi' => 'required|boolean',
            'id_place' => 'required|numeric',
        ]);

        // $existingReservation = Reservation::where('id_place', $request->input('id_place'))
        //                                 ->where('date', $request->input('date'))
        //                                 ->first();
        // if ($existingReservation) {
        //     return redirect()->back()->with('error', 'Cette place est déjà réservée pour cette date.');
        // }

        $reservation = new Reservation;
        $reservation->id_user = Auth::id();
        $reservation->date = $request->input('date');
        $reservation->matin = $request->input('matin') ? true : false; // Vérifier si la case "matin" est cochée
        $reservation->apresmidi = $request->input('apresmidi') ? true : false; // Vérifier si la case "apresMidi" est cochée
        $reservation->id_place = $request->input('id_place');
        $reservation->save();
    
        return redirect()->route('mesreservations');
    }

    public function showReservationCollegue($id){
        $resultatSearch = DB::table('reservation')
                ->select('*')
                ->join('users', 'users.iduser', '=', 'reservation.id_user')
                ->join('place', 'place.idplace', '=', 'reservation.id_place')
                ->where('id_user', '=', $id)
                ->get();

        return Inertia::render('ReservationCollegue', [
            'resultatSearch' => $resultatSearch,
        ]);
    }

}
