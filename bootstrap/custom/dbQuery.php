<?php 

use Illuminate\Support\Facades\DB;

function getMeterPrice($phase){
    try {
       return DB::table('meter_prices')->where('code',meterPriceCode($phase))->pluck('price')->first();
    } catch (\Throwable $e) {
        logError($e->getMessage());
        return false;
    }
}