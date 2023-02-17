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
        Schema::table('utilisateur', function (Blueprint $table) {
            $table->foreign(['idfavp'], 'user_favoriplace0_FK')->references(['idfavp'])->on('favoriplace')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['idfavuser'], 'user_favoriuser_FK')->references(['idfavuser'])->on('favoriuser')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('utilisateur', function (Blueprint $table) {
            $table->dropForeign('user_favoriplace0_FK');
            $table->dropForeign('user_favoriuser_FK');
        });
    }
};
