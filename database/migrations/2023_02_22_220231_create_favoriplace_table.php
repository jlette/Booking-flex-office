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
        Schema::create('favoriplace', function (Blueprint $table) {
            $table->comment('');
            $table->integer('idfavp', true);
            $table->integer('id_user')->index('favoriplace_user_fk');
            $table->integer('id_place')->index('favoriplace_place_fk');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('favoriplace');
    }
};
