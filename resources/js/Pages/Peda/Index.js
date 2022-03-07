import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import Icon from '@/Shared/Icon';
import SearchFilter from '@/Components/SearchFilter';
import Pagination from '@/Components/Pagination';
import { delData } from '@/helpers';

import {
  PencilAltIcon,
  TrashIcon,
  ReplyIcon,
} from '@heroicons/react/solid'

const Index = () => {
  const { peda } = usePage().props;
  const {
    data,
    meta: { links }
  } = peda;
  let rowt = 1;

  function destroy(id) {
    delData().then((result) => {
      if (result.isConfirmed) {
        Inertia.delete(route('peda.destroy', id));
      }
    })
  }

  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Perangkat Daerah</h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <InertiaLink
            className="order-0 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:order-1 sm:ml-3"
            href={route('peda.create')}
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
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" width="70">No</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Singkat</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan="2">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, nama, singkat, ket, deleted_at }) => {              
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
                      {nama}
                    </span>
                  </td>
                  <td className="border-t text-sm">
                    <span
                      tabIndex="-1"
                      className="flex items-center px-6 py-3 focus:text-yellow focus:outline-none"
                    >
                      {singkat}
                    </span>
                  </td>
                  <td className="border-t text-sm">
                    <span
                      tabIndex="-1"
                      className="flex items-center px-6 py-3 focus:text-yellow focus:outline-none"
                    >
                      {ket}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium w-px border-t text-sm">
                    <div className="flex flex-row">
                      <InertiaLink
                        tabIndex="-1"
                        href={route('peda.edit', id)}
                        className="flex items-center focus:outline-none whitespace-nowrap"
                        title="Edit"
                      >
                        <PencilAltIcon
                          className="mr-2 h-5 w-5 text-green-500 hover:text-green-600"
                          aria-hidden="true"
                        />
                      </InertiaLink>
                      {!deleted_at && (
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
                      )}
                      {deleted_at && (
                        <InertiaLink
                          tabIndex="-1"
                          href={route('peda.edit', id)}
                          className="flex items-center focus:outline-none whitespace-nowrap"
                          title="Restore"
                        >
                          <ReplyIcon
                            name=""
                            className="mr-2 h-5 w-5 text-yellow-500 hover:text-yellow-600"
                            aria-hidden="true"
                          />
                        </InertiaLink>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
            {data.length === 0 && (
              <tr>
                <td className="px-6 py-4 border-t" colSpan="5">
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

Index.layout = page => <Layout title="Perangkat Daerah" children={page} />;

export default Index;
