"use client"
import React from 'react'
import Button from '../../atoms/button/Button'
import ServiceCard from '../../molecules/common/card/Card'

interface ServiceTemplateProps {
    dataService: IServiceResponse
}

function ServiceTemplate({dataService} : ServiceTemplateProps) {
    const services = dataService.content
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Services</h1>
                <Button type='button' className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg">
                    Agregar Servicio
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </>
    )
}

export default ServiceTemplate