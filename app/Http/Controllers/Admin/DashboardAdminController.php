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

        // Statistiques utilisateurs inscrits sur le mois
        $statUserLastMonth = DB::table('users')
        ->select(
            DB::raw('COUNT(*) AS nombre_utilisateurs_inscrits_mois'),
            DB::raw('ROUND((COUNT(*) / (SELECT COUNT(*) FROM users)) * 100, 1) AS pourcentage_utilisateurs_inscrits_mois')
            )
            ->where(function ($query) {
                $query->where('roleid', '<>', '1')
                    ->orWhereNull('roleid');
            })
        ->where('created_at', '>=', DB::raw('DATE(CONCAT(YEAR(CURDATE()), "-", MONTH(CURDATE()), "-01"))'))
        ->get();

        // Statistiques utilisateurs inscrits sur la semaine
        $statUserLastWeek = DB::table('users')
        ->select(
            DB::raw('COUNT(*) AS nombre_utilisateurs_inscrits_semaine'),
            DB::raw('ROUND((COUNT(*) / (SELECT COUNT(*) FROM users)) * 100, 1) AS pourcentage_utilisateurs_inscrits_semaine')
            )
            ->where(function ($query) {
                $query->where('roleid', '<>', '1')
                    ->orWhereNull('roleid');
            })
        ->where('created_at', '>=', DB::raw('DATE_SUB(CURDATE(), INTERVAL DAYOFWEEK(CURDATE())-1 DAY)'))
        ->get();  

        // Statistiques réservation effectuée sur le mois
        $statReservationLastMonth = DB::table('reservation')
                ->select(
                DB::raw('count(*) as nombre_reservation_mois'),
                DB::raw('ROUND((COUNT(*) / (SELECT COUNT(*) FROM reservation)) * 100, 1) AS pourcentage_reservation_mois')
                )
                ->where('cree_le', '>=', DB::raw('DATE(CONCAT(YEAR(CURDATE()), "-", MONTH(CURDATE()), "-01"))'))
                ->get();

        // Statistiques réservation effectuée sur la semaine
        $statReservationLastWeek = DB::table('reservation')
                ->select(
                DB::raw('count(*) as nombre_reservation_semaine'),
                DB::raw('ROUND((COUNT(*) / (SELECT COUNT(*) FROM reservation)) * 100, 1) AS pourcentage_reservation_semaine')
                )
                ->where('cree_le', '>=', DB::raw('DATE_SUB(CURDATE(), INTERVAL DAYOFWEEK(CURDATE())-1 DAY)'))
                ->get();

        // Liste des utilisateurs inscrits sur le mois
        $statListUserLast = DB::table('users')
                ->select('*')
                ->where('created_at', '>=', DB::raw('DATE_SUB(CURDATE(), INTERVAL 1 MONTH)')
                )
                ->where(function ($query) {
                    $query->where('roleid', '<>', '1')
                        ->orWhereNull('roleid');
                })
                ->orderBy('created_at', 'DESC')
                ->get();

        // Liste des réservations effectuées sur le mois
        $statListReservationLast = DB::table('reservation')
            ->select('*')
            ->join('users', 'iduser', '=', 'reservation.id_user')
            ->join('place', 'idplace', '=', 'reservation.id_place')
            ->where('cree_le', '>=', DB::raw('DATE_SUB(CURDATE(), INTERVAL 1 MONTH)')
            )
            ->orderBy('cree_le', 'DESC') // Ajout de la colonne 'id' pour le tri
            ->get();

        // Liste des places créées sur le mois
        $statPlaceLast = DB::table('place')
            ->select('*')
            ->where('created_at', '>=', DB::raw('DATE_SUB(CURDATE(), INTERVAL 1 MONTH)')
            )
            ->limit(5)
            ->get();  

        return Inertia::render('Admin/DashboardA', [
            'statUserLastMonth' => $statUserLastMonth,
            'statUserLastWeek' => $statUserLastWeek,
            'statReservationLastMonth' => $statReservationLastMonth,
            'statReservationLastWeek' => $statReservationLastWeek,
            'statListUserLast' => $statListUserLast,
            'statListReservationLast' => $statListReservationLast,
            'statPlaceLast' => $statPlaceLast,
        ]);
    }
}
