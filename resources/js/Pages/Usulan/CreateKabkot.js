import React, { useEffect, useState, useRef } from 'react';
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import FileInput from '@/Components/FileInput';
import Select from 'react-select';
import axios from 'axios';
import CurrencyInput from '@/Components/CurrencyInput';

const Create = () => {
  const { jenis } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    jenis_id: jenis[0].id || '',
    rumpun_id: '',
    pelatihan_id: '',
    jumlah: '',
    biaya: 0,
    hari: 0,
    jp: 0,
    total: 0,
    polabiaya: '',
    lampiran: '',
  });
  const initPelatihan = [];
  const [optPelatihan, setOptPelatihan] = useState(initPelatihan);
  const [loading, setLoading] = useState(false);
  const selectInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    post(route('usulan.index.kabkot.store'));
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

  function handlePelatihanChange(e) {
    setData('pelatihan_id', e.value);
  }

  function handleJumlahChange(e) {
    setData('jumlah', e.target.value)
  }

  function clearPelatihan() {
    setOptPelatihan(initPelatihan);
    selectInputRef.current.setValue('');
  }

  const fetchPelatihan = async() => {
  	setLoading(true);
    clearPelatihan();
    axios.get(route('component.select.pelatihan'), {
      params: {
        jenis_id: data.jenis_id,
        rumpun_id: data.rumpun_id,
      }
    }).then((res) => {
      if(res) {
        setOptPelatihan(res.data);
      }
    })
  	setLoading(false);
  };

  const fetchDataPelatihan = async() => {
    setLoading(true);
    if(data.pelatihan_id) {
      axios.get(route('pelatihan.show', data.pelatihan_id))
      .then((res) => {
        if(res) {
          const data = res.data;
          setData(values => ({
            ...values,
            'hari': data.hari,
            'jp': data.jp,
            'biaya': data.biaya,
          }));
        }
      })
    }
    setLoading(false);
  }

  useEffect(() => {
    setData('rumpun_id', '');
    setData('pelatihan_id', '');
    clearPelatihan();
  }, [ data.jenis_id ])

  useEffect(() => {
    fetchPelatihan();
  }, [ data.rumpun_id ])

  useEffect(() => {
    fetchDataPelatihan();
  }, [ data.pelatihan_id ])

  useEffect(() => {
    setData('total', data.jumlah * data.biaya);
  }, [ data.jumlah, data.biaya ])  

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
            Buat Usulan
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto p-6">
        <div className="w-full overflow-hidden bg-white rounded shadow">
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
                onChange={handleRumpunChange}
              >
                <option value="" disabled>-- Pilih Rumpun --</option>
                {optionRumpun}
              </SelectInput>
              <div className="w-full pb-4 pr-6">
                <label className="block text-sm font-medium text-gray-700" htmlFor="pelatihan_id">
                  Pelatihan
                  <span className="text-red-500"> *</span>
                </label>
                <Select
                  ref={selectInputRef}
                  className="text-sm sm:text-sm"
                  id="pelatihan_id"
                  name="pelatihan_id"
                  placeholder="-- Pelatihan --"
                  defaultValue={data.pelatihan_id}
                  onChange={handlePelatihanChange}
                  options={optPelatihan}
                  noOptionsMessage={() => 'Tidak ada data'}
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                    ...theme.colors,
                      primary: '#F59E0B',
                    },
                  })}
                  styles={{
                    control: (base) => ({
                      ...base,
                      border: '1px solid #D1D5DB',
                      boxShadow: 'none',
                      '&:hover': {
                        border: '1px solid #F59E0B',
                      }
                    }),
                    input: (base) => ({
                      ...base,
                      'input:focus': {
                        boxShadow: 'none',
                      },
                    }),
                  }}
                />
                {errors.pelatihan_id && <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.pelatihan_id}</div>}
              </div>
              <CurrencyInput
                className="w-full pb-4 pr-6 lg:w-1/3"
                label="Biaya / Orang"
                name="biaya"
                placeholder="Biaya..."
                value={data.biaya}
                disabled={true}
              />
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/3"
                label="Jumlah Hari"
                name="hari"
                placeholder="Hari..."
                value={data.hari}
                disabled={true}
              />
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/3"
                label="Jam Pelajaran"
                name="jp"
                placeholder="JP..."
                value={data.jp}
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
                require={true}
                onChange={handleJumlahChange}
              />
              <CurrencyInput
                className="w-full pb-4 pr-6 lg:w-1/3"
                label="Total Biaya"
                name="total"
                placeholder="Total..."
                value={data.total}
                disabled={true}
              />
              <FileInput
                className="w-full pb-8 pr-6"
                label="Lampiran"
                name="lampiran"
                accept="application/pdf"
                errors={errors.lampiran}
                value={data.lampiran}
                require={true}
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

Create.layout = page => <Layout title="Buat Usulan" children={page} />;

export default Create;
