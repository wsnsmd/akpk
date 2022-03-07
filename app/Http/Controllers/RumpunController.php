<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\RumpunCollection;
use App\Http\Resources\RumpunResource;
use App\Models\Rumpun;
use App\Http\Requests\RumpunStoreRequest;
use App\Http\Requests\RumpunUpdateRequest;

class RumpunController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->checkAdmin();
        return Inertia::render('Rumpun/Index', [
            'filters' => Request::all('search', 'trashed'),
            'rumpun' => RumpunResource::collection(
                Rumpun::orderBy('kode')
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
        return Inertia::render('Rumpun/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RumpunStoreRequest $request)
    {
        $this->checkAdmin();
        Rumpun::create($request->validated());
        return Redirect::route('rumpun')->with('success', 'Rumpun berhasil dibuat.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rumpun  $rumpun
     * @return \Illuminate\Http\Response
     */
    public function show(Rumpun $rumpun)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Rumpun  $rumpun
     * @return \Illuminate\Http\Response
     */
    public function edit(Rumpun $rumpun)
    {
        $this->checkAdmin();
        return Inertia::render('Rumpun/Edit', [
            'rumpun' => new RumpunResource($rumpun),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rumpun  $rumpun
     * @return \Illuminate\Http\Response
     */
    public function update(RumpunUpdateRequest $request, Rumpun $rumpun)
    {
        $this->checkAdmin();
        $rumpun->fill($request->input())->save();
        return Redirect::route('rumpun')->with('success', 'Rumpun berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rumpun  $rumpun
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rumpun $rumpun)
    {
        $this->checkAdmin();
        $rumpun->delete();
        return Redirect::route('rumpun')->with('success', 'Rumpun berhasil dihapus.');
    }
}
