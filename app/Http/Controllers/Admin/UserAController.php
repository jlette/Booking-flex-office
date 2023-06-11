<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Validator;

class UserAController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
       
        $users = DB::table('users')
                ->select('*')
                ->where(function ($query) {
                    $query->where('roleid', '<>', '1')
                        ->orWhereNull('roleid');
                })
                ->get();

        return Inertia::render('Admin/Users/UserIndex',[
            'users' => $users,
        ]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Users/UserCreate');
    }

    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'fonction' => 'required|string|max:255',
            'email' => ['required', 'string', 'email', 'max:255', function ($attribute, $value, $fail) {
                $domain = explode('@', $value)[1];
                if ($domain != 'rte-france.com') {
                    $fail('L\'adresse mail que vous avez saisie n\'est pas autorisée à s\'enregistrer.');
                }
            }],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],

        ]);

        User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'fonction' => $request->fonction,
            'password' => Hash::make($request->password),

        ]);

        return redirect()->route('useradmin.index')->with('message', 'L\'utilisateur a été enregistré avec succès.');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        // $reservation = $user->reservations()->get();

        $reservation = DB::table('reservation')
            ->select('*')
            ->join('users', 'users.iduser', '=', 'reservation.id_user')
            ->join('place', 'place.idplace', '=', 'reservation.id_place')
            ->where('reservation.id_user', '=', $id)
            ->get();



        return Inertia::render('Admin/Users/UserShow', [
            'users' => $user,
            'reservations' => $reservation,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::findOrFail($id);

        return Inertia::render('Admin/Users/UserEdit', [
            'users' => $user,
        ]);

        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'name' => ['required'],
            'username' => ['required'],
        ])->validate();
    
        User::find($id)->update($request->all());

        return redirect()->route('useradmin.index')->with('message', 'L\'utilisateur a bien été modifié.');    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function destroy($id)
    // {
    //     User::find($id)->delete();        
    //     return redirect()->route('useradmin.index');
    // }
}
