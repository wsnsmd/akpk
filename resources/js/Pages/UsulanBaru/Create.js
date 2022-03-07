import React from 'react';
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Components/TextInput';
import TextAreaInput from '@/Components/TextAreaInput';

const Create = () => {
  const { data, setData, errors, post, processing } = useForm({
    nama: '',
    keterangan: '',
  });
  
  function handleSubmit(e) {
    e.preventDefault();
    post(route('ubar.store'));
  }

  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            <InertiaLink
              href={route('ubar.index')}
              className="text-yellow-600 hover:text-yellow-700"
            >
              Usulan Pelatihan Baru
            </InertiaLink>
            <span className="mx-2 font-medium text-yellow-600">/</span>
            Tambah
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto p-6">
        <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
          <form name="createForm" onSubmit={handleSubmit}>
            <div className="flex flex-wrap p-8 -mb-8 -mr-6">
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
              <TextAreaInput
                className="w-full pb-8 pr-6"
                label="Keterangan"
                name="keterangan"
                placeholder="Keterangan..."
                rows="4"
                errors={errors.keterangan}
                value={data.keterangan}
                require={true}
                onChange={e => setData('keterangan', e.target.value)}
              />
            </div>
            <div className="flex items-center text-left px-8 py-4 bg-gray-100 border-t border-gray-200">
              <button
                type="button"
                className="ml-auto justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                onClick={() => window.history.back()}
              >
                Batal
              </button>
              <LoadingButton
                loading={processing}
                type="submit"
                className="ml-2 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
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

Create.layout = page => <Layout title="Buat Usulan Pelatihan Baru" children={page} />;

export default Create;
