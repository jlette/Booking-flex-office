<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Place;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ReservationPlaceController extends Controller
{
    
    public function mareservation(){

        $reservations = Reservation::where('id_user', Auth::id())->get();

        return Inertia::render('MesReservations', [
            'reservations' => $reservations
        ]);
    }


    public function reserverplace(Request $request){

        $userId = Auth::id();
        $date = $request->input('date');
        $matin = $request->input('matin') ? 'matin' : '';
        $apresMidi = $request->input('apresMidi') ? 'après-midi' : '';
        $idplace = $request->input('idplace');

        $validatedData = $request->validate([
            'date' => 'required',
            'idplace' => 'required',
          ]);
        
        DB::table('reservations')->insert([
            'date' => $date,
            'matin' => $matin,
            'apresMidi' => $apresMidi,
            'id_user' => $userId,
            'id_place' => $idplace,
        ]);

        return redirect()->route('mareservation');
        
    }

    public function selectplace(){
        $places = DB::table('place')
                ->select('*') 
                ->get();  

        return Inertia::render('Reservation', [
            'places' => $places,
        ]);
    }

}
