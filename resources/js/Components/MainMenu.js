import React from 'react';
import MainMenuItem from '@/Components/MainMenuItem';
import {
  HomeIcon,
  OfficeBuildingIcon,
  NewspaperIcon,
  DocumentAddIcon,
  SearchIcon
} from '@heroicons/react/outline';

export default ({ className }) => {
  return (
    <nav className={className}>
      <MainMenuItem text="Dashboard" link="dashboard" Icon={HomeIcon} />
      <MainMenuItem text="Usulan Pelatihan" link="usulan.index" Icon={NewspaperIcon} />
      <MainMenuItem text="Usulan Pelatihan Baru" link="ubar.index" Icon={DocumentAddIcon} />
      <MainMenuItem text="Pencarian" link="pelatihan.search" Icon={SearchIcon} />
    </nav>
  );
};
