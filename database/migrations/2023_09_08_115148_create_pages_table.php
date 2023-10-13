<?php
use App\User;
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
        Schema::create('pages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title', 200)->nullable();
            $table->string('slug', 200)->nullable();
            $table->string('seotitle', 200)->nullable();
            $table->text('metadesctiption')->nullable();
            $table->text('metakeywords')->nullable();
            $table->text('body')->nullable();
            $table->text('mainbody')->nullable();
            $table->text('extrabody')->nullable();
            $table->text('optionalbody')->nullable();
            $table->text('optionalextrabody')->nullable();
            $table->string('mainheader', 200)->nullable();
            $table->string('subheader', 200)->nullable();
            $table->string('pagetype', 50)->nullable();
            $table->string('linktext', 100)->nullable();
            $table->text('richbodyone')->nullable();
            $table->text('richbodytwo')->nullable();
            $table->text('intro')->nullable();
            $table->text('thumb')->nullable();
            $table->text('image')->nullable();
            $table->text('banner')->nullable();
            $table->text('attachment1')->nullable();
            $table->text('attachment2')->nullable();
            $table->text('attachment3')->nullable();
            $table->text('ctaheader')->nullable();
            $table->text('ctatext')->nullable();
            $table->text('ctalink')->nullable();
            $table->text('ctabody')->nullable();
            $table->string('group', 200)->nullable();
            $table->string('pagelayout', 200)->nullable();
            $table->timestamp('createdate')->nullable();
            $table->timestamp('expdate')->nullable();
            $table->string('published', 20)->nullable();
            $table->string('contentaccess', 50)->nullable();
            $table->boolean('gallery')->default(0);
            $table->boolean('attachments')->default(0);
            $table->timestamps();
            $table->foreignIdFor(User::class)->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignIdFor(Category::class)->constrained()->onUpdate('cascade')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pages');
    }
};
