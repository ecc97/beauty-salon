"use client"
import React from 'react'
import { IRegisterRequest } from '@/app/core/application/dto/register'
import Button from '../../atoms/button/Button'
import { FormField } from '../../molecules'
import { FormSelectField } from '../../molecules/common/FormSelectField'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const registerSchema = yup.object().shape({
    userName: yup.string().min(1, 'El nombre de usuario debe tener al menos un carácter').required('El nombre de usuario es requerido'),
    password: yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es requerida'),
    // confirmPassword: yup.string().oneOf([yup.ref('password')], 'Las contraseñas no coinciden').required('Confirmar contraseña es requerida'),
    firstName: yup.string().min(1, 'El nombre de debe tener al menos un carácter').required('Nombre requerido'),
    lastName: yup.string().min(1, 'El apellido debe tener al menos un carácter').required('Apellido requerido'),
    email: yup.string().email('El correo es inválido').required('El correo es requerido'),
    phone: yup.string().required('Número de teléfono requerido'),
    role: yup.string().required('Rol requerido')
    // phoneNumber: yup.string().min(10, 'El número de teléfono debe tener 10 dígitos').required('Número de teléfono requerido'),
    // termsAndConditions: yup.bool().required('Debe aceptar los términos y condiciones'),
})

export const RegisterForm = () => {
    const { control, handleSubmit, setError, formState: { errors } } = useForm<IRegisterRequest>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(registerSchema),
    })
    const handleRegister = async (data: IRegisterRequest) => {
        console.log(data)
        // try {
        //     const result = await signUp('email', {
        //         email: data.email,
        //         password: data.password,
        //         username: data.userName,
        //         firstName: data.firstName,
        //         lastName: data.lastName,
        //         phoneNumber: data.phoneNumber,
        //         // additionalData: {
        //         //     termsAndConditions: data.termsAndConditions,
        //         // },
        //     })
        // } catch (error) {
        //     setError('registerError', {
        //         type: 'manual',
        //         message: error.message,
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
        <FormField<IRegisterRequest>
            control={control}
            type="text"
            label="Nombre"
            name="firstName"
            error={errors.firstName}
            placeholder="Ingresa tu nombre"
        />
        <FormField<IRegisterRequest>
            control={control}
            type="text"
            label="Apellido"
            name="lastName"
            error={errors.lastName}
            placeholder="Ingresa tu apellido"
        />
        <FormField<IRegisterRequest>
            control={control}
            type="email"
            label="Correo Electrónico"
            name="email"
            error={errors.email}
            placeholder="Ingresa tu correo"
        />
        <FormField<IRegisterRequest>
            control={control}
            type="text"
            label="Número de Teléfono"
            name="phone"
            error={errors.phone}
            placeholder="Ingresa tu número de teléfono"
        />
        <FormSelectField
            control={control}
            label="Rol"
            name="role"
            options={[
                { value: 'admin', label: 'Administrador' },
                { value: 'user', label: 'Usuario' },
            ]}
            error={errors.role}
            placeholder="Seleccione su rol"
        />
        <Button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-500">
            Registrarme
        </Button>
    </form>
  )
}

export default RegisterForm

