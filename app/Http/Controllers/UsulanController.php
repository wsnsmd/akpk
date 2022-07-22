<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\PelatihanCollection;
use App\Http\Resources\PelatihanResource;
use App\Http\Resources\JenisCollection;
use App\Http\Resources\JenisResource;
use App\Http\Resources\UsulanResource;
use App\Http\Resources\PedaResource;
use App\Http\Resources\KabkotResource;
use App\Http\Resources\UbarResource;
use App\Models\Usulan;
use App\Models\Pelatihan;
use App\Models\Jenis;
use App\Models\Peda;
use App\Models\Kabkot;
use App\Models\Ubar;
use App\Http\Requests\UsulanPedaStoreRequest;
use App\Http\Requests\UsulanPedaUpdateRequest;
use App\Http\Requests\UsulanKabkotStoreRequest;
use App\Http\Requests\UsulanKabkotUpdateRequest;
use App\Http\Requests\UbarStoreRequest;
use App\Http\Requests\UbarUpdateRequest;

use DB;
use Storage;

class UsulanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        switch($user->level)
        {
            case 2:
                return Redirect::route('usulan.index.kabkot');
            case 3:
                return Redirect::route('usulan.index.peda');
            default:
                dd('Admin');
                break;
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Usulan  $usulan
     * @return \Illuminate\Http\Response
     */
    public function show(Usulan $usulan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Usulan  $usulan
     * @return \Illuminate\Http\Response
     */
    public function edit(Usulan $usulan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Usulan  $usulan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Usulan $usulan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Usulan  $usulan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Usulan $usulan)
    {
        //
    }

    public function indexAdminPeda()
    {
        $peda = PedaResource::collection(
                    Peda::orderBy('nama')
                        ->get()
        );

        return Inertia::render('Usulan/IndexAdminPeda', [
            'usulan' => UsulanResource::collection(
                Usulan::where('admin_id', Auth::user()->id)
                ->where('tahun', $this->apps_tahun)
                ->get()
            ),
            'ubar' => UbarResource::collection(
                Ubar::where('admin_id', Auth::user()->id)
                ->where('tahun', $this->apps_tahun)
                ->get()
            ),
            'peda' => $peda,
        ]);
    }

    public function showUsulanAdmin()
    {
        $request = Request::all();

        $data = [];
        DB::statement(DB::raw('set @rownum=0'));
        $data['usulan'] = UsulanResource::collection(
            Usulan::where('admin_id', $request['admin_id'])
                ->where('tahun', $this->apps_tahun)
                ->get(['*', DB::raw('@rownum  := @rownum  + 1 AS rownum')])
        );
        DB::statement(DB::raw('set @rownum=0'));
        $data['ubar'] = UbarResource::collection(
            Ubar::where('admin_id', $request['admin_id'])
                ->where('tahun', $this->apps_tahun)
                ->get(['*', DB::raw('@rownum  := @rownum  + 1 AS rownum')])
        );

        return response()->json($data, 200);
    }

    public function indexAdminKabkot()
    {
        $kabkot = KabkotResource::collection(
                    Kabkot::orderBy('nama')
                        ->get()
        );

        return Inertia::render('Usulan/IndexAdminKabkot', [
            'usulan' => UsulanResource::collection(
                Usulan::where('admin_id', Auth::user()->id)
                ->where('tahun', $this->apps_tahun)
                ->get()
            ),
            'ubar' => UbarResource::collection(
                Ubar::where('admin_id', Auth::user()->id)
                ->where('tahun', $this->apps_tahun)
                ->get()
            ),
            'kabkot' => $kabkot,
        ]);
    }

    public function indexPeda()
    {        
        $this->checkPeda();
        return Inertia::render('Usulan/IndexPeda', [
            'usulan' => UsulanResource::collection(
                Usulan::where('admin_id', Auth::user()->id)
                ->where('tahun', $this->apps_tahun)
                ->get()
            ),
            'inputdata' => $this->apps_input,
        ]);
    }

    public function indexPedaData() 
    {
        $this->checkPeda();
        $data = UsulanResource::collection(
            Usulan::where('tahun', $this->apps_tahun)
            ->paginate()
            ->appends(Request::all())
        );
        return response()->json($data, 200);
    }

    public function createPeda()
    {
        $this->checkPeda();
        $this->checkInput();
        return Inertia::render('Usulan/CreatePeda', [
            'jenis' => JenisResource::collection(Jenis::all()),
        ]);
    }

    public function storePeda(UsulanPedaStoreRequest $request)    
    {
        $this->checkPeda();
        if($request->validated())
        {
            $user = Auth::user();
            $pelatihan_id = $request->pelatihan_id;
            $jumlah = $request->jumlah;
            $file = $request->file('lampiran');
            $pelatihan = Pelatihan::find($pelatihan_id);
            $nama_file = time().'.'.$file->getClientOriginalExtension();
            $path = $request->lampiran->storeAs('public/files/lampiran', $nama_file);            
            $usulan = new Usulan;
            $usulan->admin_id = $user->id;
            $usulan->tahun = $this->apps_tahun;
            $usulan->pelatihan_id = $pelatihan_id;
            $usulan->pnama = $pelatihan->nama;
            $usulan->pjp = $pelatihan->jp;
            $usulan->phari = $pelatihan->hari;
            $usulan->pbiaya = $pelatihan->biaya;
            $usulan->jumlah = $jumlah;
            $usulan->level = $user->level;
            $usulan->lampiran = $path;

            if($usulan->save())
            {
                return Redirect::route('usulan.index.peda')->with('success', 'Usulan Pelatihan berhasil ditambahkan.');
            }
        }
    }

    public function editPeda(Usulan $usulan)
    {
        $this->checkPeda();
        $this->checkOwner($usulan);
        $this->checkInput();

        return Inertia::render('Usulan/EditPeda', [
            'usulan' => new UsulanResource($usulan),
        ]);
    }

    public function updatePeda(UsulanPedaUpdateRequest $request, Usulan $usulan)
    {
        $this->checkPeda();
        $this->checkOwner($usulan);
            
        if($request->validated())
        {
            $usulan->jumlah = $request->jumlah;
            if(!empty($request->lampiran))
            {
                $file_lama = $usulan->lampiran;
                $file = $request->file('lampiran');
                $nama_file = time().'.'.$file->getClientOriginalExtension();
                $path = $request->lampiran->storeAs('public/files/lampiran', $nama_file);
                $usulan->lampiran = $path;
                Storage::delete($file_lama);
            }
            $usulan->save();
            return Redirect::route('usulan.index.peda')->with('success', 'Usulan Pelatihan berhasil diubah.');
        }
    }

    public function destroyPeda(Usulan $usulan)
    {
        $this->checkPeda();
        $this->checkInput();
        $file = $usulan->lampiran;
        $usulan->delete();
        Storage::delete($file);
        return Redirect::route('usulan.index.peda')->with('success', 'Usulan pelatihan berhasil dihapus.');
    }

    public function indexKabkot()
    {        
        $this->checkKabkot();
        return Inertia::render('Usulan/IndexKabkot', [
            'usulan' => UsulanResource::collection(
                Usulan::where('admin_id', Auth::user()->id)
                ->where('tahun', $this->apps_tahun)
                ->get()
            )
        ]);
    }

    public function indexKabkotData() 
    {
        $this->checkKabkot();
        $data = UsulanResource::collection(
            Usulan::where('tahun', $this->apps_tahun)
            ->paginate()
            ->appends(Request::all())
        );
        return response()->json($data, 200);
    }

    public function createKabkot()
    {
        $this->checkKabkot();
        $this->checkInput();
        return Inertia::render('Usulan/CreateKabkot', [
            'jenis' => JenisResource::collection(Jenis::all()),
        ]);
    }

    public function storeKabkot(UsulanKabkotStoreRequest $request)    
    {
        $this->checkKabkot();
        if($request->validated())
        {
            $user = Auth::user();
            $pelatihan_id = $request->pelatihan_id;
            $jumlah = $request->jumlah;
            $file = $request->file('lampiran');
            $pelatihan = Pelatihan::find($pelatihan_id);
            $nama_file = time().'.'.$file->getClientOriginalExtension();
            $path = $request->lampiran->storeAs('public/files/lampiran', $nama_file);            
            $usulan = new Usulan;
            $usulan->admin_id = $user->id;
            $usulan->tahun = $this->apps_tahun;
            $usulan->pelatihan_id = $pelatihan_id;
            $usulan->pnama = $pelatihan->nama;
            $usulan->pjp = $pelatihan->jp;
            $usulan->phari = $pelatihan->hari;
            $usulan->pbiaya = $pelatihan->biaya;
            $usulan->jumlah = $jumlah;
            $usulan->polabiaya = $request->polabiaya;
            $usulan->level = $user->level;
            $usulan->lampiran = $path;

            if($usulan->save())
            {
                return Redirect::route('usulan.index.kabkot')->with('success', 'Usulan Pelatihan berhasil ditambahkan.');
            }
        }
    }

    public function editKabkot(Usulan $usulan)
    {
        $this->checkKabkot();
        $this->checkOwner($usulan);
        $this->checkInput();

        return Inertia::render('Usulan/EditKabkot', [
            'usulan' => new UsulanResource($usulan),
        ]);
    }

    public function updateKabkot(UsulanKabkotUpdateRequest $request, Usulan $usulan)
    {
        $this->checkKabkot();
        $this->checkOwner($usulan);

        if($request->validated())
        {
            $usulan->jumlah = $request->jumlah;
            $usulan->polabiaya = $request->polabiaya;
            if(!empty($request->lampiran))
            {
                $file_lama = $usulan->lampiran;
                $file = $request->file('lampiran');
                $nama_file = time().'.'.$file->getClientOriginalExtension();
                $path = $request->lampiran->storeAs('public/files/lampiran', $nama_file);
                $usulan->lampiran = $path;
                Storage::delete($file_lama);
            }
            $usulan->save();
            return Redirect::route('usulan.index.kabkot')->with('success', 'Usulan Pelatihan berhasil diubah.');
        }
    }

    public function destroyKabkot(Usulan $usulan)
    {
        $this->checkKabkot();
        $this->checkInput();
        $file = $usulan->lampiran;
        $usulan->delete();
        Storage::delete($file);
        return Redirect::route('usulan.index.kabkot')->with('success', 'Usulan pelatihan berhasil dihapus.');
    }

    public function bulkVerify()
    {
        $request = Request::all();
        $usulan = $request['usulan'];
        $page = $request['page'];
        foreach ($usulan as $u) 
        {
            $data = Usulan::find($u['id']);
            if(!empty($data))
            {
                $data->is_verify = true;
                $data->save();
            }
        }
        if($page == 'peda')
            return Redirect::route('usulan.peda')->with('success', 'Usulan Pelatihan berhasil dihapus.');

        return Redirect::route('usulan.kabkot')->with('success', 'Usulan Pelatihan berhasil dihapus.');
    }

    public function bulkDestroy()
    {
        $request = Request::all();
        $usulan = $request['usulan'];
        $page = $request['page'];
        foreach ($usulan as $u) 
        {
            $data = Usulan::find($u['id']);
            if(!empty($data))
            {
                $data->delete();
            }
        }
        if($page == 'peda')
            return Redirect::route('usulan.peda')->with('success', 'Usulan Pelatihan berhasil dihapus.');

        return Redirect::route('usulan.kabkot')->with('success', 'Usulan Pelatihan berhasil dihapus.');
    }

    public function checkOwner($object)
    {
        if(!Auth::user()->owns($object, 'admin_id') && !Auth::user()->hasRole('admin'))
            abort(403);
    }
}
