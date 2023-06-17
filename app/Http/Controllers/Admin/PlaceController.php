<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Place;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class PlaceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $placeCounts = Place::select('numetage', DB::raw('count(*) as place_count'), DB::raw('GROUP_CONCAT(idplace) as place_ids'))
            ->groupBy('numetage')
            ->get();
        
        return Inertia::render('Admin/Places/PlaceIndex', [
            //'places' => $place,
            'placeCounts' => $placeCounts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $places = Place::all();
        
        return Inertia::render('Admin/Places/PlaceCreate', [
            'places' => $places,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nbplace' => 'required|numeric|min:1|max:100',
            'numetage' => 'required|numeric|min:1|max:10|unique:place,numetage',
        ]);
        
        for ($i=1; $i<=$request->input('nbplace'); $i++) {
            $place = new Place;
            $place->numplace = $i;
            $place->numetage = $request->input('numetage');
            $place->created_at = now();
            $place->save();
        }

        return redirect()->route('etageadmin.index')->with('message', 'Places créées avec succès.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Place  $place
     * @return \Illuminate\Http\Response
     */
    public function show(Place $place)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Place  $place
     * @return \Illuminate\Http\Response
     */

    public function edit($numetage)
{
    $placeIds = Place::where('numetage', $numetage)->pluck('idplace');
    $reservations = Reservation::whereIn('id_place', $placeIds)->get();
    $placeReservedIds = Reservation::whereIn('id_place', $placeIds)->pluck('id_place');
    
    return Inertia::render('Admin/Places/EtageEdit', [
        'numetage' => $numetage,
        'placeIds' => $placeIds,
        'placeCount' => $placeIds->count(),
        'placeReservedIds' => $placeReservedIds,
        'reservations' => $reservations,
        //'places' => $place,
    ]);
}

    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Place  $place
     * @return \Illuminate\Http\Response
     */
    public function update($numetage, Request $request){
        $request->validate([
            'nbplace' => 'required|numeric|min:0|max:100',
            'placesToRemove' => 'array',
            'placesToAdd' => 'numeric',
        ]);

        Log::info('Received request:', $request->all());


    
        $placesToRemove = $request->get('placesToRemove');
        if (!empty($placesToRemove)) {
            foreach($placesToRemove as $placeId) {  
                $place = Place::find($placeId);
                if ($place) {
                    Place::destroy($placesToRemove);
                }
            }
        }
    
        $placesToAdd = $request->get('placesToAdd');
        //Log::info('Received placesToAdd:', $placesToAdd);
        if ($placesToAdd > 0) {
            $numetage = $request->get('numetage');
            Log::info('num etage', ['numetage' => $numetage]);
            $currentPlaceCount = Place::where('numetage', $numetage)->count();
            Log::info('Current place count:', ['count' => $currentPlaceCount]);
            for ($i = $currentPlaceCount + 1; $i <= $currentPlaceCount + $placesToAdd; $i++) {
                $place = new Place;
                $place->numplace = $i;
                $place->numetage = $request->input('numetage');
                $place->created_at = now();
                $place->save();
            }   
        }
    
        return redirect()->route('etageadmin.index')->with('message', 'Etage modifié avec succès !');    
    }
    
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Place  $place
     * @return \Illuminate\Http\Response
     */
    // public function destroy($id){

    //     Place::find($id)->delete();        
    //     return redirect()->route('etageadmin.index');
    // }


}


