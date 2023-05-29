<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class DashboardAdminController extends Controller
{
    public function index(){

        $statUserLastMonth = DB::table('users')
        ->select(
            DB::raw('COUNT(*) AS nombre_utilisateurs_inscrits_mois'),
            DB::raw('ROUND((COUNT(*) / (SELECT COUNT(*) FROM users)) * 100, 1) AS pourcentage_utilisateurs_inscrits_mois')
            )
        ->where('created_at', '>=', DB::raw('DATE_SUB(CURDATE(), INTERVAL 1 MONTH)'))
        ->get();

        $statUserLastWeek = DB::table('users')
        ->select(
            DB::raw('COUNT(*) AS nombre_utilisateurs_inscrits_semaine'),
            DB::raw('ROUND((COUNT(*) / (SELECT COUNT(*) FROM users)) * 100, 1) AS pourcentage_utilisateurs_inscrits_semaine')
            )
        ->where('created_at', '>=', DB::raw('DATE_SUB(CURDATE(), INTERVAL 1 WEEK)'))
        ->get();
        
        $statPlace = DB::table('place')
                ->select(DB::raw('count(*) as place_count'))
                ->get();    

        $statReservationLastMonth = DB::table('reservation')
                ->select(
                DB::raw('count(*) as nombre_reservation_mois'),
                DB::raw('ROUND((COUNT(*) / (SELECT COUNT(*) FROM reservation)) * 100, 1) AS pourcentage_reservation_mois')
                )
                ->where('date', '>=', DB::raw('DATE_SUB(CURDATE(), INTERVAL 1 MONTH)'))
                ->get();

        $statReservationLastWeek = DB::table('reservation')
                ->select(
                DB::raw('count(*) as nombre_reservation_semaine'),
                DB::raw('ROUND((COUNT(*) / (SELECT COUNT(*) FROM reservation)) * 100, 1) AS pourcentage_reservation_semaine')
                )
                ->where('date', '>=', DB::raw('DATE_SUB(CURDATE(), INTERVAL 1 WEEK)'))
                ->get();


        return Inertia::render('Admin/DashboardA', [
            'statUserLastMonth' => $statUserLastMonth,
            'statUserLastWeek' => $statUserLastWeek,
            'statReservationLastMonth' => $statReservationLastMonth,
            'statReservationLastWeek' => $statReservationLastWeek,
            'statPlace' => $statPlace,
        ]);
    }
}
