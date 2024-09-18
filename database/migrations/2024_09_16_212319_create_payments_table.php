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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('customer_pid');
            $table->string('status');
            $table->string('gateway', 20);
            $table->string('order_id');
            $table->string('reference');
            $table->float('amount_paid',20,2)->nullable();
            $table->float('charges',20,2)->nullable();
            $table->string('payment_date')->nullable();
            $table->string('channel')->nullable();
            $table->string('transactiondate')->nullable();
            $table->string('debitdate')->nullable();
            $table->string('bank')->nullable();
            $table->string('branch')->nullable();
            $table->string('daterequested')->nullable();
            $table->string('orderref')->nullable();
            $table->string('payername')->nullable();
            $table->string('payerphonepumber')->nullable();
            $table->string('payeremail')->nullable();
            $table->string('uniqueidentifier')->nullable();
            $table->string('servicetypeid', 30)->nullable();
            $table->text('paymentdescription')->nullable();
            $table->string('expiry_date',20)->nullable();
            $table->boolean('synched')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
