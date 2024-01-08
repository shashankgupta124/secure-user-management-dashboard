import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">{label}</label>
        <input
          className="border rounded-md p-2 w-full focus:outline-none focus:shadow-outline-blue"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
};

export default InputField;
