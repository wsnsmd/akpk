import React, { useState, useMemo } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import { delData } from '@/helpers';
import DataTable from 'react-data-table-component';
import NoDataComp from '@/Components/NoDataComp';

import {
  PencilAltIcon,
  TrashIcon,
} from '@heroicons/react/solid'

const paginationComponentOptions = {
  noRowsPerPage: true
};

const Index = () => {
  const { usulan } = usePage().props;
  let rowt = 1;

  const columns = useMemo(() => [
    {
      name: '#',
      cell: (id) =>
        <span>{getRows()}</span>,
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
      row.is_verify ? '' :
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
        <button
          className="flex items-center focus:outline-none"
          title="Delete"
          onClick={() => destroy(row.id)}
        >
          <TrashIcon
            className="mr-2 h-5 w-5 text-red-500 hover:text-red-600"
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
    Inertia.get(route('usulan.index.peda.edit', id));
  }

  const destroy = (id) => {
    delData().then((result) => {
      if (result.isConfirmed) {
        Inertia.delete(route('usulan.index.peda.destroy', id));
      }
    })
  }

  const getRows = () => {
    if(rowt > usulan.length)
      rowt = 1;

    return rowt++;
  }

  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Usulan Pelatihan</h1>
        </div>
      </div>
      <div className="flex items-center justify-between m-6">
        <InertiaLink
          className="order-0 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:order-1 sm:ml-3"
          href={route('usulan.index.peda.create')}
        >
          <span>Tambah</span>
        </InertiaLink>
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <DataTable
          persistTableHead={true}
          columns={columns}
          data={usulan}
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

Index.layout = page => <Layout title="Usulan Pelatihan" children={page} />;

export default Index;
