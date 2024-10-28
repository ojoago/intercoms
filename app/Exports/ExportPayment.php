<?php

namespace App\Exports;

use App\Models\Customer\Customer;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;

class ExportPayment implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    protected $fromDate;
    protected $toDate;

    public function __construct($fromDate, $toDate)
    {
        $this->fromDate = $fromDate;
        $this->toDate = $toDate;
    }

    public function collection()
    {
        //
        return Customer::from('customers as c')->join('payments as p', 'customer_pid', 'c.pid')
                ->where('payment_date', '<>', null)->whereBetween('payment_date', [$this->fromDate, $this->toDate])
                ->orderBy('payment_date', 'DESC')->select(
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
            'charges',
            DB::raw('FORMAT(amount_paid, 2) as amount, DATE(payment_date) as date')
        )->get();
    }
}
