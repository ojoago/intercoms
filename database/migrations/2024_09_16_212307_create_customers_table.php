<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('pid')->unique();
            $table->string('accountnumber');
            $table->string('customernames');
            $table->string('meter_recomended');
            $table->float('price');
            $table->string('gsm')->nullable();
            $table->string('email')->nullable();
            $table->text('address')->nullable();
            $table->string('disco_code', 20);
            $table->string('region');
            $table->integer('dayscount')->default(0);
            $table->tinyInteger('installation_status')->comment('0:no_metered,1:metered')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
