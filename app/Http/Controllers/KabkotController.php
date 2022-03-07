<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\KabkotCollection;
use App\Http\Resources\KabkotResource;
use App\Http\Resources\AdminResource;
use App\Models\Kabkot;
use App\Models\Admin;
use App\Http\Requests\KabkotStoreRequest;
use App\Http\Requests\KabkotUpdateRequest;

class KabkotController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->checkAdmin();
        return Inertia::render('Kabkot/Index', [
            'filters' => Request::all('search', 'trashed'),
            'kabkot' => KabkotResource::collection(
                Kabkot::orderBy('nama')
                    ->filter(Request::only('search', 'trashed'))
                    ->paginate()                    
                    ->appends(Request::all())
            ),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->checkAdmin();
        return Inertia::render('Kabkot/Create', [
            'admin' => AdminResource::collection(
                Admin::orderBy('name')
                    ->where('level', 2)
                    ->get()
            )
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(KabkotStoreRequest $request)
    {
        $this->checkAdmin();
        Kabkot::create($request->validated());
        return Redirect::route('kabkot')->with('success', 'Kabupaten / Kota berhasil dibuat.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kabkot  $kabkot
     * @return \Illuminate\Http\Response
     */
    public function show(Kabkot $kabkot)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kabkot  $kabkot
     * @return \Illuminate\Http\Response
     */
    public function edit(Kabkot $kabkot)
    {
        $this->checkAdmin();
        return Inertia::render('Kabkot/Edit', [
            'kabkot' => new KabkotResource($kabkot),
            'admin' => AdminResource::collection(
                Admin::orderBy('name')
                    ->where('level', 2)
                    ->get()
            )
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Kabkot  $kabkot
     * @return \Illuminate\Http\Response
     */
    public function update(KabkotUpdateRequest $request, Kabkot $kabkot)
    {
        $this->checkAdmin();
        $kabkot->update($request->validated());
        return Redirect::route('kabkot')->with('success', 'Kabupaten / Kota berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kabkot  $kabkot
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kabkot $kabkot)
    {
        $this->checkAdmin();
        $kabkot->delete();
        return Redirect::route('kabkot')->with('success', 'Kabupaten / Kota berhasil dihapus.');
    }
}
