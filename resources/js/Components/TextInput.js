import React from 'react';

export default ({ label, name, className, errors = [], require = false, ...props }) => {
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
      <div className="mt-1">
        <input
          id={name}
          name={name}
          {...props}
          className={`form-input text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ${errors.length ? 'error' : ''}`}
        />
        {errors && <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors}</div>}
      </div>
    </div>
  );
};
