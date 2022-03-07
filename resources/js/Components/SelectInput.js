import React from 'react';

export default ({
  label,
  name,
  className,
  children,
  errors = [],
  require = false,
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
          {label}
          {require && (
            <span className="text-red-500"> *</span>
          )}
        </label>
      )}
      <select
        id={name}
        name={name}
        {...props}
        className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ${errors.length ? 'error' : ''}`}
      >
        {children}
      </select>
      {errors && <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors}</div>}
    </div>
  );
};
