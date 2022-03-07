<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\JenisCollection;
use App\Http\Resources\JenisResource;
use App\Http\Resources\RumpunSelectCollection;
use App\Http\Resources\RumpunSelectResource;
use App\Models\Jenis;
use App\Models\Rumpun;
use App\Models\JenisRumpun;
use App\Http\Requests\JenisStoreRequest;
use App\Http\Requests\JenisUpdateRequest;
use DB;
use Exception;

class JenisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->checkAdmin();
        return Inertia::render('Jenis/Index', [
            'filters' => Request::all('search', 'trashed'),
            'jenis' => JenisResource::collection(
                Jenis::orderBy('id')
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
        return Inertia::render('Jenis/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(JenisStoreRequest $request)
    {
        $this->checkAdmin();
        Jenis::create($request->validated());
        return Redirect::route('jenis')->with('success', 'Jenis Pelatihan berhasil dibuat.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Jenis  $jenis
     * @return \Illuminate\Http\Response
     */
    public function show(Jenis $jenis)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Jenis  $jenis
     * @return \Illuminate\Http\Response
     */
    public function edit(Jenis $jenis)
    {
        $this->checkAdmin();
        return Inertia::render('Jenis/Edit', [
            'jenis' => new JenisResource($jenis),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Jenis  $jenis
     * @return \Illuminate\Http\Response
     */
    public function update(JenisUpdateRequest $request, Jenis $jenis)
    {
        $this->checkAdmin();
        $jenis->update($request->validated());        
        return Redirect::route('jenis')->with('success', 'Jenis Pelatihan berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Jenis  $jenis
     * @return \Illuminate\Http\Response
     */
    public function destroy(Jenis $jenis)
    {
        $this->checkAdmin();
        $jenis->delete();
        return Redirect::route('jenis')->with('success', 'Jenis Pelatihan berhasil dihapus.');
    }

    public function editRumpun(Jenis $jenis)
    {
        $this->checkAdmin();
        $jrumpun = DB::table('jenis_rumpun')
                    ->join('rumpuns', 'jenis_rumpun.rumpun_id', 'rumpuns.id')
                    ->select('jenis_rumpun.jenis_id', 'jenis_rumpun.rumpun_id', 'rumpuns.nama')
                    ->where('jenis_rumpun.jenis_id', $jenis->id)
                    ->get();
        return Inertia::render('Jenis/Rumpun', [
            'jenis' => new JenisResource($jenis),
            'rumpun' => RumpunSelectResource::collection(Rumpun::all()),
            'jrumpun' => $jenis->getRumpun
        ]);
    }

    public function addRumpun(Request $request, Jenis $jenis)
    {
        $this->checkAdmin();
        try
        {
            JenisRumpun::create($request::all());
        }
        catch(Exception $exception) 
        {
            return Redirect::route('jenis.rumpun', ['jenis' => $jenis->id])->with('error', 'Rumpun gagal ditambahkan.');
        }

        return Redirect::route('jenis.rumpun', ['jenis' => $jenis->id])->with('success', 'Rumpun berhasil ditambahkan.');
    }

    public function destroyRumpun(Request $request, Jenis $jenis, $rumpun)
    {
        $this->checkAdmin();
        $jenis_id = $jenis->id;
        $rumpun_id = $rumpun;

        JenisRumpun::where('jenis_id', $jenis_id)
                    ->where('rumpun_id', $rumpun_id)
                    ->delete();
        
        return Redirect::route('jenis.rumpun', ['jenis' => $jenis_id])->with('success', 'Rumpun berhasil dihapus.');
    }
}
