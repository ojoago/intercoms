<?php

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

function logError($error)
{
    Log::error(json_encode($error));
}

function customLog($data,$path = 'rrr/log.log'){
    // $log = date('Y-m');
    Log::build([
        'driver' => 'single',
        'path' => storage_path($path),
    ])->info($data);
}

 function customResponse($code, $msg, $data)
    {
        return [
            'status' => $code,
            'message' => $msg,
            'data' => $data
        ];
    }
function flashMessage()
{
    if (Session::has('message')) {
        list($type, $message) = explode('|', Session::get('message'));
        // $alert = match($type){
        //     'error'=> 'danger',
        //     'warning'=> 'warning',
        //     'message'=> 'info',
        //     'info'=> 'info',
        //     'success'=> 'success',
        // };
        $alert = $type == 'error' ? 'danger' : 'info';
        return sprintf('<div class="alert alert-%s alert-dismissible">
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        <strong>%s!</strong> %s
                        </div>', $alert,ucfirst($type), $message);
    }
    return '';
}

 function meterPrice($type = '')
    {
        switch (strtolower($type)) {
            case 'diff':
            case 'difference':
                $price = DIFF_PRICE;
                break;
            case '3 phase':
            case '3 q':
            case 'three phase':
                $price = Q3_PRICE;
                break;
            default:
                $price = Q1_PRICE;
                break;
        }
        return $price;
    }

 function meterPriceCode($type = '')
    {
        switch (strtolower($type)) {
            case 'diff':
            case 'difference':
                $code = 2;
                break;
            case '3 phase':
            case '3 q':
            case 'three phase':
                $code = 3;
                break;
            case '1 phase':
            case '1 q':
            case 'single phase':
                $code = 1;
                break;
            default:
                $code = 0;
                break;
        }
        return $code;
    }

    function CarbonDate($date){

        // return Carbon::$date->toDateString();
    }
    function public_id(){
        return strtoupper(str_shuffle(date('YMDHism')));
    }
    function orderId(){
        return DATE("dmyHis");
    }

        function justDate()
        {
            return date('Y-m-d');
        }

    function fullDate(){
        return date('Y-m-d h:i:s');
    }