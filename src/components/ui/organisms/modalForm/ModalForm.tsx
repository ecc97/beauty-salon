import React from 'react'
import { IServiceRequest } from '@/app/core/application/dto';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { FormField } from '../../molecules';
import Modal from '../modal/Modal';
import Button from '../../atoms/button/Button';
import { Services } from '@/app/infrastructure/services/services.service';

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    token: string; 
}

const useServicesService = new Services();

const serviceSchema = yup.object()
    .shape({
        name: yup.string().required("Nombre es requerido"),
        description: yup.string().required("Descripción es requerida"),
        price: yup.number().positive("El precio debe ser positivo").required("Precio es requerido")
    })

function ModalForm({ isOpen, onClose, title, token}: IModalProps) {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<IServiceRequest>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(serviceSchema)
    });
    
    const handleAddService = async (data: IServiceRequest) => {
        try {
            const response = await useServicesService.addSevice(data, token);
            onClose();
            console.log('Servicio agregado con éxito:', response);
        } catch (error) {
            console.log('Error agregando servicio:', error);
        }
    }

    // Resetea el formulario al cerrar el modal
    React.useEffect(() => {
        if (!isOpen) {
            reset(); // Resetea todos los campos del formulario
        }
    }, [isOpen, reset]);
    
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title}>
            <form onSubmit={handleSubmit(handleAddService)}>
                <FormField<IServiceRequest>
                    control={control}
                    type='text'
                    name="name"
                    label="Nombre"
                    error={errors.name}
                />
                <FormField<IServiceRequest>
                    control={control}
                    type='text'
                    name="description"
                    label="Descripción"
                    error={errors.description}
                />
                <FormField<IServiceRequest>
                    control={control}
                    type='text'
                    name="price"
                    label="Precio"
                    error={errors.price}
                />
                <Button type="submit" className='bg-gray-800 text-white w-full p-3 rounded-lg hover:bg-gray-700'>Agregar</Button>
            </form>
        </Modal>
    )
}

export default ModalForm
