import React, { useState, useMemo } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import { delData } from '@/helpers';
import DataTable from 'react-data-table-component';
import NoDataComp from '@/Components/NoDataComp';
import TextInput from '@/Components/TextInput';
import LoadingButton from '@/Shared/LoadingButton';
import SelectInput from '@/Components/SelectInput';
import axios from 'axios';
import {
  PencilAltIcon,
  TrashIcon,
} from '@heroicons/react/solid'

const paginationComponentOptions = {
  noRowsPerPage: true
};

const TitleHeader = ({ title='Default' }) => {
  return (
    <div className="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-2 lg:px-4">
      <div className="flex-1 min-w-0 py-2">
        <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">{title}</h1>
      </div>
    </div>
  )
}

const Index = () => {
  const { usulan, ubar, kabkot } = usePage().props;
  const { data, setData, errors, post } = useForm({
    admin_id: '',
  });
  let rowt = 1, rowbar = 1;
  const [loading, setLoading] = useState(false);
  const [dataTable, setDataTable] = useState(usulan);
  const [dtUbar, setDtUbar] = useState(ubar);
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const columns = useMemo(() => [
    {
      name: '#',
      selector: row => row.rownum,
      width: '70px',
    },
    {
      name: 'Pelatihan',
      selector: row => row.pnama,
    },
    {
      name: 'Jumlah (Orang)',
      selector: row => row.jumlah,
    },
    {
      name: 'Verifikasi',
      cell: (row) => 
        row.is_verify
          ? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Sudah
            </span>
          : <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Belum
            </span>
    },
    {
      cell: (row) =>
      <>
        <button
          className="flex items-center focus:outline-none"
          title="Edit"
          onClick={() => edit(row.id)}
        >
          <PencilAltIcon
            className="mr-2 h-5 w-5 text-green-500 hover:text-green-600"
            aria-hidden="true"
          />
        </button>
      </>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ])

  const colUbar = useMemo(() => [
    {
      name: '#',
      selector: row => row.rownum,
      width: '70px',
    },
    {
      name: 'Pelatihan',
      selector: row => row.nama,
    },
    {
      name: 'Jenis',
      selector: row => row.param,
    },
    {
      name: 'Keterangan',
      selector: row => row.keterangan,
    },
    {
      cell: (row) =>
      <>
        <button
          className="flex items-center focus:outline-none"
          title="Edit"
          onClick={() => editUbar(row.id)}
        >
          <PencilAltIcon
            className="mr-2 h-5 w-5 text-green-500 hover:text-green-600"
            aria-hidden="true"
          />
        </button>
      </>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ])

  const edit = (id) => {
    Inertia.get(route('usulan.index.kabkot.edit', id));
  }

  const editUbar = (id) => {
    Inertia.get(route('ubar.edit', id))
  }

  const getRows = () => {
    if(rowt > dataTable.length)
      rowt = 1;

    return rowt++;
  }

  const getRowsUbar = () => {
    if(rowbar > dtUbar.length)
      rowbar = 1;
    
    return rowbar++;
  }

  function getDataTable() {
    axios.post(route('usulan.data.show'), {
      admin_id: data.admin_id,
    }).then((res) => {
      if(res) {
        setDataTable(res.data.usulan);
        setDtUbar(res.data.ubar);
      }
    })
  }

  function handleTampil(e) {
    setLoading(true);
    getDataTable();
  	setLoading(false);
  }

  const handleRowSelected = React.useCallback(state => {
    setSelectedRows(state.selectedRows);
  });

  const contextActions = useMemo(() => {
    const handleVerify = () => {
      Inertia.post(route('usulan.bulk.verify'), {
        usulan: selectedRows,
        page: 'kabkot'
      })
      setToggleCleared(!toggleCleared);
      getDataTable();
    };

    const handleDelete = () => {
      Inertia.post(route('usulan.bulk.delete'), {
        usulan: selectedRows,
        page: 'kabkot'
      })
      setToggleCleared(!toggleCleared);
      getDataTable();
    };

    return (
      <div>
        <button key="verifikasi" onClick={handleVerify} className="justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">Verifikasi</button>
        <button key="delete" onClick={handleDelete} className="ml-2 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700">Hapus</button>
      </div>
    )
  }, [dataTable, selectedRows, toggleCleared]);

  return (
    <div>
      <div>
        <form name="searchForm">
          <div className="flex m-6">
            <SelectInput
              className="w-full pr-3 lg:w-6/12"
              label="Kabupaten/Kota"
              name="admin_id"
              errors={errors.admin_id}
              value={data.admin_id}
              onChange={e => setData('admin_id', e.target.value)}
            >
              <option value="" disabled>-- Pilih Kabupaten/Kota --</option>
              {kabkot.map(({admin_id, nama}) => {
                return (
                  <option value={admin_id} key={admin_id}>{nama}</option>
                );
              })}
            </SelectInput>
              <div className="w-full pr-3 lg:w-1/12 mt-5">
              <LoadingButton
                loading={loading}
                type="button"
                className="w-full min-w-full h-10 justify-center border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                onClick={handleTampil}
              >
                Tampilkan
              </LoadingButton>
            </div>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto bg-white rounded shadow border-b-2">
        <DataTable
          title={<TitleHeader title='Usulan Pelatihan' />}
          selectableRows
          contextActions={contextActions}
          onSelectedRowsChange={handleRowSelected}
          clearSelectedRows={toggleCleared}
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
      <div className="overflow-x-auto rounded shadow mx-100">
        <DataTable
          title={<TitleHeader title='Usulan Pelatihan Baru' />}
          onSelectedRowsChange={handleRowSelected}
          persistTableHead={true}
          columns={colUbar}
          data={dtUbar}
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

Index.layout = page => <Layout title="Usulan Pelatihan Kab/Kota" children={page} />;

export default Index;
