<?php

namespace App\Models\Admin\Feeder;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feeder33 extends Model
{
    use HasFactory;

    protected  $fillable = [
        'zone_pid' ,'name','pid'
    ];

    protected function name(): Attribute
    {
        return Attribute::make(
            set:fn($val) => strtoupper($val)
        );
    }


    public function zone(){
        return $this->belongsTo(TradingZone::class, 'zone_pid','pid');
    }
}
