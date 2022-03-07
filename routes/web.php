<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth
Route::get('login')->name('login')->uses('Auth\AdminAuthController@showLoginForm');
Route::post('login')->name('login.attempt')->uses('Auth\AdminAuthController@login');
Route::post('logout')->name('logout')->uses('Auth\AdminAuthController@logout');

// Dashboard
Route::get('/')->name('dashboard')->uses('DashboardController')->middleware('auth:webadmin');

// Pengguna
Route::get('pengguna')->name('pengguna')->uses('PenggunaController@index')->middleware('remember', 'auth:webadmin');
Route::get('pengguna/admin/create')->name('pengguna.admin.create')->uses('PenggunaController@createAdmin')->middleware('auth:webadmin');
Route::post('pengguna/admin')->name('pengguna.admin.store')->uses('PenggunaController@storeAdmin')->middleware('auth:webadmin');
Route::delete('pengguna/admin/{admin}')->name('pengguna.admin.destroy')->uses('PenggunaController@destroyAdmin')->middleware('auth:webadmin');
Route::get('pengguna/admin/{admin}/edit')->name('pengguna.admin.edit')->uses('PenggunaController@editAdmin')->middleware('auth:webadmin');
Route::put('pengguna/admin/{admin}')->name('pengguna.admin.update')->uses('PenggunaController@updateAdmin')->middleware('auth:webadmin');

// Tahun
Route::get('tahun')->name('tahun')->uses('TahunController@index')->middleware('remember', 'auth:webadmin');
Route::get('tahun/create')->name('tahun.create')->uses('TahunController@create')->middleware('auth:webadmin');
Route::post('tahun')->name('tahun.store')->uses('TahunController@store')->middleware('auth:webadmin');
Route::delete('tahun/{tahun}')->name('tahun.destroy')->uses('TahunController@destroy')->middleware('auth:webadmin');
Route::get('tahun/{tahun}/edit')->name('tahun.edit')->uses('TahunController@edit')->middleware('auth:webadmin');
Route::put('tahun/{tahun}')->name('tahun.update')->uses('TahunController@update')->middleware('auth:webadmin');

// Jenis
Route::get('jenis')->name('jenis')->uses('JenisController@index')->middleware('remember', 'auth:webadmin');
Route::get('jenis/create')->name('jenis.create')->uses('JenisController@create')->middleware('auth:webadmin');
Route::post('jenis')->name('jenis.store')->uses('JenisController@store')->middleware('auth:webadmin');
Route::delete('jenis/{jenis}')->name('jenis.destroy')->uses('JenisController@destroy')->middleware('auth:webadmin');
Route::get('jenis/{jenis}/edit')->name('jenis.edit')->uses('JenisController@edit')->middleware('auth:webadmin');
Route::put('jenis/{jenis}')->name('jenis.update')->uses('JenisController@update')->middleware('auth:webadmin');
Route::get('jenis/{jenis}/rumpun')->name('jenis.rumpun')->uses('JenisController@editRumpun')->middleware('auth:webadmin');
Route::post('jenis/{jenis}/rumpun')->name('jenis.rumpun.add')->uses('JenisController@addRumpun')->middleware('auth:webadmin');
Route::post('jenis/{jenis}/rumpun/{rumpun}/destroy')->name('jenis.rumpun.destroy')->uses('JenisController@destroyRumpun')->middleware('auth:webadmin');

// Kabupaten / Kota
Route::get('kabkot')->name('kabkot')->uses('KabkotController@index')->middleware('remember', 'auth:webadmin');
Route::get('kabkot/create')->name('kabkot.create')->uses('KabkotController@create')->middleware('auth:webadmin');
Route::post('kabkot')->name('kabkot.store')->uses('KabkotController@store')->middleware('auth:webadmin');
Route::delete('kabkot/{kabkot}')->name('kabkot.destroy')->uses('KabkotController@destroy')->middleware('auth:webadmin');
Route::get('kabkot/{kabkot}/edit')->name('kabkot.edit')->uses('KabkotController@edit')->middleware('auth:webadmin');
Route::put('kabkot/{kabkot}')->name('kabkot.update')->uses('KabkotController@update')->middleware('auth:webadmin');

// Perangkat Daerah
Route::get('perangkatdaerah')->name('peda')->uses('PedaController@index')->middleware('remember', 'auth:webadmin');
Route::get('perangkatdaerah/create')->name('peda.create')->uses('PedaController@create')->middleware('auth:webadmin');
Route::post('perangkatdaerah')->name('peda.store')->uses('PedaController@store')->middleware('auth:webadmin');
Route::delete('perangkatdaerah/{peda}')->name('peda.destroy')->uses('PedaController@destroy')->middleware('auth:webadmin');
Route::get('perangkatdaerah/{peda}/edit')->name('peda.edit')->uses('PedaController@edit')->middleware('auth:webadmin');
Route::put('perangkatdaerah/{peda}')->name('peda.update')->uses('PedaController@update')->middleware('auth:webadmin');

// Rumpun
Route::get('rumpun')->name('rumpun')->uses('RumpunController@index')->middleware('remember', 'auth:webadmin');
Route::get('rumpun/create')->name('rumpun.create')->uses('RumpunController@create')->middleware('auth:webadmin');
Route::post('rumpun')->name('rumpun.store')->uses('RumpunController@store')->middleware('auth:webadmin');
Route::delete('rumpun/{rumpun}')->name('rumpun.destroy')->uses('RumpunController@destroy')->middleware('auth:webadmin');
Route::get('rumpun/{rumpun}/edit')->name('rumpun.edit')->uses('RumpunController@edit')->middleware('auth:webadmin');
Route::put('rumpun/{rumpun}')->name('rumpun.update')->uses('RumpunController@update')->middleware('auth:webadmin');

// Pelatihan
Route::get('pelatihan')->name('pelatihan')->uses('PelatihanController@index')->middleware('remember', 'auth:webadmin');
Route::get('pelatihan/create')->name('pelatihan.create')->uses('PelatihanController@create')->middleware('auth:webadmin');
Route::post('pelatihan')->name('pelatihan.store')->uses('PelatihanController@store')->middleware('auth:webadmin');
Route::delete('pelatihan/{pelatihan}')->name('pelatihan.destroy')->uses('PelatihanController@destroy')->middleware('auth:webadmin');
Route::get('pelatihan/{pelatihan}/edit')->name('pelatihan.edit')->uses('PelatihanController@edit')->middleware('auth:webadmin');
Route::put('pelatihan/{pelatihan}')->name('pelatihan.update')->uses('PelatihanController@update')->middleware('auth:webadmin');
Route::get('pelatihan/{pelatihan}')->name('pelatihan.show')->uses('PelatihanController@show')->middleware('auth:webadmin');
Route::get('pencarian')->name('pelatihan.search')->uses('PelatihanController@search')->middleware('auth:webadmin');
Route::get('pencarian/data')->name('pelatihan.search.data')->uses('PelatihanController@searchData')->middleware('auth:webadmin');

// Usulan
Route::get('usulan/index')->name('usulan.index')->uses('UsulanController@index')->middleware('auth:webadmin');
Route::get('usulan/index/peda')->name('usulan.index.peda')->uses('UsulanController@indexPeda')->middleware('remember', 'auth:webadmin');
Route::get('usulan/index/peda/create')->name('usulan.index.peda.create')->uses('UsulanController@createPeda')->middleware('auth:webadmin');
Route::get('usulan/index/peda/data')->name('usulan.index.peda.data')->uses('UsulanController@indexPedaData')->middleware('auth:webadmin');
Route::post('usulan/index/peda/store')->name('usulan.index.peda.store')->uses('UsulanController@storePeda')->middleware('auth:webadmin');
Route::get('usulan/index/peda/{usulan}/edit')->name('usulan.index.peda.edit')->uses('UsulanController@editPeda')->middleware('auth:webadmin');
Route::put('usulan/index/peda/{usulan}')->name('usulan.index.peda.update')->uses('UsulanController@updatePeda')->middleware('auth:webadmin');
Route::delete('usulan/index/peda/{usulan}')->name('usulan.index.peda.destroy')->uses('UsulanController@destroyPeda')->middleware('auth:webadmin');
Route::get('usulan/index/kabkot')->name('usulan.index.kabkot')->uses('UsulanController@indexKabkot')->middleware('remember', 'auth:webadmin');
Route::get('usulan/index/kabkot/create')->name('usulan.index.kabkot.create')->uses('UsulanController@createKabkot')->middleware('auth:webadmin');
Route::get('usulan/index/kabkot/data')->name('usulan.index.kabkot.data')->uses('UsulanController@indexKabkot')->middleware('auth:webadmin');
Route::post('usulan/index/kabkot/store')->name('usulan.index.kabkot.store')->uses('UsulanController@storeKabkot')->middleware('auth:webadmin');
Route::get('usulan/index/kabkot/{usulan}/edit')->name('usulan.index.kabkot.edit')->uses('UsulanController@editKabkot')->middleware('auth:webadmin');
Route::put('usulan/index/kabkot/{usulan}')->name('usulan.index.kabkot.update')->uses('UsulanController@updateKabkot')->middleware('auth:webadmin');
Route::delete('usulan/index/kabkot/{usulan}')->name('usulan.index.kabkot.destroy')->uses('UsulanController@destroyKabkot')->middleware('auth:webadmin');
Route::get('usulan/peda')->name('usulan.peda')->uses('UsulanController@indexAdminPeda')->middleware('auth:webadmin');
Route::post('usulan/data/show')->name('usulan.data.show')->uses('UsulanController@showUsulanAdmin')->middleware('auth:webadmin');
Route::post('usulan/bulk/delete')->name('usulan.bulk.delete')->uses('UsulanController@bulkDestroy')->middleware('auth:webadmin');
Route::post('usulan/bulk/verify')->name('usulan.bulk.verify')->uses('UsulanController@bulkVerify')->middleware('auth:webadmin');
Route::get('usulan/kabkot')->name('usulan.kabkot')->uses('UsulanController@indexAdminKabkot')->middleware('remember', 'auth:webadmin');
Route::post('usulan/kabkot/show')->name('usulan.kabkot.show')->uses('UsulanController@showAdminKabkot')->middleware('auth:webadmin');

// Usulan Baru
Route::get('usulan/baru/index')->name('ubar.index')->uses('UbarController@index')->middleware('remember', 'auth:webadmin');
Route::get('usulan/baru/create')->name('ubar.create')->uses('UbarController@create')->middleware('auth:webadmin');
Route::post('usulan/baru')->name('ubar.store')->uses('UbarController@store')->middleware('auth:webadmin');
Route::delete('usulan/baru/{ubar}')->name('ubar.destroy')->uses('UbarController@destroy')->middleware('auth:webadmin');
Route::get('usulan/baru/{ubar}/edit')->name('ubar.edit')->uses('UbarController@edit')->middleware('auth:webadmin');
Route::put('usulan/baru/{ubar}')->name('ubar.update')->uses('UbarController@update')->middleware('auth:webadmin');

// Component
Route::get('component/select/pelatihan')->name('component.select.pelatihan')->uses('PelatihanController@comSelect')->middleware('auth:webadmin');

// 500 error
Route::get('500', function () {
    echo $fail;
});
