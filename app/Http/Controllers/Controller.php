<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Request;
use Auth;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $apps_tahun;

    public function __construct() 
    {
        $this->apps_tahun = Request::session()->get('apps_tahun');
    }

    public function checkAdmin()
    {
        if(!Auth::user()->hasRole('admin'))
            abort(403);
    }

    public function checkPeda()
    {
        abort(404);
        if(!Auth::user()->hasRole('pd'))
            abort(403);
    }

    public function checkKabkot()
    {
        abort(404);
        if(!Auth::user()->hasRole('kabkot'))
            abort(403);
    }
}
