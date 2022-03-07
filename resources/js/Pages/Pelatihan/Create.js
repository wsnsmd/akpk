import React, { useEffect } from 'react';
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Components/TextInput';
import TextAreaInput from '@/Components/TextAreaInput';
import SelectInput from '@/Components/SelectInput';

const Create = () => {
  const { jenis } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    jenis_id: jenis[0].id || '',
    rumpun_id: '',
    nama: '',
    deskripsi: '',
    biaya: '',
    hari: '',
    jp: '',
    is_tampil: '1',
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('pelatihan.store'));
  }

  const optionJenis = jenis.map((jeni) => (
    <option key={jeni.id} value={jeni.id}>
      {jeni.nama}
    </option>
  ));

  const optionRumpun = jenis.find(item => item.id == data.jenis_id)?.rumpun.map((rumpun) => (
    <option key={rumpun.id} value={rumpun.id}>
      {rumpun.nama} ({rumpun.kode})
    </option>
  ));

  function handleJenisChange(e) {
    setData('jenis_id', e.target.value);
  }

  function handleRumpunChange(e) {
    setData('rumpun_id', e.target.value);
  }

  useEffect(() => {
    setData('rumpun_id', '');
  }, [ data.jenis_id ])

  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            <InertiaLink
              href={route('pelatihan')}
              className="text-yellow-600 hover:text-yellow-700"
            >
              Pelatihan
            </InertiaLink>
            <span className="mx-2 font-medium text-yellow-600">/</span>
            Tambah Data
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto p-6">
        <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
          <form name="createForm" onSubmit={handleSubmit}>
            <div className="flex flex-wrap p-8 -mb-8 -mr-6">
              <SelectInput
                className="w-full pb-4 pr-6"
                label="Jenis Pelatihan"
                name="jenis_id"
                errors={errors.jenis_id}
                value={data.jenis_id}
                onChange={handleJenisChange}
              >
                {optionJenis}
              </SelectInput>
              <SelectInput
                className="w-full pb-4 pr-6"
                label="Rumpun Pelatihan"
                name="rumpun_id"
                errors={errors.rumpun_id}
                value={data.rumpun_id}
                require={true}
                onChange={handleRumpunChange}
              >
                <option value="" disabled>-- Pilih Rumpun --</option>
                {optionRumpun}
              </SelectInput>
              <TextInput
                className="w-full pb-4 pr-6"
                label="Nama Pelatihan"
                name="nama"
                placeholder="Nama Pelatihan..."
                errors={errors.nama}
                value={data.nama}
                require={true}
                onChange={e => setData('nama', e.target.value)}
              />
              <TextInput
                className="w-full pb-4 pr-6 lg:w-2/4"
                label="Biaya / Orang"
                name="biaya"
                placeholder="Biaya..."
                errors={errors.biaya}
                value={data.biaya}
                require={true}
                onChange={e => setData('biaya', e.target.value)}
              />
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/4"
                label="Jumlah Hari"
                name="hari"
                placeholder="Jumlah Hari..."
                errors={errors.hari}
                value={data.hari}
                require={true}
                onChange={e => setData('hari', e.target.value)}
              />
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/4"
                label="Jumlah JP"
                name="jp"
                placeholder="Jumlah JP..."
                errors={errors.jp}
                value={data.jp}
                require={true}
                onChange={e => setData('jp', e.target.value)}
              />              
              <TextAreaInput
                className="w-full pb-4 pr-6"
                label="Deskripsi"
                name="deskripsi"
                placeholder="Deskripsi..."
                rows="4"
                errors={errors.deskripsi}
                value={data.deskripsi}
                onChange={e => setData('deskripsi', e.target.value)}
              />
              <SelectInput
                className="w-full pb-8 pr-6 lg:w-1/3"
                label="Tampil"
                name="is_tampil"
                errors={errors.is_tampil}
                value={data.is_tampil}
                onChange={e => setData('is_tampil', e.target.value)}
              >
                <option value="0">Tidak</option>
                <option value="1">Ya</option>
              </SelectInput>
            </div>
            <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
              <LoadingButton
                loading={processing}
                type="submit"
                className="ml-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Simpan
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Create.layout = page => <Layout title="Tambah Pelatihan" children={page} />;

export default Create;
