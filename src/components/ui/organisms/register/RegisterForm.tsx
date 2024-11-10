"use client"
import React from 'react'
import { IRegisterRequest } from '@/app/core/application/dto/register'
import Button from '../../atoms/button/Button'
import { FormField } from '../../molecules'
import { FormSelectField } from '../../molecules/common/FormSelectField'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useRouter } from "next/navigation"

const registerSchema = yup.object().shape({
    userName: yup.string().min(8, 'El nombre de usuario debe tener al menos un 8 caracteres').required('El nombre de usuario es requerido'),
    password: yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es requerida'),
    // confirmPassword: yup.string().oneOf([yup.ref('password')], 'Las contraseñas no coinciden').required('Confirmar contraseña es requerida'),
})

export const RegisterForm = () => {
    const { control, handleSubmit, setError, formState: { errors } } = useForm<IRegisterRequest>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(registerSchema),
    })
    
    const router = useRouter()

    const handleRegister = async (data: IRegisterRequest) => {
        console.log(data)
        // Implement your registration logic here
        
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            if (response.ok) {
                router.push('/login')
            } else {
                const errorData = await response.json()
                console.error(errorData)
                throw new Error(errorData.message || "Error al registrar la cuenta");
                // setError('userName', {
                //     type:'manual',
                //     message: errorData.message,
                // })
            }
        } catch (error) {
            console.error(error)
        }

        // Example:
        // const response = await fetch('/api/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        // if (response.ok) {
        //     // Registration successful, redirect to login page
        //     router.push('/login')
        // } else {
        //     const errorData = await response.json()
        //     setError('register', {
        //         type: 'manual',
        //         message: errorData.message,
        //     })
        // }
    }
  return (
    <form className="w-full max-w-sm mx-auto p-4 space-y-4" onSubmit={handleSubmit(handleRegister)}>
        <h2 className="text-2xl font-semibold text-center">Regístrate</h2>
        <FormField<IRegisterRequest>
            control={control}
            type="text"
            label="Nombre de Usuario"
            name="userName"
            error={errors.userName}
            placeholder="Ingresa tu nombre de usuario"
        />
        <FormField<IRegisterRequest>
            control={control}
            type="password"
            label="Contraseña"
            name="password"
            error={errors.password}
            placeholder="Ingresa tu contraseña"
        />
        {/* <FormField
            control={control}
            type="password"
            label="Confirmar Contraseña"
            name="confirmPassword"
            error={errors.confirmPassword}
            placeholder="Confirma tu contraseña"
        /> */}
        <Button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-500">
            Registrarme
        </Button>
    </form>
  )
}

export default RegisterForm

