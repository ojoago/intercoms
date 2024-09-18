<?php

use App\Http\Controllers\RemittaController;
use App\Http\Controllers\RequestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('readyformeter', [RequestController::class, 'readyForMeter']);
Route::post('confirmpayment', [RemittaController::class, 'paymentNotification'])->name('confirmpayment');
// Route::post('paymentstatus', [RemitaPaymentConfirmation::class, 'paymentStatus'])->name('paymentstatus');

