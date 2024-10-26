<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer\Payment;
use App\Models\Customer\Customer;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\RemittaController;

class RequestController extends Controller
{
    //
    public function readyForMeter(Request $request)
    {
        // $data = $request->all();
        $error = null;
        $validator = Validator::make($request->all(),[
            'key' => 'required|in:' . SKEY ,
            'cust_names' => '' ,
            'accountnumber' => '' ,
            'gsm' => '' ,
            'address' => '' ,
            'meter_recomended' => '' ,
            'disco_code' => '' ,
            'region' => '' ,
        ]);

        if(!$validator->fails()){
            $price = getMeterPrice($request->meter_recomended) ;
            if(!$price){
                return customResponse(0, 'Please Contact '. SERVICEPROVIDER . ' Admin to configure Meter prices', '');
            }

            $data = [
                'customernames' => ucwords($request->cust_names) ,
                'accountnumber' => $request->accountnumber ,
                'orderId' =>  orderId() ,
                'date' =>  fullDate() ,
                'price' =>  getMeterPrice($request->meter_recomended) ,
                'pid' =>  public_id() ,
                'gsm' => $request->gsm ,
                'meter_recomended' => $request->meter_recomended ,
                'email'  => $request->email ,
                'address'  => $request->address ,
                'region'  => $request->region ,
                'disco_code' => '007',
            ];
            


            $save = Customer::create($data);
            if ($save) {
                $data['customer_pid'] = $save->pid;
                $response = RemittaController::generateRemitaRRR($data);
                // logError($response);
                if ($response['status'] === 1) {
                    $rrr = $this->loadRRR($response['data']->reference);
                    if ($rrr) {
                        $response = $this->requestResponse($rrr);
                        return  response($response, 201);
                    }
                    return customResponse(code: 0, msg: 'Failed to load RRR because pf network', data: []);
                }
                return customResponse(code: 0, msg: 'Could not reach Remita', data: []);
                // $response = $this->newRRR($data);

            }
            return customResponse(0, 'Something Went Wrong, Could not create Customer Account', '');

        }

        return response(['status' => 'rejected', 'message' => 'missing Parameters', 'errors' => $validator->errors()->toArray()]);

        
        // $rrr = Payment::join('customers','customers.id','payments.customer_id')
        //         ->where([['customers.accountnumber', $data['accountnumber']],['customers.accountnumber',$data['gsm']]])
        //         ->first(['payments.reference', 'customers.meter_recomended', 'payments.customer_id']);
        // if RRR exist return the existing 1
        // if(isset($rrr)){
        //     // if RRR exist and meter type differ, then generate new rrr for the difference
        //     if($rrr->meter_recomended != $data['meter_recomended']){
        //         $data['customer_id'] = $rrr->customer_id;
        //         $response = $this->newRRR($data);
        //         return  response($response, 201);
        //     }
        //     // else load existing RRR 
        //     $rrr_detail = $this->loadRRR($rrr->reference);
        //     $data = $this->requestResponse($rrr_detail, 'Existing RRR');
        //     return response($data,201);
        // }

    }


    // generate rrr from within the app 

    public static function generateRequest(array $data){
        try {
            $save = Customer::create($data);
            if ($save) {
                $data['customer_pid'] = $save->pid;
                $response = RemittaController::generateRemitaRRR($data);
                if ($response['status'] === 1) {
                    return customResponse(code: 1, msg: 'RRR Generated', data:  $response['data']->reference);
                }
                return customResponse(code: 0, msg: 'Could not reach Remita', data: []);
            }
            return customResponse(0, 'Something Went Wrong, Could not create Customer Account', []);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return customResponse(0, 'Something Went Wrong, Could not create Customer Account', []);
        }
    }


    public function paymentStatus(Request $request)
    {
        $input = $request->all();
        $request->validate(
            [
                'key' => 'required|in:' . SKEY,
                'rrr' => 'required'
            ],
            ['key.in' => 'Invalid API Key']
        );
        $data = self::loadPayment($request->rrr);
        if ($data) {
            return customResponse(1, 'data loaded successfully', $data);
        }
        return customResponse(0, 'No matching RRR', '');
    }

    public static function loadPayment($rrr)
    {
        return DB::table('payments as p')->join('customers as c', 'c.pid', 'p.customer_pid')
        ->where('reference', $rrr)->first([
            'p.reference as ref',
            'p.status',
            'p.amount_paid as amount',
            'p.payment_date as date',
            'c.accountnumber as account'
        ]);
    }


    public static function pushNotification($data)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $data['url']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $data['header']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data['body']);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_VERBOSE, 0);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $output = curl_exec($ch);
        // logError($output);
        if ($output === FALSE) {
            return "cURL Error" . curl_error($ch);
        }
        curl_close($ch);
        return $output;
    }


    // load RRR 
    private function loadRRR($rrr)
    {
        try {
            $rrr = DB::table('payments as p')->join('customers as c', 'c.pid', 'p.customer_pid')
                ->where('p.reference', $rrr)
                ->first([
                    'p.status',
                    'p.order_id',
                    'p.reference',
                    'p.gateway',
                    'p.created_at',
                    'c.accountnumber',
                    'c.customernames',
                    'c.gsm',
                    'c.email',
                    'c.address',
                    'c.meter_recomended AS type',
                    'c.price'
                ]);
            return $rrr;
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return false;
        }
    }


    private function requestResponse($data, $msg = 'New RRR')
    {
        $response = [
            //'rrr_message'=>$msg,

            'requiresPayment' => 1,
            'orderInfo' => [
                'orderStatusDescription' => $data->status,
                'address' => $data->address,
                'disco' => 'Jos Electricity Distribution Company Plc',
                'orderReference' => $data->reference,
                'orderStatus' => $data->status,
                'accountNumber' => $data->accountnumber,
                'orderDate' => $data->created_at,
                'serviceProviderName' => SERVICEPROVIDER
            ],
            'paymentInfo' => [
                'payerPhoneNumber' => $data->gsm,
                'payerFirstName' => $data->customernames,
                'paymentReference' => $data->reference,
                'txnDescription' => 'Payment for ' . $data->type . ' ' . SERVICEPROVIDER .' meter, order ID ' . $data->order_id,
                'payerEmail' => $data->email,
                'txnAmount' => $data->price,
                'payerLastName' => '',
                'expiresAt' => ''
            ]
        ];
        customLog($response, 'rrr/' . date('Y-m') . '.log'); //log rrr to file
        return customResponse(code: 1, msg: $data->status, data: $response);
    }

    // private function addPaymentRecord($data)
    // {
    //     try {
    //         return Payment::create($data);
    //     } catch (\Throwable $e) {
    //         logError($e->getMessage());
    //         return false;
    //     }
    // }


}
