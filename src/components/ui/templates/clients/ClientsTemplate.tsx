"use client"
import React from 'react'
import Button from '../../atoms/button/Button'
import ClientCard from '../../molecules/common/card/ClientCard'
import ModalClientForm from '../../organisms/modalFormClient/ModalFormClient'


import Pagination from '../../molecules/pagination/Pagination'
import { IClientRequest, IClientsResponse } from '@/app/core/application/dto/clients'

interface ClientTemplateProps {
    dataClient: IClientsResponse
}

function ClientTemplate({ dataClient }: ClientTemplateProps) {
    const clients = dataClient.content
    const [showModal, setShowModal] = React.useState(false)
    const [selectedClient, setSelectedClient] = React.useState<IClientRequest | null>(null);

    const handleShowModal = (client?: IClientRequest) => {
        setSelectedClient(client || null)
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
        setSelectedClient(null)
    }
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Clientes</h1>
                <Button type='button' className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg" onClick={() => handleShowModal()}>
                    Agregar Cliente
                </Button>
            </div>
            <div className='flex-grow'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clients.map((client) => (
                        <ClientCard key={client.id} client={client} onEdit={() => handleShowModal(client)}/>
                    ))}
                </div>
            </div>
            <ModalClientForm isOpen={showModal} onClose={handleCloseModal} title={selectedClient ? 'Editar Cliente' : 'Agregar Cliente'} client={selectedClient!} />
            
        </>
    )
}

export default ClientTemplate