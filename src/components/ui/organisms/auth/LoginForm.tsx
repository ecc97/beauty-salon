"use client"
import { ILoginRequest } from "@/app/core/application/dto/auth"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { FormField } from "../../molecules"
import { signIn } from "next-auth/react"
import { ErrorResponse, FieldError } from "@/app/core/application/dto"
import { useRouter } from "next/navigation"

const loginSchema = yup.object()
    .shape({
        userName: yup.string().email('El correo es inválido').required("Nombre de usuario es requerido"),
        password: yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required("Contraseña es requerida")
    })

export const LoginForm = () => {
    const {control, handleSubmit, setError, formState: {errors}} = useForm<ILoginRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(loginSchema)
    })

    const router = useRouter()

    const handleLogin = async (data: ILoginRequest) => {
        console.log(data)
        try {
            const result = await signIn("credentials", {
                redirect: false,
                username: data.userName,
                password: data.password,
            })

            console.log(result)

            if (result?.error) {
                console.log('Ocurrió un error', JSON.parse(result.error))
                handleError(JSON.parse(result.error))   
                return
            }
            router.push('/dashboard/services')
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleError = (error:unknown) => {
        const errorData = error as ErrorResponse
        if(errorData && errorData.errors){
            if(Array.isArray(errorData.errors) && "field" in errorData.errors[0]){
                errorData.errors.forEach((fieldError) => {
                    const {field, error} = fieldError as FieldError
                    setError(field as keyof ILoginRequest, {
                        message: error
                    })
                })
            } else {
                if("message" in errorData.errors[0]){
                    setError("userName", {
                        message: errorData.errors[0].message
                    })
                }
            }
        }
    }
    return (
        <form className="w-full max-w-sm mx-auto p-4 space-y-4" onSubmit={handleSubmit(handleLogin)}>
            <h2 className="text-2xl font-semibold text-center">Iniciar Sesión</h2>
            <FormField<ILoginRequest>
                control={control}
                type="email"
                label="Correo Electrónico"
                name="userName"
                error={errors.userName}
                placeholder="Ingresa tu correo"
            />
            <FormField<ILoginRequest>
                control={control}
                type="password"
                label="Contraseña"
                name="password"
                error={errors.password}
                placeholder="Ingresa tu contraseña"
            />
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-500">
                Iniciar Sesión
            </button>
        </form>
    )
}