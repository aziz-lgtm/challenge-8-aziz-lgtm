import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'number';
  multiline?: boolean;
  rows?: number;
  className?: string;
  name?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  multiline = false,
  rows = 4,
  className = '',
  name,
  required = false,
  error,
  disabled = false,
}) => {
  const fieldStyles =
    'w-full bg-white dark:bg-gray-900 border border-[#252B37] md:border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl md:rounded-lg px-4 py-2 md:py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-200 hover:scale-[1.01] hover:border-gray-300 dark:hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed';

  const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '';

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-orange-500 ml-1">*</span>}
        </label>
      )}
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          placeholder={placeholder}
          rows={rows}
          required={required}
          disabled={disabled}
          className={`${fieldStyles} ${errorStyles} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`${fieldStyles} ${errorStyles}`}
        />
      )}
      {error && <p className="text-red-400 text-xs mt-0.5">{error}</p>}
    </div>
  );
};

export default Input;