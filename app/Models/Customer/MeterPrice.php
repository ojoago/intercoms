<?php

namespace App\Models\Customer;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MeterPrice extends Model
{
    use HasFactory;
    protected $fillable = [
        'phase' , 'price' , 'code'
    ];
}
