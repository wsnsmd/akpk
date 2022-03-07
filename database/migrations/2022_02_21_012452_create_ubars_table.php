<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUbarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ubars', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('admin_id');
            $table->string('nama');
            $table->text('keterangan')->nullable();
            $table->string('status')->nullable();
            $table->smallInteger('tahun');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('admin_id')->references('id')->on('admins');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ubars');
    }
}
