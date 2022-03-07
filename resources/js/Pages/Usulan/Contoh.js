import React, { useState, useMemo } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import Icon from '@/Shared/Icon';
import SearchFilter from '@/Components/SearchFilter';
import Pagination from '@/Components/Pagination';
import { delData } from '@/helpers';
import DataTable, { defaultThemes }  from 'react-data-table-component';

import {
  PencilAltIcon,
  TrashIcon,
  ReplyIcon,
} from '@heroicons/react/solid'

const paginationComponentOptions = {
  noRowsPerPage: true
};

const Index = () => {
  const { usulan } = usePage().props;
  const {
    data,
    meta: { current_page, per_page, total }
  } = usulan;
  let rowt = 1;

  const columns = useMemo(() => [
    {
      name: '#',
      cell: (row, index) =>
        <span>{((current_page-1)*per_page)+index+1}</span>,
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
          onClick={() => destroy(row.id)}
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

  const destroy = (id) => {
    delData().then((result) => {
      if (result.isConfirmed) {
        Inertia.delete(route('usulan.index.peda.destroy', id));
      }
    })
  }
  const [loading, setLoading] = useState(false);
  const fetchUsers = async page => {
  	setLoading(true);
  	const response = Inertia.get(route('usulan.index.peda'), { page: page}, { preserveState: false, only: ['pelatihan'] });
  	setLoading(false);
  };
  const handlePageChange = page => {
    fetchUsers(page);
  };

  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Usulan Pengembangan Kompetensi</h1>
        </div>
      </div>
      <div className="flex items-center justify-between m-6">
        <InertiaLink
          className="order-0 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:order-1 sm:ml-3"
          href={route('usulan.index.peda.create')}
        >
          <span>Buat Usulan</span>
        </InertiaLink>
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <DataTable
          columns={columns}
          data={data}
          progressPending={loading}
          paginationComponentOptions={paginationComponentOptions}
          paginationTotalRows={total}
          paginationPerPage={10}
          onChangePage={handlePageChange}
          paginationDefaultPage={current_page}
          pagination
          paginationServer
          highlightOnHover
          pointerOnHover
        />
      </div>
    </div>
  );
};

Index.layout = page => <Layout title="Usulan Pelatihan" children={page} />;

export default Index;
