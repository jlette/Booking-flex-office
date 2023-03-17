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
        Schema::create('users', function (Blueprint $table) {
            $table->comment('');
            $table->integer('iduser', true);
            $table->string('name');
            $table->string('username', 50);
            $table->string('fonction', 50)->nullable();
            $table->string('email', 50);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password', 150);
            $table->rememberToken();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('created_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
