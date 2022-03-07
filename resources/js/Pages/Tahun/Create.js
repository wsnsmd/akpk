import React from 'react';
import { InertiaLink, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';

const Create = () => {
  const { data, setData, errors, post, processing } = useForm({
    tahun: '',
    aktif: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('tahun.store'));
  }

  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            <InertiaLink
              href={route('tahun')}
              className="text-yellow-600 hover:text-yellow-700"
            >
              Tahun
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
              <TextInput
                className="w-full pb-8 pr-6 lg:w-2/3"
                label="Tahun"
                name="tahun"
                require={true}
                errors={errors.tahun}
                value={data.tahun}
                onChange={e => setData('tahun', e.target.value)}
              />
              <SelectInput
                className="w-full pb-8 pr-6 lg:w-1/3"
                label="Aktif"
                name="aktif"
                errors={errors.aktif}
                value={data.aktif}
                require={true}
                onChange={e => setData('aktif', e.target.value)}
              >
                <option value="" disabled selected>-- Pilih Aktif --</option>
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

Create.layout = page => <Layout title="Tambah Tahun" children={page} />;

export default Create;
