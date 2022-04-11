<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\UbarResource;
use App\Models\Ubar;
use App\Http\Requests\UbarStoreRequest;
use App\Http\Requests\UbarUpdateRequest;

class UbarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('UsulanBaru/Index', [
            'usulan' => UbarResource::collection(
                Ubar::where('admin_id', Auth::user()->id)
                ->where('tahun', $this->apps_tahun)
                ->get()
            )
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('UsulanBaru/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UbarStoreRequest $request)
    {
        if($request->validated()) 
        {
            $user = Auth::user();
            $ubar = new Ubar;
            $ubar->admin_id = $user->id;
            $ubar->nama = $request->nama;
            $ubar->keterangan = $request->keterangan;
            $ubar->param = $request->param;
            $ubar->tahun = $this->apps_tahun;

            if($ubar->save())
            {
                return Redirect::route('ubar.index')->with('success', 'Usulan pelatihan baru berhasil ditambahkan.');
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ubar  $ubar
     * @return \Illuminate\Http\Response
     */
    public function show(Ubar $ubar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ubar  $ubar
     * @return \Illuminate\Http\Response
     */
    public function edit(Ubar $ubar)
    {
        $this->checkOwner($ubar);
        return Inertia::render('UsulanBaru/Edit', [
            'ubar' => new UbarResource($ubar),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ubar  $ubar
     * @return \Illuminate\Http\Response
     */
    public function update(UbarUpdateRequest $request, Ubar $ubar)
    {
        $this->checkOwner($ubar);
        $ubar->update($request->validated());
        return Redirect::route('ubar.index')->with('success', 'Usulan pelatihan berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ubar  $ubar
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ubar $ubar)
    {
        $ubar->delete();
        return Redirect::route('ubar.index')->with('success', 'Usulan pelatihan baru berhasil dihapus.');
    }

    public function checkOwner($object)
    {
        if(!Auth::user()->owns($object, 'admin_id'))
            abort(403);
    }
}
