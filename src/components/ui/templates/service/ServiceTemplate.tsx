"use client"
import React from 'react'
import Button from '../../atoms/button/Button'
import Modal from '../../organisms/modal/Modal'
import ModalForm from '../../organisms/modalForm/ModalForm'
import ServiceCard from '../../molecules/common/card/Card'
import Pagination from '../../molecules/pagination/Pagination'

interface ServiceTemplateProps {
    dataService: IServiceResponse
    token: string
}

function ServiceTemplate({ dataService, token }: ServiceTemplateProps) {
    const services = dataService.content
    const [showModal, setShowModal] = React.useState(false)
    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Services</h1>
                <Button type='button' className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg" onClick={handleShowModal}>
                    Agregar Servicio
                </Button>
            </div>
            <div className='flex-grow'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
            <ModalForm isOpen={showModal} onClose={handleCloseModal} title='Agregar Servicio' token={token} />
            <Pagination dataService={dataService}/>
        </>
    )
}

export default ServiceTemplate