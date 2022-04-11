import React from 'react';
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Components/Layout2';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import FileInput from '@/Components/FileInput';

const Edit = () => {
  const { user } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    name: user.name || '',
    username: user.username || '',
    password: '',
    singkat: user.singkat || '',
    level: user.level || '',
    hp: user.hp || '',
    photo: '',
    _method: 'PUT',
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('pengguna.admin.update', user.id));
  }

  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            <InertiaLink
              href={route('pengguna')}
              className="text-yellow-600 hover:text-yellow-700"
            >
              Pengguna
            </InertiaLink>
            <span className="mx-2 font-medium text-yellow-600">/</span>
            {user.name}
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto p-6">
        <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
          <form name="createForm" onSubmit={handleSubmit}>
            <div className="flex flex-wrap p-8 -mb-8 -mr-6">
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/2"
                label="Nama Lengkap"
                name="name"
                errors={errors.name}
                value={data.name}
                require={true}
                onChange={e => setData('name', e.target.value)}
              />
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/2"
                label="Nama Singkat"
                name="singkat"
                errors={errors.singkat}
                value={data.singkat}
                onChange={e => setData('singkat', e.target.value)}
              />
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/2"
                label="Username"
                name="username"
                errors={errors.username}
                value={data.username}
                require={true}
                onChange={e => setData('username', e.target.value)}
              />
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/2"
                label="Password"
                name="password"
                type="password"
                errors={errors.password}
                value={data.password}
                require={true}
                onChange={e => setData('password', e.target.value)}
              />
              <TextInput
                className="w-full pb-4 pr-6 lg:w-1/2"
                label="No Handphone"
                name="hp"
                errors={errors.hp}
                value={data.hp}
                onChange={e => setData('hp', e.target.value)}
              />
              <SelectInput
                className="w-full pb-4 pr-6 lg:w-1/2"
                label="Level"
                name="level"
                errors={errors.level}
                value={data.level}
                require={true}
                onChange={e => setData('level', e.target.value)}
              >
                <option value="" disabled>-- Pilih Level --</option>
                <option value="1">Administrator</option>
                <option value="2">Kabupaten/Kota</option>
                <option value="3">Perangkat Daerah</option>
              </SelectInput>
              <FileInput
                className="w-full pb-8 pr-6 lg:w-1/2"
                label="Photo"
                name="photo"
                accept="image/*"
                errors={errors.photo}
                value={data.photo}
                onChange={photo => setData('photo', photo)}
              />
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
