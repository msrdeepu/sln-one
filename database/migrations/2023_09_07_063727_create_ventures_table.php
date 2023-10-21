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
        Schema::create('ventures', function (Blueprint $table) {
            $table->id();
            $table->text('code');
            $table->string('sstatus');
            $table->text('title');
            $table->text('templateslug')->nullable();
            $table->text('slug')->nullable();
            $table->bigIncrements('mapheight')->nullable();
            $table->text('location');
            $table->bigIncrements('mapwidth')->nullable();
            $table->text('branch');
            $table->text('salevel')->nullable();
            $table->text('locationimg')->nullable();
            $table->text('layout')->nullable();
            $table->text('layoutmap')->nullable();
            $table->text('pagetitleseo');
            $table->text('banner')->nullable();
            $table->text('largemap')->nullable();
            $table->text('metadescription')->nullable();
            $table->text('metakeywords')->nullable();
            $table->text('address')->nullable();
            $table->string('published');
            $table->text('mainbody')->nullable();
            $table->text('extrabody')->nullable();
            $table->text('bodystyles')->nullable();
            $table->text('otherdetails')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ventures');
    }
};
