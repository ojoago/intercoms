<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Customer\Payment;
use App\Models\Customer\Customer;
use Illuminate\Support\Facades\DB;
use App\Models\Customer\MeterPrice;

class InvoiceController extends Controller
{
    //
    private $_1q = ['single phase', '1 phase'];
    private $_3q = ['three phase', '3 phase'];

    public function generateRRR(Request $request){
        
        $request->validate([
            'accountnumber' => 'required' , 
            'cust_names' => 'required' ,
            'gsm' => 'required' ,
            'email' => 'required|email' ,
            'meter_recomended' => 'required' ,
            'region' => 'required' ,
            'address' => 'required' ,
        ]);

        try {
            // return message if price is null 
            $data = [
                'customernames' => ucwords($request->cust_names),
                'accountnumber' => $request->accountnumber,
                'gsm' => $request->gsm,
                'email' => $request->email,
                'address' => $request->address,
                'meter_recomended' => $request->meter_recomended,
                'region' => $request->region,
                'disco_code' => '007',
                'orderId' => orderId(),
                'pid' => public_id(),
                'price' => getMeterPrice($request->meter_recomended),
                'date' => fullDate()
            ];

            $res = RequestController::generateRequest($data);
           
            if ($res['status'] == 1) {
                
                return to_route('preview.rrr', ['rrr' => $res['data']])->with(' ', 'Payment Reference Generated');
            }
            return redirect()->back()->with('error', 'Failed to Generate RRR --- ' . $res['message']);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return redirect()->back()->with('error', 'Failed to Generate RRR --- ' . $e->getMessage());
           
        }

        dd($request->all());
    }

    public function viewRrr(){
        $data = DB::table('payments as p')->join('customers as c', 'c.pid', 'p.customer_pid')->select(
            'accountnumber',
            'customernames',
            'gsm',
            'email',
            'region',
            'address',
            'meter_recomended',
            'status',
            'amount_paid',
            'reference',
            'payment_date',
            'c.created_at',
            'charges'
        )->orderByDesc('created_at')->paginate(20);
        return Inertia::render('Rrr/ViewRrr',['data' =>$data]);
    }

    
    public function viewPayment(){
        try {
            $lists = Customer::from('customers as c')->join('payments as p', 'customer_pid', 'c.pid')->where('payment_date','<>',null)->orderBy('payment_date', 'DESC')->select(
                'accountnumber',
                'customernames',
                'gsm',
                'email',
                'region',
                'address',
                'meter_recomended',
                'status',
                'amount_paid',
                'reference',
                'payment_date',
                'c.created_at',
                'charges',DB::raw('FORMAT(amount_paid, 2) as amount, DATE(payment_date) as date'))->paginate(20);
           
            $summary = $this->sumAll();
            return Inertia::render('Rrr/ViewPayment', ['lists' => $lists, 'summary' => $summary]);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return Inertia::render('Rrr/ViewPayment', ['list' =>[], 'summary' => []])->with('error','Something Went Wrong');
        }
        
    }


    public function previewRRR(Request $request){
        try {
            $data = DB::table('payments as p')->join('customers as c', 'c.pid', 'p.customer_pid')->where('p.reference', $request->rrr)->select(
                'accountnumber',
                'customernames',
                'gsm',
                'email',
                'region',
                'address',
                'meter_recomended',
                'status',
                'amount_paid',
                'price',
                'reference',
                'payment_date',
                'c.created_at',
                'charges',
                'expiry_date'
            )->first();
            return Inertia::render('Rrr/PreviewRrr', ['data' => $data]);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return redirect()->back()->with('error','Something Went Wrong...');
        }
    }


    public function getMeterPrice(Request $request){
        
        try {

            $data = MeterPrice::all();
           return Inertia::render('Rrr/Price',['data' => $data]);
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return ;
        }
       
    }
    public function setMeterPrice(Request $request){
        

        $request->validate(['phase' => 'required', 'price' => 'required']);

        try {
            $data  = [
                'phase' => $request->phase,
                'price' => $request->price,
                'code' => meterPriceCode($request->phase),
            ]; 
            MeterPrice::updateOrcreate(['code' => $data['code']],$data);
            return redirect()->back()->with('message','Price Submitted');
        } catch (\Throwable $e) {
            logError($e->getMessage());
            return ;
        }
       
    }


    private function sumAll()
    {
        $payment = Payment::where('status', 'Payment Received')
        ->selectRaw("COUNT(id) as count")
        ->selectRaw("SUM(amount_paid) as total")
        ->first();
        $all = Payment::get('id')->count();
        $diff = Customer::join('payments', 'customer_pid', 'customers.pid')
        ->where('status',  'Payment Received')
        ->whereIn('meter_recomended', $this->_3q)
            ->selectRaw("SUM(amount_paid) as total")->first();
        $_3q = Customer::join('payments', 'customer_pid', 'customers.pid')
        ->where('status', 'Payment Received')
        ->whereIn('meter_recomended', $this->_3q)
            ->selectRaw("SUM(amount_paid) as total")->first();
        $_1q = Customer::join('payments', 'customer_pid', 'customers.pid')
        ->where('status',  'Payment Received')
        ->whereIn('meter_recomended', $this->_1q)
            ->selectRaw("SUM(amount_paid) as total")->first();
        return ['total' => $payment, '1q' => $_1q, '3q' => $_3q, 'diff' => $diff, 'count' => $all];
    }

}
