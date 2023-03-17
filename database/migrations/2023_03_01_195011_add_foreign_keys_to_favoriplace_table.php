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
        Schema::table('favoriplace', function (Blueprint $table) {
            $table->foreign(['id_place'], 'favoriplace_place_fk')->references(['idplace'])->on('place')->onDelete('CASCADE');
            $table->foreign(['id_user'], 'favoriplace_user_fk')->references(['iduser'])->on('users')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('favoriplace', function (Blueprint $table) {
            $table->dropForeign('favoriplace_place_fk');
            $table->dropForeign('favoriplace_user_fk');
        });
    }
};
