import React from 'react';
import MainMenuItem from '@/Components/MainMenuItem';
import MainMenuLink from '@/Components/MainMenuLink';
import {
  ChartBarIcon,
  HomeIcon,
  UsersIcon,
  OfficeBuildingIcon,
  CalendarIcon,
  ClipboardListIcon,
  GlobeIcon,
  CollectionIcon,
  NewspaperIcon,
  BookOpenIcon
} from '@heroicons/react/outline'


export default ({ className }) => {
  return (
    <nav className={className}>
      <MainMenuItem text="Dashboard" link="dashboard" Icon={HomeIcon} />
      <h3 className="px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Usulan
      </h3>
      <MainMenuItem text="Perangkat Daerah" link="usulan.peda" Icon={OfficeBuildingIcon} />
      <MainMenuItem text="Kabupaten/Kota" link="usulan.kabkot" Icon={GlobeIcon} />
      <h3 className="px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Master
      </h3>
      <MainMenuItem text="Tahun" link="tahun" Icon={CalendarIcon} />
      <MainMenuItem text="Rumpun" link="jenis" Icon={ClipboardListIcon} />
      <MainMenuItem text="Kabupaten/Kota" link="kabkot" Icon={GlobeIcon} />
      <MainMenuItem text="Perangat Daerah" link="peda" Icon={OfficeBuildingIcon} />
      <MainMenuItem text="Jenis Pelatihan" link="rumpun" Icon={CollectionIcon} />
      <MainMenuItem text="Pelatihan" link="pelatihan" Icon={NewspaperIcon} />
      <h3 className="px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Admin
      </h3>
      <MainMenuItem text="Pengguna" link="pengguna" Icon={UsersIcon} />
      <h3 className="px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Manual
      </h3>
      <MainMenuLink text="Penggunaan" link="/download/manual.pdf" Icon={BookOpenIcon} />
    </nav>
  );
};
