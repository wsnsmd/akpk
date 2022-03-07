<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBiayaToPelatihansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pelatihans', function (Blueprint $table) {
            $table->unsignedSmallInteger('jp')->after('is_tampil')->nullable();
            $table->unsignedSmallInteger('hari')->after('is_tampil')->nullable();
            $table->unsignedInteger('biaya')->after('is_tampil')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pelatihans', function (Blueprint $table) {
            $table->dropColumn('jp');
            $table->dropColumn('hari');
            $table->dropColumn('biaya');
        });
    }
}
