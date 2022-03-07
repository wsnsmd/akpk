<?php

namespace App\Http\Middleware;

use App\Http\Resources\AuthResource;
use App\Http\Resources\SettingResource;
use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Setting;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {        
        return array_merge(parent::share($request), [
            'auth' => function () {
                return [
                    'user' => Auth::check() ? new AuthResource(Auth::user()) : null
                ];
            },
            'flash' => function () use ($request) {
                return [
                    'success' => $request->session()->get('success'),
                    'error' => $request->session()->get('error'),
                ];
            },
            'apps' => function () use ($request) {
                return [
                    'tahun' => $request->session()->get('apps_tahun'),
                ];
            },
            'setting' => function () use ($request) {
                $setting = SettingResource::collection(Setting::all());
                return [
                    'copyright' => $setting[2]->value,
                    'tahun' => $setting[3]->value,
                ];
            },
        ]);
    }
}
