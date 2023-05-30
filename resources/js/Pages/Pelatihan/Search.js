import React, { useState, useMemo } from 'react';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import DataTable from 'react-data-table-component';
import NoDataComp from '@/Components/NoDataComp';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import LoadingButton from '@/Shared/LoadingButton';
import axios from 'axios';

const paginationComponentOptions = {
  noRowsPerPage: true
};

const Index = () => {
  const { pelatihan, jenis } = usePage().props;
  const { data, setData } = useForm({
    jenis_id: '',
    rumpun_id: '',
    nama: '',
  });
  const [loading, setLoading] = useState(false);
  const [dataTable, setDataTable] = useState(pelatihan);

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

  const columns = useMemo(() => [
    {
      name: '#',
      selector: row => row.rownum,
      width: '70px',
    },
    {
      name: 'Rumpun',
      maxWidth: '600px',
      cell: row => (
        <span>{row.jenis.nama}</span>
      ),
    },
    {
      name: 'Jenis',
      maxWidth: '200px',
      selector: row => row.rumpun.nama,
    },
    {
      name: 'Nama Pelatihan',
      maxWidth: '600px',
      // selector: row => row.nama
      cell: row => (
        <span className='py-2'>{row.nama}</span>
      ),
    },
    {
      name: 'Deskripsi',
      maxWidth: '600px',
      selector: row => row.deskripsi
    },
  ])

  const getRows = () => {
    if(rowt > (page * 10))
      rowt = ((page - 1) * 10) + 1    

    return rowt++;
  }

  function handleCari(e) {
    setLoading(true);
    axios.get(route('pelatihan.search.data'), {
      params: {
        jenis_id: data.jenis_id,
        rumpun_id: data.rumpun_id,
        nama: data.nama,
      }
    }).then((res) => {
      if(res) {
        setDataTable(res.data);
      }
    })
  	setLoading(false);
  }

  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Pencarian</h1>
        </div>
      </div>
      <div>
        <form name="searchForm">
          <div className="flex flex-wrap m-6">
            <SelectInput
              className="w-full lg:pr-3 lg:w-6/12"
              name="jenis_id"
              value={data.jenis_id}
              onChange={handleJenisChange}
            >
              <option value="">-- Pilih Semua Rumpun --</option>
              {optionJenis}
            </SelectInput>
            <SelectInput
              className="w-full lg:pr-3 lg:w-6/12"
              name="rumpun_id"
              value={data.rumpun_id}
              onChange={handleRumpunChange}
            >
              <option value="">-- Pilih Semua Jenis --</option>
              {optionRumpun}
            </SelectInput>
            <TextInput
              className="w-full lg:pr-3 lg:w-11/12"
              name="nama"
              placeholder="Pelatihan..."
              value={data.nama}
              onChange={e => setData('nama', e.target.value)}
            />
            <LoadingButton
              loading={loading}
              type="button"
              className="w-full lg:w-1/12 h-10 mt-2 lg:mt-0 justify-center border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              onClick={handleCari}
            >
              Cari
            </LoadingButton>
            </div>
        </form>
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <DataTable
          persistTableHead={true}
          columns={columns}
          data={dataTable}
          paginationComponentOptions={paginationComponentOptions}
          paginationPerPage={10}
          pagination
          highlightOnHover
          pointerOnHover
          noDataComponent={<NoDataComp />}
        />
      </div>
    </div>
  );
};

Index.layout = page => <Layout title="Pencarian" children={page} />;

export default Index;
