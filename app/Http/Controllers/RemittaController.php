<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer\Payment;


class RemittaController extends Controller
{
    //

    public function paymentNotification(Request $request)
    {
        $inputs = $request->all();
        customLog($inputs, 'logs/' . date('Y-m-d') . '.log');
        $pushNotifiaction = false;
        
        try {
            
            $update = false;

            foreach($inputs as $input):
                $data = [
                    // 'uniqueidentifier'=>$input['uniqueIdentifier'],  
                    'daterequested' => @$input['type'],
                    'payeremail' => @$input['payerEmail'],
                    'payerphonepumber' => @$input['payerPhoneNumber'],
                    'payername' => @$input['payerName'],
                    // 'reference'=>$input['rrr'],
                    'orderref' => @$input['orderRef'],
                    'branch' => @$input['branch'],
                    'bank' => @$input['bank'],
                    'debitdate' => @$input['debitdate'],
                    'payment_date' => @$input['debitdate'],
                    'channel' => @$input['channnel'],
                    'amount_paid' => @$input['amount'],
                    'transactiondate' => @$input['transactiondate'],
                    'servicetypeid' => @$input['serviceTypeId'],
                    'charges' => @$input['chargeFee'],
                    'paymentdescription' => @$input['paymentDescription'],
                ];

                $payment = Payment::join('customers', 'customers.pid', 'customer_pid')->where('reference', $input['rrr'])->first(['payments.*', 'price']);
                if (!$payment) {
                    continue ;
                    // return 'Not Ok';
                }
                if ($payment->price == $input['amount']) {
                    $data['status'] = 'Payment Received';
                    $pushNotifiaction = true;
                };
                $update = $payment->update($data);
                if ($update) {
                    // logError('update');
                    if ($pushNotifiaction) {
                        return 'OK';
                        if ($this->pushNotification($input['rrr'])) {
                        }
                    } else {
                        return 'Not Ok';
                    }
                }
            endforeach;
            
            // logError($update);
            
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return 'Not Ok';
        }
    }

    public static function generateRemitaRRR($info)
    {
        $date = new \DateTime();
        $date->modify('+10 days');
        $expiryDate = $date->format('d/m/Y'); 
        $remit = [
            "serviceTypeId" => SERVICETYPEID,
            "amount" => $info['price'],
            "payerName" => $info['customernames'],
            "payerEmail" => $info['email'],
            "payerPhone" => $info['gsm'],
            'orderId' => $info['orderId'],
            'expiryDate' => $expiryDate,
            'expiresAt' => $expiryDate,
            "hash" => REMITAHAS,
            "customFields" => [
                "type" => "ALL",
                "company" => SERVICEPROVIDER,
                "disco" => "Jos Electricity Distribution Company Plc",
                "metertype" => $info['meter_recomended'],
                "customeraddress" => $info['address'],
            ]
        ];
        $data = self::pushToRemita($remit);
        if ($data && @$data['statuscode'] == '025') {
            $data['gateway'] = 'remita';
            $data['order_id'] = $info['orderId'];
            $data['customer_pid'] = $info['customer_pid'];
            $data['reference'] = $data['RRR'];
            $data['expiry_date'] = $expiryDate;
            $payment = self::addPaymentRecord($data);
            $response = ['status' => 1, 'data' => $payment];
            return $response;
        }
        return ['status' => 0, 'data' => []];
    }


    public static function addPaymentRecord($data)
    {
        try {
            return Payment::create($data);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return false;
        }
    }


    private function pushNotification($rrr)
    {
        $info = RequestController::loadPayment($rrr);
        $info->appID = JAPPID;
        $info->key = JKEY;
        $data = [
            'url' => NOTIFYPAYMENTURL,
            'header' => ['Content-Type: application/json'],
            'body' => json_encode($info)
        ];
        $response = RequestController::pushNotification($data);
        if ($response) {
            $row = Payment::where('reference', $rrr)->first(['id', 'synched']);
            if ($row->synched == 0) {
                $row->synched = 1;
                $row->save();
            }
        }
        // return Payment::where('reference', $rrr)->first();
        return $response;
    }




    private static function pushToRemita($data)
    {
        $hash_string = MERCHANTID . SERVICETYPEID . $data['orderId'] . $data['amount'] . APIKEY;
        $hash = hash('sha512', $hash_string);
        $dsc = "Payment for " . $data['customFields']['metertype'] . " meter";
        $requestData = [
            'header' => [
                'Content-Type: application/json',
                'Authorization: remitaConsumerKey=' . MERCHANTID . ',remitaConsumerToken=' . $hash
            ],
            'body' => '{ 
            "serviceTypeId": "' . SERVICETYPEID . '",
            "amount": "' . $data['amount'] . '",
            "orderId": "' . $data['orderId'] . '",
            "payerName": "' . $data['payerName'] . '",
            "payerEmail": "' . $data['payerEmail'] . '",
            "payerPhone": "' . $data['payerPhone'] . '",
            "description": "' . $dsc . '"
            }',
            'method' => 'POST',
            'url' => LIVEGATEWAYURL,
        ];
        $json_response = RequestController::pushNotification($requestData);
        $jsonData = substr($json_response, 7, -1);
        $response = json_decode($jsonData, true);
        return $response;
    }

}
