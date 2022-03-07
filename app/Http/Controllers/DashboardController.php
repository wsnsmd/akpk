<?php

namespace App\Http\Controllers;

use Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        // $role = Auth::user()->getRoles()[0];
        // dd($role);
        return Inertia::render('Dashboard/Index');
    }
}
