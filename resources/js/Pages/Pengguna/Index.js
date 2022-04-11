import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import Icon from '@/Shared/Icon';
import SearchFilter from '@/Components/SearchFilter';
import Pagination from '@/Components/Pagination';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { delData } from '@/helpers';

import {
  PencilAltIcon,
  TrashIcon,
} from '@heroicons/react/solid'

const Index = () => {
  const { admin } = usePage().props;
  const {
    data,
    meta: { links }
  } = admin;
  let rowt = 1;

  function renderLevel(id) {
    var ket;

    switch(id) {
      case 1: ket = 'Admin'; break;
      case 2: ket = 'Kabupaten/Kota'; break;
      case 3: ket = 'Perangkat Daerah'; break;
    }

    return ket;
  }

  function destroy(id) {
    delData().then((result) => {
      if (result.isConfirmed) {
        Inertia.delete(route('pengguna.admin.destroy', id));
      }
    })
  }

  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Pengguna</h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <InertiaLink
            className="order-0 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:order-1 sm:ml-3"
            href={route('pengguna.admin.create')}
          >
            <span>Tambah</span>
          </InertiaLink>
        </div>
      </div>
      <div className="flex items-center justify-between m-6">
        <SearchFilter />
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full whitespace-nowrap">
          <thead className="bg-gray-50">
            <tr className="border-t border-gray-200">
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" width="70">#</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan="2">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, username, level, photo, deleted_at }) => {              
              return (
                <tr
                  key={id}
                  className="hover:bg-gray-100 focus-within:bg-gray-100"
                >
                  <td className="border-t text-sm">
                    <span
                      className="flex items-center px-6 py-3 focus:text-yellow-700 focus:outline-none"
                    >
                      {rowt++}
                      {deleted_at && (
                        <Icon
                          name="trash"
                          className="flex-shrink-0 w-3 h-3 ml-2 text-gray-400 fill-current"
                        />
                      )}
                    </span>
                  </td>
                  <td className="border-t text-sm">
                    <span
                      tabIndex="-1"
                      className="flex items-center px-6 py-3 focus:text-yellow focus:outline-none"
                    >
                      {name}
                    </span>
                  </td>
                  <td className="border-t text-sm">
                    <span
                      tabIndex="-1"
                      className="flex items-center px-6 py-3 focus:text-yellow focus:outline-none"
                    >
                      {username}
                    </span>
                  </td>
                  <td className="border-t text-sm">
                    <span
                      tabIndex="-1"
                      className="flex items-center px-6 py-3 focus:text-yellow focus:outline-none"
                    >
                      {renderLevel(level)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium w-px border-t text-sm">
                    <div className="flex flex-row">
                      <InertiaLink
                        tabIndex="-1"
                        href={route('pengguna.admin.edit', id)}
                        className="flex items-center focus:outline-none whitespace-nowrap"
                        title="Edit"
                      >
                        <PencilAltIcon
                          className="mr-2 h-5 w-5 text-green-500 hover:text-green-600"
                          aria-hidden="true"
                        />
                      </InertiaLink>
                      <button
                        tabIndex="-1"
                        className="flex items-center focus:outline-none"
                        title="Delete"
                        onClick={() => destroy(id)}
                      >
                        <TrashIcon
                          className="mr-2 h-5 w-5 text-red-500 hover:text-red-600"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {data.length === 0 && (
              <tr>
                <td className="px-6 py-4 border-t" colSpan="4">
                  Tidak ada data.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center md:justify-center">
        <Pagination links={links} />
      </div>
    </div>
  );
};

Index.layout = page => <Layout title="Pengguna" children={page} />;

export default Index;
