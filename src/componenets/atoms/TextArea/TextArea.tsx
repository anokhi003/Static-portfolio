import React, { ChangeEvent } from 'react';

interface TextareaFieldProps {
  id: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  className?: string;
  rows?: number;
  register: any; // Register function from react-hook-form
  label?: string;
  required?: boolean;
  error?: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  id,
  placeholder,
  onChange = () => {},
  disabled = false,
  className = '',
  rows = 4,
  register,
  label,
  required = false,
  error,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="flex items-start text-body-1 font-body pb-[6px]">
          {label}
          {required && <span className="text-red-required ms-[1px]">*</span>}
        </label>
      )}
      <textarea
        id={id}
        {...register}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={`bg-purple1 rounded text-black1 w-full p-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
      />
      {error && <p className="mt-1 text-sm text-red-600 text-left">{error}</p>}
    </div>
  );
};

export default TextareaField;
