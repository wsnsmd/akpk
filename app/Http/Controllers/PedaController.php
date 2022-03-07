<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\PedaCollection;
use App\Http\Resources\PedaResource;
use App\Http\Resources\AdminResource;
use App\Models\Peda;
use App\Models\Admin;
use App\Http\Requests\PedaStoreRequest;
use App\Http\Requests\PedaUpdateRequest;

class PedaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->checkAdmin();
        return Inertia::render('Peda/Index', [
            'filters' => Request::all('search', 'trashed'),
            'peda' => PedaResource::collection(
                Peda::orderBy('nama')
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
        return Inertia::render('Peda/Create', [
            'admin' => AdminResource::collection(
                Admin::orderBy('name')
                    ->where('level', 3)
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
    public function store(PedaStoreRequest $request)
    {
        $this->checkAdmin();
        Peda::create($request->validated());
        return Redirect::route('peda')->with('success', 'Perangkat Daerah berhasil dibuat.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Peda  $peda
     * @return \Illuminate\Http\Response
     */
    public function show(Peda $peda)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Peda  $peda
     * @return \Illuminate\Http\Response
     */
    public function edit(Peda $peda)
    {
        $this->checkAdmin();
        return Inertia::render('Peda/Edit', [
            'peda' => new PedaResource($peda),
            'admin' => AdminResource::collection(
                Admin::orderBy('name')
                    ->where('level', 3)
                    ->get()
            )
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Peda  $peda
     * @return \Illuminate\Http\Response
     */
    public function update(PedaUpdateRequest $request, Peda $peda)
    {
        $this->checkAdmin();
        $peda->update($request->validated());
        return Redirect::route('peda')->with('success', 'Perangkat Daerah berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Peda  $peda
     * @return \Illuminate\Http\Response
     */
    public function destroy(Peda $peda)
    {
        $this->checkAdmin();
        $peda->delete();
        return Redirect::route('peda')->with('success', 'Perangkat Daerah berhasil dihapus.');
    }
}
