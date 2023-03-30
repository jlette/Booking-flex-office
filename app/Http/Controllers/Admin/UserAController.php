<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class UserAController extends Controller
{
    public function index(){
        $users = User::all();

        return Inertia::render('Admin/AllUserA',[
            'users' => $users,
        ]);
    }

    
    public function create(){
        
        return Inertia::render('Admin/CreateUser');
    }
    

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'fonction' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
        ]);

        User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'fonction' => $request->fonction
        ]);

        return redirect()->route('admin.user')->with('message', 'L\'utilisateur a été enregistré avec succès.');


    }
}
