<?php

namespace App\Http\Controllers\Admin;

use App\Models\Place;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
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
        $place = Place::all();

        return Inertia::render('Admin/Places/PlaceIndex', [
            'places' => $place,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Places/PlaceCreate');
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
            'numplace' => 'required|numeric|min:1|max:100|unique:'.Place::class,
            'numetage' => 'required|numeric|min:1|max:10',

        ]);
        
            $place = new Place;
            $place->numplace = $request->input('numplace');
            $place->numetage = $request->input('numetage');
            $place->save();


        return redirect()->route('placeadmin.index');
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
    public function edit($id)
    {
        $place = Place::findOrFail($id);

        return Inertia::render('Admin/Places/PlaceEdit', [
            'places' => $place,
        ]);
    }
    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Place  $place
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'numplace' => 'required',
            'numetage' => 'nullable',
        ])->validate();
        
    
        Place::find($id)->update($request->all());

        return to_route('placeadmin.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Place  $place
     * @return \Illuminate\Http\Response
     */
      public function destroy($id){

        Place::find($id)->delete();        
        return redirect()->route('placeadmin.index');
    }
}


