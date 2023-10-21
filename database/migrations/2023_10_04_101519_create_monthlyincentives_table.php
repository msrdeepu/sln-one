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
        Schema::create('monthlyincentives', function (Blueprint $table) {
            $table->id();
            $table->text('incentivetype')->nullable();
            $table->text('durationfrom')->nullable();
            $table->text('durationto')->nullable();
            $table->text('agent')->nullable();
            $table->text('account')->nullable();
            $table->text('business')->nullable();
            $table->text('company')->nullable();
            $table->text('paidon')->nullable();
            $table->bigIncrements('amount')->nullable();
            $table->bigIncrements('tds')->nullable();
            $table->bigIncrements('gst')->nullable();
            $table->text('chequeno')->nullable();
            $table->text('ddnum')->nullable();
            $table->text('drawnon')->nullable();
            $table->text('transactionid')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monthlyincentives');
    }
};
