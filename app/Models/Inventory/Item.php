<?php

namespace App\Models\Inventory;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    protected $fillable = [
        'region_pid',
        'name',
        'pid',
        'description',
        'unit',
        'status',
        'creator'
    ];

    protected function name(): Attribute
    {
        return Attribute::make(
            set:fn($val) => strtoupper($val)
        );
    }

    protected function unit(): Attribute
    {
        return Attribute::make(
            set:fn($val) => strtoupper($val)
        );
    }
}
