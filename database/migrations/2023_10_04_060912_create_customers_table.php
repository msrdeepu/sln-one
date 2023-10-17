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
            $table->text('surname')->nullable();
            $table->text('fullname')->nullable();
            $table->text('careof')->nullable();
            $table->text('carename')->nullable();
            $table->text('code')->nullable();
            $table->text('organization')->nullable();
            $table->text('branch')->nullable();
            $table->text('pannumber')->nullable();
            $table->bigIncrements('adharnumber')->nullable();
            $table->text('gstax')->nullable();
            $table->text('dateofbirth')->nullable();
            $table->bigIncrements('mobile')->nullable();
            $table->bigIncrements('phone')->nullable();
            $table->bigIncrements('altmobile')->nullable();
            $table->bigIncrements('whatsapp')->nullable();
            $table->text('occupation')->nullable();
            $table->text('nationality')->nullable();
            $table->text('joinedon')->nullable();
            $table->text('address')->nullable();
            $table->text('country')->nullable();
            $table->text('state')->nullable();
            $table->text('district')->nullable();
            $table->bigIncrements('pincode')->nullable();
            $table->text('nomineename')->nullable();
            $table->text('nomineerelation')->nullable();
            $table->text('nomineedob')->nullable();
            $table->text('photo')->nullable();
            $table->text('active')->nullable();
            $table->text('loginhas')->nullable();
            $table->text('nomineeaddress')->nullable();
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
