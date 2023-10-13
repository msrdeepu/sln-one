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
        Schema::create('cashadvances', function (Blueprint $table) {
            $table->id();
            $table->text('agent');
            $table->text('branch');
            $table->text('account');
            $table->text('paymentmethod')->nullable();
            $table->bigIncrements('amount')->nullable();
            $table->text('cheque')->nullable();
            $table->string('drawn');
            $table->text('details')->nullable();
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cashadvances');
    }
};
