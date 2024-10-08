import React from 'react';
import MainMenuItem from '@/Components/MainMenuItem';
import MainMenuLink from '@/Components/MainMenuLink';
import {
  HomeIcon,
  OfficeBuildingIcon,
  NewspaperIcon,
  DocumentAddIcon,
  SearchIcon,
  BookOpenIcon
} from '@heroicons/react/outline';

export default ({ className }) => {
  return (
    <nav className={className}>
      <MainMenuItem text="Dashboard" link="dashboard" Icon={HomeIcon} />
      <MainMenuItem text="Usulan Pelatihan" link="usulan.index" Icon={NewspaperIcon} />
      <MainMenuItem text="Usulan Pelatihan Baru" link="ubar.index" Icon={DocumentAddIcon} />
      <MainMenuItem text="Pencarian" link="pelatihan.search" Icon={SearchIcon} />
      <h3 className="px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Manual
      </h3>
      <MainMenuLink text="Penggunaan" link="/download/manual.pdf" Icon={BookOpenIcon} />
    </nav>
  );
};
