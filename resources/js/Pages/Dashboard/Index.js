import React from 'react'
import { Fragment, useState } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Layout from '@/Components/Layout2'
import ImgDashboard from '@/Assets/img-dashboard.png'

import {
  ChevronRightIcon,
  DotsVerticalIcon,
  DuplicateIcon,
  PencilAltIcon,
  TrashIcon,
  UserAddIcon,
} from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dashboard = () => {
  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 py-2">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Dashboard</h1>
        </div>
      </div>
      <div className="flex w-full px-4 mt-6 sm:px-6 lg:px-8 items-center justify-center">
        <img src={ImgDashboard} className="" alt="akpk-dashboard" />
      </div>
    </div>
  );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Dashboard.layout = page => <Layout title="Dashboard" children={page} />;

export default Dashboard;
