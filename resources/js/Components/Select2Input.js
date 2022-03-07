import React, { useState } from 'react';
import Select from 'react-select';

export default ({
  label,
  name,
  className,
  options,
  errors = [],
  ref,
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
          {label}
        </label>
      )}
      <Select
        ref={ref}
        className="text-sm sm:text-sm"
        id={name}
        name={name}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        theme={(theme) => ({
          ...theme,
          colors: {
          ...theme.colors,
            primary: '#F59E0B',
          },
        })}
        styles={{
          control: (base) => ({
            ...base,
            border: '1px solid #D1D5DB',
            boxShadow: 'none',
            '&:hover': {
              border: '1px solid #F59E0B',
            }
          }),
          input: (base) => ({
            ...base,
            'input:focus': {
              boxShadow: 'none',
            },
          }),
        }}
        {...props}
      />
      {errors && <div className="form-error">{errors}</div>}
    </div>
  );
};
