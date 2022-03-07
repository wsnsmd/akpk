<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisRumpun extends Model
{
    use HasFactory;
    protected $table = 'jenis_rumpun';
    protected $guarded = [];
    public $timestamps = false;
}
