<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    Route::get('/dashboard',[DashboardController::class,'index'])->name('dashboard');
    Route::get('/view-rrr',[InvoiceController::class,'viewRrr'])->name('rrr');
    Route::get('/view-payment',[InvoiceController::class,'viewPayment'])->name('payment');
    Route::inertia('/generate-rrr','Rrr/Generate')->name('generate');
    Route::post('/generate-rrr',[InvoiceController::class,'generateRRR'])->name('generate');
    Route::inertia('/set-price', 'Rrr/Price')->name('set.price');
    Route::post('/set-price', [InvoiceController::class, 'setMeterPrice']);
    Route::get('/preview-rrr', [InvoiceController::class, 'previewRRR'])->name('preview.rrr');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
