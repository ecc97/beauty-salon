import React from 'react'

interface InputSelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    options: { value: string, label: string}[];
    placeholder?: string;
    name?: string;
    error?: string
}

export const InputSelect = ({placeholder, options, name, error, ...props}: InputSelectProps) => {
  return (
    <div className="flex flex-col mb-4">
        <select name={name} className={`px-4 py-2 border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blu-500 focus:border-transparent ${error? 'border-red-500' : 'border-gray-300'}`} {...props}>
            <option>{placeholder}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
