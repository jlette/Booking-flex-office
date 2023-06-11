<?php

namespace App\Console\Commands;
use App\Models\Reservation;
use Illuminate\Console\Command;
use Carbon\Carbon;

class DeleteExpiredReservations extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reservations:delete-expired';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete expired reservations from the database';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {   
        $expiredReservations = Reservation::where('date', '<', Carbon::today())->get();

        foreach ($expiredReservations as $reservation) {
            $reservation->delete();
        }

        return Command::SUCCESS;
    }
}