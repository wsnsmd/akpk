import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import classNames from 'classnames';

export default ({ Icon, link, text }) => {
  const isActive = route().current(link + '*');

  const linkClasses = classNames('group flex items-center px-2 py-2 text-sm font-medium rounded-md', {
    'bg-gray-200 text-gray-900' : isActive,
    'text-gray-700 hover:text-gray-900 hover:bg-gray-50' : !isActive
  });

  return (
    <a href={link} className={linkClasses} target='_blank'>
      <Icon className={`mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500`} />
      {text}
    </a>
  );
};
