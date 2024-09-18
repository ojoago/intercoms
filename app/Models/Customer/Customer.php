<?php

namespace App\Models\Customer;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $fillable = ['pid', 'accountnumber' , 'customernames', 'meter_recomended', 'price','gsm', 'email', 'address', 'disco_code', 'region', 'dayscount', 'installation_status'];
}
