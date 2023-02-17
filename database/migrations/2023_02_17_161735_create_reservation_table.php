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
        Schema::create('reservation', function (Blueprint $table) {
            $table->comment('');
            $table->integer('idreservation', true);
            $table->time('heuredebut');
            $table->time('heurefin');
            $table->date('date');
            $table->integer('idplace')->index('reservation_place_FK');
            $table->integer('iduser')->index('reservation_user0_FK');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservation');
    }
};
