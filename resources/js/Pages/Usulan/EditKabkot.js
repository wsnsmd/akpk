import React, { useEffect, useState } from 'react';
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Components/TextInput';
import FileInput from '@/Components/FileInput';
import SelectInput from '@/Components/SelectInput';
import CurrencyInput from '@/Components/CurrencyInput';

const Edit = () => {
  const { usulan } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    jumlah: usulan.jumlah || '',
    lampiran: '',
    polabiaya: usulan.polabiaya || '',
    _method: 'PUT',
  });

  const [total, setTotal] = useState(usulan.jumlah * usulan.pbiaya);

  function handleSubmit(e) {
    e.preventDefault();
    post(route('usulan.index.kabkot.update', usulan.id));
  }

  useEffect(() => {
    setTotal(data.jumlah * usulan.pbiaya);
  }, [ data.jumlah ])  

  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            <InertiaLink
              href={route('usulan.index')}
              className="text-yellow-600 hover:text-yellow-700"
            >
              Usulan
            </InertiaLink>
            <span className="mx-2 font-medium text-yellow-600">/</span>
            Edit Usulan
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto p-6">
        <div className="w-full overflow-hidden bg-white rounded shadow">
          <form name="createForm" onSubmit={handleSubmit}>
            <div className="flex flex-wrap p-8 -mb-8 -mr-6">
              <TextInput
                className="w-full pb-4 pr-6"
                label="Pelatihan"
                name="pelatihan"
                placeholder="Pelatihan..."
                disabled={true}
                value={usulan.pnama}
              />
              <CurrencyInput
                className="w-full pb-4 pr-6 lg:w-1/3"
                label="Biaya / Orang"
                name="biaya"
                placeholder="Biaya..."
                value={usulan.pbiaya}
                disabled={true}
              />
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/3"
                label="Jumlah Hari"
                name="hari"
                placeholder="Hari..."
                value={usulan.phari}
                disabled={true}
              />
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/3"
                label="Jam Pelajaran"
                name="jp"
                placeholder="JP..."
                value={usulan.pjp}
                disabled={true}
              />
              <SelectInput
                className="w-full pb-4 pr-6 lg:w-1/3"
                label="Pola Biaya"
                name="polabiaya"
                errors={errors.polabiaya}
                value={data.polabiaya}
                require={true}
                onChange={e => setData('polabiaya', e.target.value)}
              >
                <option value="" disabled>-- Pilih Pola Biaya --</option>
                <option value="1">Fasilitasi</option>
                <option value="2">Kontribusi</option>
                <option value="3">Lain-lain</option>
              </SelectInput>
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/3"
                label="Jumlah Orang"
                name="jumlah"
                placeholder="Jumlah..."
                errors={errors.jumlah}
                value={data.jumlah}
                onChange={e => setData('jumlah', e.target.value)}
              />
              <CurrencyInput
                className="w-full pb-4 pr-6 lg:w-1/3"
                label="Total Biaya"
                name="total"
                placeholder="Total..."
                value={total}
                disabled={true}
              />
              <FileInput
                className="w-full pb-8 pr-6"
                label="Lampiran"
                name="lampiran"
                accept="application/pdf"
                errors={errors.lampiran}
                value={data.lampiran}
                onChange={lampiran => setData('lampiran', lampiran)}
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

Edit.layout = page => <Layout children={page} />;

export default Edit;
