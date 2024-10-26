<?php

use App\Mail\AuthMail;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
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


function responseMessage($status, $data = [], $msg = null, $code = 200)
{
    return response([
        'status' => $status,
        'data' => $data,
        'message' => $msg
    ], $code ?? $status);
}

function pushResponse($status, $msg, $code = 201)
{
    if ($status) {

        return responseMessage(status: $code, data: $status, msg: $msg);
    }
    return responseMessage(status: 204, data: [], msg: 'Operation Failed...');
}

function pushData($data, $msg = 'Data Loaded')
{
    if ($data->isNotEmpty()) {
        return responseMessage(status: 200, data: $data, msg: $msg);
    }
    return responseMessage(status: 204, msg: ERR_EMT);
}

function getUserPid()
{
    if (auth()->user()) {
        return auth()->user()['pid'];
    }
}


function sprintNumber($num, $pre = 3)
{
    return trim(sprintf("%0{$pre}d\n", $num));
}

 
function ampm()
{
    return date('h:i A');
}

function formatDate($date)
{
    if (empty($date)) {
        return;
    }
    return date('d M, Y', strtotime($date));
}

function formatDateTime($date)
{
    if (empty($date)) {
        return;
    }
    return date('d M, Y h:i A', strtotime($date));
}

function shortTime($date)
{
    return date('Y-M-d', strtotime($date));
}
 
function timeNow()
{
    return date('H:i');
}

function sendMail($param)
{
    try {
        return Mail::to($param['email'])->send(new AuthMail($param));
    } catch (\Throwable $e) {
        logError($e->getMessage());
        return false;
    }
}


function randomNumber($len = 7)
{
    return substr(random_int(1, 99999999999999999), 1, $len);
}