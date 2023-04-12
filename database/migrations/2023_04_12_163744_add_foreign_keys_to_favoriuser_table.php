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
        Schema::table('favoriuser', function (Blueprint $table) {
            $table->foreign(['id_favori'], 'favoriuser_favori_fk')->references(['iduser'])->on('users')->onDelete('CASCADE');
            $table->foreign(['id_user'], 'favoriuser_user_fk')->references(['iduser'])->on('users')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('favoriuser', function (Blueprint $table) {
            $table->dropForeign('favoriuser_favori_fk');
            $table->dropForeign('favoriuser_user_fk');
        });
    }
};
