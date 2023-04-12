<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reservation', function (Blueprint $table) {
            $table->foreign(['id_place'], 'reservation_place_fk')->references(['idplace'])->on('place');
            $table->foreign(['id_user'], 'reservation_user_fk')->references(['iduser'])->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('reservation', function (Blueprint $table) {
            $table->dropForeign('reservation_place_fk');
            $table->dropForeign('reservation_user_fk');
        });
    }
};
