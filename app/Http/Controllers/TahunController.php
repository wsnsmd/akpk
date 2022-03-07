<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\TahunCollection;
use App\Http\Resources\TahunResource;
use App\Models\Tahun;
use App\Http\Requests\TahunStoreRequest;
use App\Http\Requests\TahunUpdateRequest;

class TahunController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->checkAdmin();
        return Inertia::render('Tahun/Index', [
            'filters' => Request::all('search', 'trashed'),
            'tahun' => TahunResource::collection(
                Tahun::orderBy('tahun')
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
        return Inertia::render('Tahun/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TahunStoreRequest $request)
    {
        $this->checkAdmin();
        Tahun::create($request->validated());
        return Redirect::route('tahun')->with('success', 'Tahun berhasil dibuat.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tahun  $tahun
     * @return \Illuminate\Http\Response
     */
    public function show(Tahun $tahun)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tahun  $tahun
     * @return \Illuminate\Http\Response
     */
    public function edit(Tahun $tahun)
    {
        $this->checkAdmin();
        return Inertia::render('Tahun/Edit', [
            'tahun' => new TahunResource($tahun),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tahun  $tahun
     * @return \Illuminate\Http\Response
     */
    public function update(TahunUpdateRequest $request, Tahun $tahun)
    {
        $this->checkAdmin();
        $tahun->update($request->validated());        
        return Redirect::route('tahun')->with('success', 'Tahun berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tahun  $tahun
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tahun $tahun)
    {
        $this->checkAdmin();
        $tahun->forceDelete();
        return Redirect::route('tahun')->with('success', 'Tahun berhasil dihapus.');
    }
}
