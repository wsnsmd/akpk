<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\TahunResource;
use App\Http\Resources\SettingResource;
use App\Models\Tahun;
use App\Models\Setting;

class AdminAuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    public function username()
    {
        return 'username';
    }

    public function showLoginForm()
    {
        return Inertia::render('Auth/Login', [
            'tahun' => TahunResource::collection(
                Tahun::where('aktif', true)
                       ->orderBy('tahun')
                       ->get()
            ),
        ]);
    }

    // public function handleLogin(Request $request)
    // {
    //     if(Auth::guard('webadmin')->attempt($request->only(['username', 'password'])))
    //         return redirect()->route('dashboard');

    //     return redirect()->back()->with('error', 'Invalid Credentials');
    // }

    protected function authenticated(Request $request, $user)
    {
        // dd($user);
        $request->session()->put('apps_tahun', $request->tahun);
    }

    protected function validateLogin(Request $request)
    {
        $request->validate([
            $this->username() => 'required|string',
            'password' => 'required|string',
            'tahun' => 'required',
        ]);
    }

    public function logout()
    {
        \Request::session()->flush();
        Auth::guard('webadmin')->logout();
        return redirect()->route('login');
    }

    // protected function loggedOut(Request $request)
    // {
    //     $request->session()->flush();
    // }

    protected function guard()
    {
        return Auth::guard('webadmin');
    }
}
