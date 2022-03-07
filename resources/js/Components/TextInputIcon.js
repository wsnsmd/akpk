import React from 'react';

export default ({ Icon, label, name, className, errors = [], ...props }) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          id={name}
          name={name}
          {...props}
          className={`focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ${errors.length ? 'error' : ''}`}
        />
      </div>
      {errors && <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors}</div>}
    </div>
  );
};
