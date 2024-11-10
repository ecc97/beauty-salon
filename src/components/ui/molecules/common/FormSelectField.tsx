"use client"

import React from 'react'
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';
import { InputSelect } from '../../atoms';

interface IPropsFormSelectField<T extends FieldValues> {
    label: string;
    name: Path<T>;    
    control: Control<T>
    error?: FieldError;
    id?: string;
    placeholder?: string;
    options: { value: string, label: string }[];
}

export const FormSelectField = <T extends FieldValues>({label, name, control, error, id, placeholder, options}: IPropsFormSelectField<T>) => {
  return (
    <div className='w-full flex flex-col mb-4'>
        <label htmlFor={id || label.toLowerCase()} className={`text-sm font-medium`}>{label}</label>
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                <InputSelect
                    id={id || label.toLowerCase()}
                    options={options}
                    error={error?.message}
                    placeholder={placeholder || `Seleccione un ${label.toLowerCase()}`}
                    {...field}
                />
            )}
        />
    </div>
  )
}
