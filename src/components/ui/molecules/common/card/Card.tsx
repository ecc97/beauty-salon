"use client"
import { useState } from 'react'
import Button from '@/components/ui/atoms/button/Button'
import { MdEdit } from 'react-icons/md'
import { TbTrashXFilled } from 'react-icons/tb'

interface ServiceProps {
  service: IServices
}

export default function ServiceCard({ service }: ServiceProps) {

  return (
    <article className="w-full bg-gray-50 rounded-lg shadow-xl">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
        <p className="text-gray-800 text-lg mb-6">{service.description}</p>
        <p className="text-gray-600 text-base mb-4">Precio: ${service.price}</p>
      </div>
      <div className="p-4 flex justify-end space-x-2">
          <>
            <Button type="button" className='bg-blue-500 text-white p-2 rounded hover:bg-gray-50 hover:text-blue-500 hover:border hover:border-blue-500'>
               <MdEdit />
            </Button>
            <Button type="button" className='bg-red-500 text-white p-2 rounded hover:bg-gray-50 hover:text-red-500 hover:border hover:border-red-500'>
                <TbTrashXFilled />  
            </Button>
          </>
      </div>
    </article>
  )
}