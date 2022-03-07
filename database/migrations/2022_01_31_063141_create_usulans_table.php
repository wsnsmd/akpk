<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsulansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usulans', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('admin_id');
            $table->unsignedBigInteger('pelatihan_id');
            $table->smallInteger('tahun');
            $table->string('pnama');
            $table->unsignedSmallInteger('pjp')->nullable();
            $table->unsignedSmallInteger('phari')->nullable();
            $table->unsignedInteger('pbiaya')->nullable();
            $table->unsignedSmallInteger('jumlah');
            $table->tinyInteger('polabiaya')->nullable()->comment('1-Fasilitasi, 2-Kontribusi, 3-Lain-lain');
            $table->tinyInteger('level')->comment('2-Kab/Kota, 3-PD');
            $table->boolean('is_verify')->default(false);
            $table->string('status')->nullable();
            $table->text('lampiran')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('admin_id')->references('id')->on('admins');
            $table->foreign('pelatihan_id')->references('id')->on('pelatihans');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usulans');
    }
}
