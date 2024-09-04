import React from 'react'
import Helmet from 'react-helmet'
import { useForm, usePage } from '@inertiajs/inertia-react'
import LoadingButton from '@/Shared/LoadingButton'
import TextInputIcon from '@/Components/TextInputIcon'
import { UserIcon, KeyIcon } from '@heroicons/react/solid'
import SelectInput from '@/Components/SelectInput';
import Logo from '@/Assets/logo.png'

export default () => {
  const { tahun, setting } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    username: '',
    password: '',
    tahun: '',
  });

  const optionTahun = tahun.map((tah) => (
    <option key={tah.tahun} value={tah.tahun}>
      {tah.tahun}
    </option>
  ));

  function handleSubmit(e) {
    e.preventDefault();
    post(route('login.attempt'));
  }

  return (
    <div className="min-h-screen flex flex-col justify-center py-8 sm:px-6 lg:px-8 bg-fixed bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url("/img/login4.jpg")`}}>
      <Helmet titleTemplate="%s | BPSDM Prov. Kaltim" title="Login" />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="bg-yellow-600 py-8 px-4 shadow sm:px-10">
          <img src={Logo} className="block w-full max-w-xs mx-auto text-white fill-current" height={50} />
        </div>
        <div className="bg-white py-8 px-4 shadow sm:rounded-b-lg sm:px-10">
          <form className="space-y-2" onSubmit={handleSubmit}>
            <TextInputIcon
              Icon={UserIcon}
              name="username"
              type="text"
              placeholder="Username"
              errors={errors.username}
              value={data.username}
              onChange={e => setData('username', e.target.value)}
            />
            <TextInputIcon
              className=""
              Icon={KeyIcon}
              name="password"
              type="password"
              placeholder="Password"
              errors={errors.password}
              value={data.password}
              onChange={e => setData('password', e.target.value)}
            />
            <SelectInput
              className="pb-2"
              name="tahun"
              errors={errors.tahun}
              value={data.tahun}
              onChange={e => setData('tahun', e.target.value)}
            >
              <option value="" disabled selected>-- Pilih Tahun --</option>
              {optionTahun}
            </SelectInput>
            <div>
              <LoadingButton
                type="submit"
                loading={processing}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Login
              </LoadingButton>
            </div>
          </form>
          <div>
            <p className="mt-6 text-center text-gray-400 text-xs">{setting.copyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
