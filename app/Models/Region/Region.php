<?php

namespace App\Models\Region;

use App\Models\State;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use HasFactory;
    protected $fillable = ['state_id', 'region', 'pid'];

    protected function region() :Attribute
    {
        return Attribute::make(
            set:fn($val) => strtoupper($val)
        );
    }

    public function state(){
        return $this->belongsTo(State::class, 'state_id','id');
    }
}
