import React, { Fragment, useRef, useState, useEffect } from 'react';
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import LoadingButton from '@/Shared/LoadingButton';
import { Dialog, Listbox, Transition } from '@headlessui/react';
import { CheckIcon, TrashIcon, SelectorIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Edit = () => {
  const { jenis, rumpun, jrumpun } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    jenis_id: jenis.id || '',
    rumpun_id: rumpun[0].id || '',
  });
  const [isOpen, setIsOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [selected, setSelected] = useState(rumpun[0]);
  let rowt = 1;

  function handleSubmit(e) {
    e.preventDefault();
    post(route('jenis.rumpun.add', jenis.id));
  }

  function handleListBox(e) {
    setSelected(e);
    setData('rumpun_id', e.id);
  }

  function handleDelete(rid) {
    post(route('jenis.rumpun.destroy', [jenis.id, rid]));
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            <InertiaLink
              href={route('jenis')}
              className="text-yellow-600 hover:text-yellow-700"
            >
              Rumpun
            </InertiaLink>
            <span className="mx-2 font-medium text-yellow-600">/</span>
            <InertiaLink
              href={route('jenis.edit', jenis.id)}
              className="text-yellow-600 hover:text-yellow-700"
            >
              {jenis.nama}
            </InertiaLink>
            <span className="mx-2 font-medium text-yellow-600">/</span>
            Rumpun
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-between m-6">
        <button
          className="order-0 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:order-1 sm:ml-3"
          type="button"
          onClick={openModal}
        >
          <span>Tambah</span>
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full whitespace-nowrap">
          <thead className="bg-gray-50">
            <tr className="border-t border-gray-200">
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" width="70">No</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan="2">
                Rumpun
              </th>
            </tr>
          </thead>
          <tbody>
            {jrumpun.map(({ jenis_id, rumpun_id, nama }) => {
              return (
                <tr
                  key={rowt}
                  className="hover:bg-gray-100 focus-within:bg-gray-100"
                >
                  <td className="border-t text-sm">
                    <span
                      className="flex items-center px-6 py-3 focus:text-yellow-700 focus:outline-none"
                    >
                      {rowt++}
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
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium w-px border-t text-sm">
                    <div className="flex flex-row">
                      <button
                        tabIndex="-1"
                        className="flex items-center focus:outline-none"
                        title="Delete"
                        onClick={() => handleDelete(rumpun_id)}
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
            {jrumpun.length === 0 && (
              <tr>
                <td className="px-6 py-4 border-t" colSpan="4">
                  Tidak ada data.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          open={isOpen}
          onClose={setIsOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <form name="createForm" onSubmit={handleSubmit}>
                  <div className="flex items-start justify-between p-3 pl-5 border-b border-solid bg-yellow-600">
                    <h5 className="text-lg text-white font-semibold">
                      Tambah Rumpun
                    </h5>
                  </div>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <Listbox
                      value={selected}
                      onChange={handleListBox}
                    >
                      {({ open }) => (
                        <>
                          <Listbox.Label className="block text-sm font-medium text-gray-700">Rumpun</Listbox.Label>
                          <div className="mt-1 relative">
                            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
                              <span className="block truncate">{selected.nama}</span>
                              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options
                                static
                                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                              >
                                {rumpun.map((rmp) => (
                                  <Listbox.Option
                                    key={rmp.id}
                                    className={({ active }) =>
                                      classNames(
                                        active ? 'text-white bg-yellow-600' : 'text-gray-900',
                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                      )
                                    }
                                    value={rmp}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                          {rmp.nama}
                                        </span>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active ? 'text-white' : 'text-yellow-600',
                                              'absolute inset-y-0 right-0 flex items-center pr-4'
                                            )}
                                          >
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      Batal
                    </button>
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
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

Edit.layout = page => <Layout children={page} />;

export default Edit;
