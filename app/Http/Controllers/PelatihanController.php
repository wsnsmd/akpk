<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\PelatihanCollection;
use App\Http\Resources\PelatihanResource;
use App\Http\Resources\ComSelectPelatihanResource;
use App\Http\Resources\JenisCollection;
use App\Http\Resources\JenisResource;
use App\Models\Pelatihan;
use App\Models\Jenis;
use App\Http\Requests\PelatihanStoreRequest;
use App\Http\Requests\PelatihanUpdateRequest;

class PelatihanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->checkAdmin();
        return Inertia::render('Pelatihan/Index', [
            'filters' => Request::all('search', 'trashed'),
            'pelatihan' => PelatihanResource::collection(
                Pelatihan::orderBy('nama')
                    ->filter(Request::only('search', 'trashed'))
                    ->paginate()                    
                    ->appends(Request::all())
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
        $this->checkAdmin();
        return Inertia::render('Pelatihan/Create', [
            'jenis' => JenisResource::collection(Jenis::all()),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PelatihanStoreRequest $request)
    {
        $this->checkAdmin();
        Pelatihan::create($request->validated());
        return Redirect::route('pelatihan')->with('success', 'Pelatihan berhasil dibuat.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pelatihan  $pelatihan
     * @return \Illuminate\Http\Response
     */
    public function show(Pelatihan $pelatihan)
    {
        return response()->json($pelatihan, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pelatihan  $pelatihan
     * @return \Illuminate\Http\Response
     */
    public function edit(Pelatihan $pelatihan)
    {
        $this->checkAdmin();
        return Inertia::render('Pelatihan/Edit', [
            'pelatihan' => new PelatihanResource($pelatihan),
            'jenis' => JenisResource::collection(Jenis::all()),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pelatihan  $pelatihan
     * @return \Illuminate\Http\Response
     */
    public function update(PelatihanUpdateRequest $request, Pelatihan $pelatihan)
    {
        $this->checkAdmin();
        $pelatihan->update($request->validated());        
        return Redirect::route('pelatihan')->with('success', 'Pelatihan berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pelatihan  $pelatihan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pelatihan $pelatihan)
    {
        $this->checkAdmin();
        $pelatihan->delete();
        return Redirect::route('pelatihan')->with('success', 'Pelatihan berhasil dihapus.');
    }

    public function search() 
    {
        return Inertia::render('Pelatihan/Search', [
            'pelatihan' => PelatihanResource::collection(
                Pelatihan::orderBy('jenis_id')
                ->get()
            ),
            'jenis' => JenisResource::collection(Jenis::all()),
        ]);
    }
    
    public function searchData() 
    {
        $request = Request::all();

        if(empty($request['jenis_id']))
        {
            if(empty($request['nama']))
            {
                $data = PelatihanResource::collection(
                    Pelatihan::where('is_tampil', true)->get(),
                );
            }
            else
            {
                $data = PelatihanResource::collection(
                    Pelatihan::where('nama', 'like', '%' . $request['nama'] . '%')
                    ->where('is_tampil', true)
                    ->get(),
                );
            }
        }
        else 
        {
            if(empty($request['rumpun_id']))
            {
                if(empty($request['nama']))
                {
                    $data = PelatihanResource::collection(
                        Pelatihan::where('jenis_id', $request['jenis_id'])
                        ->where('is_tampil', true)
                        ->get(),
                    );
                }
                else
                {
                    $data = PelatihanResource::collection(
                        Pelatihan::where('jenis_id', $request['jenis_id'])
                        ->where('nama', 'like', '%' . $request['nama'] . '%')
                        ->where('is_tampil', true)
                        ->get(),
                    );
                }
            }
            else 
            {
                if(empty($request['nama']))
                {
                    $data = PelatihanResource::collection(
                        Pelatihan::where('jenis_id', $request['jenis_id'])
                        ->where('rumpun_id', $request['rumpun_id'])
                        ->where('is_tampil', true)
                        ->get(),
                    );
                }
                else
                {
                    $data = PelatihanResource::collection(
                        Pelatihan::where('jenis_id', $request['jenis_id'])
                        ->where('rumpun_id', $request['rumpun_id'])
                        ->where('nama', 'like', '%' . $request['nama'] . '%')
                        ->where('is_tampil', true)
                        ->get(),
                    );
                }
            }
        }
        return response()->json($data, 200);
    }

    public function comSelect()
    {
        $jenis_id = Request::input('jenis_id');
        $rumpun_id = Request::input('rumpun_id');
        $data = ComSelectPelatihanResource::collection(
            Pelatihan::where('jenis_id', $jenis_id)
                ->where('rumpun_id', $rumpun_id)
                ->where('is_tampil', true)
                ->orderBy('nama')
                ->get()
        );
        return response()->json($data, 200);
    }
}
