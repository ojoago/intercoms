<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer\Payment;
use App\Models\Customer\Customer;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    private $fields = [
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
        'customers.created_at',
        'charges'
    ];
    private $_1q = ['single phase', '1 phase'];
    private $_3q = ['three phase', '3 phase'];
    //
    public function index()
    {
        $year = date('Y');
        $month = date('m');
        // $dropMonthly = DB::select("SELECT COUNT(c.created_at) AS rrr, //                     COUNT(payment_date) AS pc, MONTH(p.created_at) AS date   //                     FROM customers c INNER JOIN payments p ON p.customer_id = c.id //                     WHERE YEAR(payment_date) = '" . $year . "'   //                     GROUP BY MONTH(c.created_at),MONTH(p.created_at)");

        $chartparams = Customer::from('customers as c')->leftJoin('payments as p', 'p.customer_pid', 'c.pid')
        ->groupBy(DB::raw('DATE(c.created_at)'))->groupBy('meter_recomended')
            ->select(DB::raw('COUNT(c.id) as rrr, COUNT(p.id) as payment,DATE(c.created_at) as date ,COUNT(p.payment_date) as paid,meter_recomended'))
            ->whereMonth('c.created_at', $month)->whereYear('c.created_at', $year)->get();

        // $report = DB::select("SELECT COUNT(c.id) AS count, COUNT(p.id) as payments ,
        //                     DATE(payment_date) AS pay_day,DATE(c.created_at) as date FROM customers c LEFT JOIN payments P 
        //                     ON DATE(c.created_at)  = DATE(payment_date) GROUP BY MONTH(c.created_at),meter_recomended");

        $report = DB::select("SELECT COUNT(id) AS count, SUM(amount_paid) AS amount,MONTH(payment_date) AS date FROM payments WHERE YEAR(payment_date) = '" . $year . "' GROUP BY MONTH(payment_date) HAVING amount > 0 ");
        
        // all rrr 
        $rrrToday = Customer::count('id');
        // payment 
        $paidToday = Payment::count('id');
        // daily 
        // today rrr 
        $rrrToday = Customer::whereMonth('created_at', $month)->whereYear('created_at', $year)->count('id');
        // today payment 
        $paidToday = Payment::whereDate('payment_date',  justDate())->count('id');

        // today rrr 
        $rrrToday = Customer::whereDate('created_at', justDate())->count('id');
        // today payment 
        $paidToday = Payment::whereDate('payment_date',  justDate())->count('id');
        $paidTodayAmount = Payment::whereDate('payment_date',  justDate())->sum('amount_paid');
        // this month 
        // $_1qCountT = Customer::join('payments', 'customer_pid', 'customers.pid')
        //     ->whereIn('meter_recomended', $this->_1q)
        //     ->whereDate('payment_date', justDate())->count('payments.id');
        // $_1qAmountT = Customer::join('payments', 'customer_pid', 'customers.pid')
        //     ->whereIn('meter_recomended', $this->_1q)
        //     ->whereDate('payment_date', justDate())->sum('amount_paid'); //->count('id');
        // $_3qCountT = Customer::join('payments', 'customer_pid', 'customers.pid')
        //     ->whereDate('payment_date',  justDate())
        //     ->whereIn('meter_recomended', $this->_3q)->count('payments.id');
        // $_3qAmountT = Customer::join('payments', 'customer_pid', 'customers.pid')
        //     ->whereDate('payment_date',  justDate())
        //     ->whereIn('meter_recomended', $this->_3q)->sum('amount_paid'); //->count('id');

        // daily 
        // today rrr 
        $rrrCurrentMonth = Customer::whereDate('created_at',  justDate())->count('id');
        // today payment 
        $paidCurrentMonth = Payment::whereDate('payment_date', justDate())->count('id');
        $paidCurrentMonthAmount = Payment::whereDate('payment_date', justDate())->sum('amount_paid');
        // this month 
        // $_1qCountCurrentMonth = Customer::join('payments', 'customer_pid', 'customers.pid')
        //     ->whereIn('meter_recomended', $this->_1q)
        //     ->whereDate('payment_date', justDate())->count('payments.id');
        // $_1qAmountCurrentMonth = Customer::join('payments', 'customer_pid', 'customers.pid')
        //     ->whereIn('meter_recomended', $this->_1q)
        //     ->whereDate('payment_date', justDate())->sum('amount_paid'); //->count('id');
        // $_3qCountCurrentMonth = Customer::join('payments', 'customer_pid', 'customers.pid')
        //     ->whereDate('payment_date', justDate())
        //     ->whereIn('meter_recomended', $this->_3q)->count('payments.id');
        // $_3qAmountCurrentMonth = Customer::join('payments', 'customer_pid', 'customers.pid')
        //     ->whereDate('payment_date', justDate())
        //     ->whereIn('meter_recomended', $this->_3q)->sum('amount_paid'); //->count('id');
        $allRRR = Customer::count('id');
        $allPaid = Payment::where('payment_date', '<>', null)->count('id');
        $allPaidAmount = Payment::where('payment_date', '<>', null)->sum('amount_paid');
        // count by phases 
        // $distinct = Customer::join('payments', 'customer_id', 'customers.id')->distinct('accountnumber')->count('accountnumber');
        $_1qCount = Customer::join('payments', 'customer_pid', 'customers.pid')->whereIn('meter_recomended', $this->_1q)->count('payments.id');
        $_1qAmount = Customer::join('payments', 'customer_pid', 'customers.pid')->whereIn('meter_recomended', $this->_1q)->sum('amount_paid'); //->count('id');
        $_3qCount = Customer::join('payments', 'customer_pid', 'customers.pid')->whereIn('meter_recomended', $this->_3q)->count('payments.id');
        $_3qAmount = Customer::join('payments', 'customer_pid', 'customers.pid')->whereIn('meter_recomended', $this->_3q)->sum('amount_paid'); //->count('id');
        $report = DB::select("SELECT COUNT(id) AS count, SUM(amount_paid) AS amount,MONTH(payment_date) AS date FROM payments WHERE YEAR(payment_date) = '" . $year . "' GROUP BY MONTH(payment_date) HAVING amount > 0 ");
        $yearlyReport = DB::select("SELECT COUNT(id) AS count, SUM(amount_paid) AS amount,YEAR(payment_date) AS year FROM payments GROUP BY YEAR(payment_date) HAVING amount > 0 ");
        $installation = DB::select("SELECT COUNT(id) AS count, meter_type FROM  installations  GROUP BY meter_type ");
        $installationReport = DB::table('installations')->select("meter_type",DB::raw('COUNT(id) AS count'))->groupBy('meter_type')->groupBy('doi')->whereMonth('doi', $month)->whereYear('doi', $year)->get();
        $data = [
            // today 
            'todayRRR' => $rrrToday,
            'todayPayment' => $paidToday,
            'paidTodayAmount' => number_format($paidTodayAmount),
            // '3q_countT' => $_3qCountT,
            // '3q_amountT' => $_3qAmountT,
            // this month 
            'rrrCurrentMonth' => $rrrCurrentMonth,
            'paidCurrentMonth' => $paidCurrentMonth,
            'paidCurrentMonthAmount' => number_format($paidCurrentMonthAmount),
            // '1qAmountCurrentMonth' => $_1qAmountCurrentMonth,
            // '3qCountCurrentMonth' => $_3qCountCurrentMonth,
            // '3qAmountCurrentMonth' => $_3qAmountCurrentMonth,
            // all 
            'all_rrr' => $allRRR,
            'all_paid' => $allPaid,
            'allPaidAmount' => number_format($allPaidAmount),
            // 'distinct'=>$distinct,
            '_1q_count' => $_1qCount,
            '_1q_amount' => $_1qAmount,
            '_3q_count' => $_3qCount,
            '_3q_amount' => $_3qAmount,
            'report' => $report,
            'yearly' => $yearlyReport,
            'chartparams' => $chartparams,
            'installation' => $installation,
            'installationReport' => $installationReport,
        ];
         

        return Inertia::render('Dashboard', ['data' => $data]);
    }

}
