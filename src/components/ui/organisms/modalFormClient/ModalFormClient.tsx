"use client"
import React from 'react'
import { IClientRequest, IClientsResponse } from '@/app/core/application/dto/clients';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { FormField } from '../../molecules';
import Modal from '../modal/Modal';
import Button from '../../atoms/button/Button';
import { useRouter } from 'next/navigation';

interface IModalClientProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string; 
    client?: IClientRequest;
}

const clientSchema = yup.object().shape({
    firstName: yup.string().required("Nombre es requerido"),
    lastName: yup.string().required("Apellido es requerido"),
    email: yup.string().email().required("Email es requerido"),
    phone: yup.string().required("Teléfono es requerido"),
    // address: yup.string().required("Dirección es requerida")
})

function ModalClientForm({ isOpen, onClose, title, client}: IModalClientProps) {
    const router = useRouter();
    const { control, handleSubmit, setError, formState: { errors }, reset } = useForm<IClientRequest>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(clientSchema),
        defaultValues: client || {}
    })
    
    const handleClientSubmit = async (data: IClientRequest) => {
        try {
            if(client) {
                const response = await fetch(`/api/clients/${client.id}`, {
                    method: "PUT",
                    headers: { 
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
                if(!response.ok) {
                    throw new Error('Error actualizando cliente')
                }
                console.log('Cliente actualizado con éxito:', response);
            } else {
                const response = await fetch("/api/clients", {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
                if(!response.ok) {
                    throw new Error('Error agregando cliente')
                }
                console.log('Cliente agregado con éxito:', response);
            }
            onClose();
            reset();
            router.refresh();
        } catch (error) {
            console.log('Error agregando client:', error);
        }
    }

    React.useEffect(() => {
        if (!isOpen) {
            reset({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            });
        } else if (client) {
            reset(client)
        }
    }, [isOpen, reset, client]);
    
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title}>
            <form onSubmit={handleSubmit(handleClientSubmit)}>
                <FormField<IClientRequest>
                    control={control}
                    type='text'
                    name="firstName"
                    label="Nombre"
                    error={errors.firstName}
                />
                <FormField<IClientRequest>
                    control={control}
                    type='text'
                    name="lastName"
                    label="Apellido"
                    error={errors.lastName}
                />
                <FormField<IClientRequest>
                    control={control}
                    type='email'
                    name="email"
                    label="Correo electrónico"
                    error={errors.email}
                />
                <FormField<IClientRequest>
                    control={control}
                    type='text'
                    name="phone"
                    label="Teléfono"
                    error={errors.phone}
                />
                {/* <FormField
                    control={control}
                    type='text'
                    name="address"
                    label="Dirección"
                    error={errors.address}
                /> */}
                <Button type="submit" className='bg-gray-800 text-white w-full p-3 rounded-lg hover:bg-gray-700'>{client? 'Actualizar' : 'Agregar'}</Button>
            </form>
        </Modal>
    )
}

export default ModalClientForm  