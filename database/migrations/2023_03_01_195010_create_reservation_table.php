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
            $table->integer('id_user')->index('resrvation_user_fk');
            $table->integer('id_place')->index('resrvation_place_fk');
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
