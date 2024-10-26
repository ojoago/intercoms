<?php

namespace App\Models\Customer;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $fillable = [ 'customer_pid' , 'status' , 'gateway' , 'order_id' , 'reference' , 'amount_paid' , 'charges' , 'payment_date' , 'channel' ,
                            'transactiondate' , 'debitdate' , 'bank' , 'branch' , 'daterequested' , 'orderref' , 'payername' , 'payerphonepumber' , 'payeremail' ,
                            'uniqueidentifier' , 'servicetypeid' , 'paymentdescription' , 'synched' ,
        'expiry_date'
                            ];
}
