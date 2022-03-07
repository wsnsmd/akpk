<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\AdminCollection;
use App\Http\Resources\AdminResource;
use App\Models\Role;
use App\Models\Admin;
use App\Http\Requests\PenggunaAdminStoreRequest;
use App\Http\Requests\PenggunaAdminUpdateRequest;

class PenggunaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->checkAdmin();
        return Inertia::render('Pengguna/Index', [
            'filters' => Request::all('search', 'trashed'),
            'admin' => AdminResource::collection(
                Admin::orderBy('name')
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function createAdmin() 
    {
        $this->checkAdmin();
        return Inertia::render('Pengguna/CreateAdmin');
    }

    public function storeAdmin(PenggunaAdminStoreRequest $request)
    {
        $this->checkAdmin();
        $data = Admin::create($request->all());

        $user = Admin::find($data->id);
        $user->attachRole($request->level);

        return Redirect::route('pengguna')->with('success', 'Pengguna berhasil dibuat.');
    }

    public function editAdmin(Admin $admin)
    {
        $this->checkAdmin();
        return Inertia::render('Pengguna/EditAdmin', [
            'user' => new AdminResource($admin),
        ]);
    }

    public function updateAdmin(Admin $admin, PenggunaAdminUpdateRequest $request)
    {
        $this->checkAdmin();
        $admin->update($request->validated());
        
        return Redirect::route('pengguna')->with('success', 'Pengguna berhasil diubah.');

    }

    public function destroyAdmin(Admin $admin)
    {
        $this->checkAdmin();
        $admin->delete();

        return Redirect::route('pengguna')->with('success', 'Pengguna berhasil dihapus.');
    }
}
