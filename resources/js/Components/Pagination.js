import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const PageLink = ({ active, label, url }) => {
  const className = classNames(
    [
      'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
    ],
    {
      'z-10 bg-yellow-50 border-yellow-500 text-yellow-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium': active
    }
  )
  if(label.includes('Previous')) {
    return (
      <InertiaLink className={className} href={url}>
        <span className="sr-only">Next</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </InertiaLink>
    )
  } else if(label.includes('Next')) {
    return (
      <InertiaLink className={className} href={url}>
        <span className="sr-only">Next</span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </InertiaLink>
    )
  }

  return (
    <InertiaLink className={className} href={url}>
      <span dangerouslySetInnerHTML={{ __html: label }}></span>
    </InertiaLink>
  )
};

// Previous, if on first page
// Next, if on last page
// and dots, if exists (...)
const PageInactive = ({ label }) => {
  const className = classNames(
    'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
  )

  if(label.includes('Previous')) {
    return (
      <div className={className}>
        <span className="sr-only">Next</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="false" />
      </div>
    )
  } else if(label.includes('Next')) {
    return (
      <div className={className}>
        <span className="sr-only">Next</span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </div>
    )
  }

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: label }} />
  );
};

const PrevNextPage = ({ link = []}) => {
  return link.url === null ? (
    <PageInactive key={link.label} label={link.label} />
  ) : (
    <PageLink key={link.label} label={link.label} active={link.active} url={link.url} />
  )
}

export default ({ links = [] }) => {
  // dont render, if there's only 1 page (previous, 1, next)
  if (links.length === 3) return null
  let prevLinks = links[0];
  let nextLinks = links[links.length-1];
  
  return (
    <div className="px-4 py-3 flex items-center justify-between sm:px-0">
      <div className="flex-1 flex justify-between sm:hidden">
        <PrevNextPage link={prevLinks} />
        <PrevNextPage link={nextLinks} />
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            {links.map(({ active, label, url }) => {
              return url === null ? (
                <PageInactive key={label} label={label} />
              ) : (
                <PageLink key={label} label={label} active={active} url={url} />
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};
