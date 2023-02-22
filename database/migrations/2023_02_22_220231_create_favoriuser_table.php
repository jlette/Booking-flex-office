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
        Schema::create('favoriuser', function (Blueprint $table) {
            $table->comment('');
            $table->integer('idfavuser', true);
            $table->integer('id_user')->index('favoriuser_user_fk');
            $table->integer('id_favori')->index('favoriuser_favori_fk');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('favoriuser');
    }
};
