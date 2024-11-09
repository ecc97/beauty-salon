"use client"
import { useState } from 'react'
import Button from '@/components/ui/atoms/button/Button'
import { MdEdit } from 'react-icons/md'
import { TbTrashXFilled } from 'react-icons/tb'
import { useServicesService } from '@/app/infrastructure/helpers/hooks/useServices'
import { useRouter } from 'next/navigation'

interface ServiceProps {
  service: IServices
  onEdit: () => void
}

export default function ServiceCard({ service, onEdit }: ServiceProps) {
  const router = useRouter()
  const handleDelete = async (id: string) => {
    const confirmed = confirm('¿Estás seguro de que quieres eliminar este elemento?')
    if (!confirmed) return
    try {
      await fetch(`/api/services/${Number(id)}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('Servicio eliminado con éxito')
    } catch (error) {
      console.error('Error al eliminar el servicio:', error)
    }
    router.refresh()
  }

  return (
    <article className="w-full bg-gray-50 rounded-lg shadow-xl">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
        <p className="text-gray-800 text-lg mb-6">{service.description}</p>
        <p className="text-gray-600 text-base mb-4">Precio: ${service.price}</p>
      </div>
      <div className="p-4 flex justify-end space-x-2">
          <>
            <Button type="button" className='bg-blue-500 text-white p-2 rounded hover:bg-gray-50 hover:text-blue-500 hover:border hover:border-blue-500' onClick={onEdit}>
               <MdEdit />
            </Button>
            <Button type="button" className='bg-red-500 text-white p-2 rounded hover:bg-gray-50 hover:text-red-500 hover:border hover:border-red-500' onClick={() => handleDelete(String(service.id))}>
                <TbTrashXFilled />  
            </Button>
          </>
      </div>
    </article>
  )
}