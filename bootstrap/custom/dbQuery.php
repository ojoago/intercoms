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



function getInstallerSupervisor($pid)
{
    try {
        return DB::table('team_members as m')->join('teams as t', 't.pid', 'm.team_pid')->where('m.user_pid', $pid)->first(['m.team_pid', 't.supervisor']);
    } catch (\Throwable $e) {
        logError($e->getMessage());
        return false;
    }
}
