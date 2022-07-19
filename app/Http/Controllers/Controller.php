<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Request;
use App\Models\Setting;
use App\Http\Resources\SettingResource;
use Auth;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $apps_tahun;
    protected $apps_input;

    public function __construct() 
    {
        $this->apps_tahun = Request::session()->get('apps_tahun');
        $setting = SettingResource::collection(Setting::all());
        $this->apps_input = ($setting[4]->value > 0 ? true : false);
    }

    public function checkAdmin()
    {
        if(!Auth::user()->hasRole('admin'))
            abort(403);
    }

    public function checkPeda()
    {
        if(!Auth::user()->hasRole('pd') && !Auth::user()->hasRole('admin'))
            abort(403);
    }

    public function checkKabkot()
    {
        if(!Auth::user()->hasRole('kabkot')  && !Auth::user()->hasRole('admin'))
            abort(403);
    }

    public function checkInput()
    {
        if(!$this->apps_input)
            abort(403);
    }
}
