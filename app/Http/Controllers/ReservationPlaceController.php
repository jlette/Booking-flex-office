<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Place;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReservationPlaceController extends Controller
{
    public function selectplace(){
        $places = DB::table('place')
                ->select('*') 
                ->get();  
                
        //dd($places);

        // return view('debug', compact('places'));
        return Inertia::render('Reservation', [
            'places' => $places,
        ]);
    }
}
