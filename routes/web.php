<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\BranchesController;
use App\Http\Controllers\VenturesController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ReceiptController;
use App\Http\Controllers\PaymentreceiptController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CashadvanceController;
use App\Http\Controllers\ContentuploadController;
use App\Http\Controllers\MonthlyincentiveController;
use App\Http\Controllers\WidgetController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\AgentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/admin/company', [CompanyController::class, 'index'])->name('company.index');
    Route::get('/admin/company-create', [CompanyController::class, 'create'])->name('company.create');
    Route::post('/admin/company/store', [CompanyController::class, 'store'])->name('company.store');
    Route::get('/admin/company/{id}/edit',[CompanyController::class, 'edit'])->name('company.edit');
    Route::patch('/admin/company/{id}', [CompanyController::class, 'update'])->name('company.update');
    Route::delete('/admin/company/{id}', [CompanyController::class, 'destroy']) -> name('company.destroy');
    Route::post('/admin/company/{id}/{asset}', [CompanyController::class, 'deleteasset'])->name('company.deleteasset');

    Route::get('/admin/branches', [BranchesController::class, 'index'])->name('branches.index');
    Route::get('/admin/branches-create', [BranchesController::class, 'create'])->name('branches.create');
    Route::post('/admin/branches/store', [BranchesController::class, 'store'])->name('branches.store');
    Route::get('/admin/branches/{id}/edit',[BranchesController::class, 'edit'])->name('branches.edit');
    Route::patch('/admin/branches/{id}', [BranchesController::class, 'update'])->name('branches.update');
    Route::delete('/admin/branches/{id}', [BranchesController::class, 'destroy']) -> name('branches.destroy');

    Route::get('/admin/ventures', [VenturesController::class, 'index'])->name('ventures.index');
    Route::get('/admin/ventures-create', [VenturesController::class, 'create'])->name('ventures.create');
    Route::post('/admin/ventures/store', [VenturesController::class, 'store'])->name('ventures.store');
    Route::get('/admin/ventures/{id}/edit',[VenturesController::class, 'edit'])->name('ventures.edit');
    Route::patch('/admin/ventures/{id}', [VenturesController::class, 'update'])->name('ventures.update');
    Route::delete('/admin/ventures/{id}', [VenturesController::class, 'destroy']) -> name('ventures.destroy');
    Route::post('/admin/ventures/{id}/{asset}', [VenturesController::class, 'deleteasset'])->name('ventures.deleteasset');

    Route::get('/admin/properties', [PropertyController::class, 'index'])->name('properties.index');
    Route::get('/admin/properties-create', [PropertyController::class, 'create'])->name('properties.create');
    Route::get('/admin/properties/{id}/edit',[PropertyController::class, 'edit'])->name('properties.edit');
    Route::patch('/admin/properties/{id}', [PropertyController::class, 'update'])->name('properties.update');
    Route::post('/admin/properties/store', [PropertyController::class, 'store'])->name('properties.store');
    Route::delete('/admin/properties/{id}', [PropertyController::class, 'destroy']) -> name('properties.destroy');

    Route::get('/admin/agents', [AgentController::class, 'index'])-> name('agents.index');
    Route::get('/admin/agents-create', [AgentController::class, 'create'])-> name('agents.create');

    Route::get('/admin/customer', [CustomerController::class, 'index'])-> name('customer.index');
    Route::get('/admin/customer-create', [CustomerController::class, 'create'])-> name('customer.create');

    Route::get('/admin/paymentrecipts', [PaymentreceiptController::class, 'index'])-> name('paymentrecipts.index');
    Route::get('/admin/paymentrecipts-create', [PaymentreceiptController::class, 'create'])-> name('paymentrecipts.create');
    
    Route::get('/admin/cashadvance', [CashadvanceController::class, 'index'])-> name('cashadvance.index');
    Route::get('/admin/cashadvance-create', [CashadvanceController::class, 'create'])-> name('cashadvance.create');
    Route::post('/admin/cashadvance/store', [CashadvanceController::class, 'store'])->name('cashadvance.store');
    Route::get('/admin/cashadvance/{id}/edit',[CashadvanceController::class, 'edit'])->name('cashadvance.edit');

    Route::get('/admin/monthlyincentive', [MonthlyincentiveController::class, 'index'])-> name('monthlyincentive.index');
    Route::get('/admin/monthlyincentive-create', [MonthlyincentiveController::class, 'create'])-> name('monthlyincentive.create');

    Route::get('/setting', [SettingController::class, 'create'])->name('setting.create');
    Route::get('/setting/{id}/edit', [SettingController::class, 'edit'])->name('setting.edit');
    Route::post('/setting/store', [SettingController::class, 'store'])->name('setting.store');
    Route::patch('/setting/{id}', [SettingController::class, 'update'])->name('setting.update');
    Route::delete('/setting/{id}', [SettingController::class, 'destroy'])->name('setting.destroy');

    Route::get('/category', [CategoryController::class, 'index'])->name('category.index');
    Route::get('/category/create', [CategoryController::class, 'create'])->name('category.create');
    Route::post('/category/store', [CategoryController::class, 'store'])->name('category.store');
    Route::get('/category/{id}/edit', [CategoryController::class, 'edit'])->name('category.edit');
    Route::post('/category/{id}', [CategoryController::class, 'update'])->name('category.update');
    Route::delete('/category/{id}', [CategoryController::class, 'destroy'])->name('category.destroy');

    Route::get('/page', [PageController::class, 'index'])->name('page.index');
    Route::get('/page/create', [PageController::class, 'create'])->name('page.create');
    Route::post('/page/store', [PageController::class, 'store'])->name('page.store');
    Route::get('/page/{id}/edit', [PageController::class, 'edit'])->name('page.edit');
    Route::post('/page/{id}', [PageController::class, 'update'])->name('page.update');
    Route::delete('/page/{id}', [PageController::class, 'destroy'])->name('page.destroy');
    Route::post('/page/{id}/{asset}', [PageController::class, 'deleteasset'])->name('page.deleteasset');


    Route::get('/content/{id}', [ContentuploadController::class, 'create'])->name('content.create');
    Route::post('/content/{id}/store', [ContentuploadController::class, 'store'])->name('content.store');
    Route::get('/content/{id}/{page}/edit', [ContentuploadController::class, 'edit'])->name('content.edit');
    Route::post('/content/{id}', [ContentuploadController::class, 'update'])->name('content.update');
    Route::delete('/content/{id}', [ContentuploadController::class, 'destroy'])->name('content.destroy');


    Route::get('/admin/receipts', [ReceiptController::class, 'index']) -> name('receipts.index');
    Route::get('/admin/receipts-create', [ReceiptController::class, 'create']) -> name('receipts.create');
    

    Route::get('/widget', [WidgetController::class, 'index'])->name('widget.index');
    Route::get('/widget/create', [WidgetController::class, 'create'])->name('widget.create');
    Route::post('/widget/store', [WidgetController::class, 'store'])->name('widget.store');

    Route::get('/widget/{id}/edit', [WidgetController::class, 'edit'])->name('widget.edit');
    Route::post('/widget/{id}', [WidgetController::class, 'update'])->name('widget.update');
    Route::delete('/widget/{id}', [WidgetController::class, 'destroy'])->name('widget.destroy');
    Route::post('/widget/{id}/{asset}', [WidgetController::class, 'deleteasset'])->name('widget.deleteasset');

});

require __DIR__.'/auth.php';

Route::get('/{slug}/index', [ContentController::class, 'listpage'])->name('listpage');
Route::get('/{category}/{slug}', [ContentController::class, 'categorypage'])->name('categorypage');
Route::get('/{slug}', [ContentController::class, 'pagecontent'])->name('pagecontent');
