<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJenisRumpunTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jenis_rumpun', function (Blueprint $table) {
            $table->smallInteger('jenis_id');
            $table->unsignedBigInteger('rumpun_id');

            $table->primary(['jenis_id', 'rumpun_id']);
        });

        Schema::table('jenis_rumpun', function($table) {
            $table->foreign('jenis_id')->references('id')->on('jenis');
            $table->foreign('rumpun_id')->references('id')->on('rumpuns');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jenis_rumpun');
    }
}
