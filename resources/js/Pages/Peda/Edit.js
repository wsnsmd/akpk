import React from 'react';
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';

const Edit = () => {
  const { peda, admin } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    id: peda.id,
    admin_id: peda.admin_id,
    nama: peda.nama || '',
    singkat: peda.singkat || '',
    ket: peda.ket || '',
    _method: 'PUT',
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('peda.update', peda.id));
  }

  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            <InertiaLink
              href={route('peda')}
              className="text-yellow-600 hover:text-yellow-700"
            >
              Perangkat Daerah
            </InertiaLink>
            <span className="mx-2 font-medium text-yellow-600">/</span>
            {peda.nama}
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto p-6">
        <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
          <form name="createForm" onSubmit={handleSubmit}>
            <div className="flex flex-wrap p-8 -mb-8 -mr-6">
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/2"
                label="Nama"
                name="nama"
                placeholder="Nama..."
                errors={errors.nama}
                value={data.nama}
                require={true}
                onChange={e => setData('nama', e.target.value)}
              />
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/2"
                label="Singkat"
                name="singkat"
                placeholder="Singkat..."
                errors={errors.singkat}
                value={data.singkat}
                onChange={e => setData('singkat', e.target.value)}
              />
              <TextInput
                className="w-full pb-4 pr-6"
                label="Keterangan"
                name="ket"
                placeholder="Keterangan..."
                errors={errors.ket}
                value={data.ket}
                onChange={e => setData('ket', e.target.value)}
              />
              <SelectInput
                className="w-full pb-8 pr-6"
                label="Admin User"
                name="admin_id"
                errors={errors.admin_id}
                value={data.admin_id}
                require={true}
                onChange={e => setData('admin_id', e.target.value)}
              >
                <option value="" disabled>-- Pilih Admin --</option>
                {admin.map(({id, name, username}) => {
                  return (
                    <option value={id} key={id}>{name} ({username})</option>
                  );
                })}
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

Edit.layout = page => <Layout children={page} />;

export default Edit;
