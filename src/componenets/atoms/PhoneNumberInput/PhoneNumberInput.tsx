import React from 'react';
import 'react-phone-input-2/lib/style.css';
import "./phonNumber.scss"
import PhoneInput from 'react-phone-input-2';
interface PhoneNumberInputProps {
    id: string;
    value: string;
    onChange?: (value: string) => void;
    label?: string;
    required?: boolean;
    error?: string;
    register?: any; // Optional for react-hook-form integration
    className?: string;
    placeholder?: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
    id,
    value,
    onChange,
    label,
    required = false,
    error,
    // register,
    className = '',
    // placeholder = ''
}) => {
    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label htmlFor={id} className="flex items-start text-body-1 font-body pb-[6px]">
                    {label}
                    {required && <span className="text-red-required ms-[1px]">*</span>}
                </label>
            )}
            <PhoneInput
                country={'in'} // Default country
                value={value}
                onChange={onChange}
                placeholder="XXXXX-XXXXX"
                copyNumbersOnly={true}
                inputProps={{
                    name: id,
                    required: required,
                }}
                containerStyle={{
                    width: '100%',
                }}
                inputStyle={{
                    width: '100%',
                    borderRadius: '4px',
                    height: '56px',
                    paddingLeft: '48px', // To accommodate dropdown
                    backgroundColor: '#EEEEEE',
                    color: '#34332E',
                    border: error ? '1px solid #FF0000' : '1px solid #CCCCCC',
                }}
                buttonStyle={{
                    backgroundColor: '#EEEEEE',
                    borderRadius: '4px 0 0 4px',
                }}
                dropdownStyle={{
                    zIndex: 1000,
                    color: '#000000',
                }}
            />

            {error && <p className="mt-1 text-sm text-red-600 text-left">{error}</p>}
        </div>
    );
};

export default PhoneNumberInput;
