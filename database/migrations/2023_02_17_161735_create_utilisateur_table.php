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
        Schema::create('utilisateur', function (Blueprint $table) {
            $table->comment('');
            $table->integer('iduser')->primary();
            $table->string('nom', 50);
            $table->string('prenom', 50);
            $table->string('fonction', 50);
            $table->string('mail', 50);
            $table->string('password', 50);
            $table->integer('idfavuser')->index('user_favoriuser_FK');
            $table->integer('idfavp')->index('user_favoriplace0_FK');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('utilisateur');
    }
};
