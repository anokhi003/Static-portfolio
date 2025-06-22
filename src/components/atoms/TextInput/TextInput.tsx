import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  id: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  register: any; // Register function from react-hook-form
  label?: string;
  required?: boolean;
  error?: string;
  icon?: React.ReactNode; // Icon to display inside the input
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type = 'text',
  placeholder,
  onChange = () => {},
  disabled = false,
  className = '',
  register,
  label,
  required = false,
  error,
  icon,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="flex items-start text-body-1 pb-[6px] font-semibold font-sofia">
          {label}
          {required && <span className="text-red-required ms-[1px]">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
        <input
          id={id}
          {...register}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`bg-purple1 rounded text-black1 h-14 w-full p-4 pl-${icon ? '12' : '4'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-600 text-left">{error}</p>}
    </div>
  );
};

export default InputField;
