"use client"
import React from 'react'
import Button from '../../atoms/button/Button'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRouter, useSearchParams } from 'next/navigation';


interface PaginationProps {
    dataService: IServiceResponse
}
    

function Pagination({dataService}: PaginationProps) {

    const router = useRouter()
    const searchParams = useSearchParams()

    const onPageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', String(newPage))
        router.push(`?${params.toString()}`);
    }

    const currentPage = dataService.pageable.pageNumber + 1

  return (
    <div className="flex justify-center items-center">
        <Button type='button' className="p-2 rounded-md text-gray-600 hover:text-gray-900" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            <FaAngleLeft />
        </Button>
        <span>Página {currentPage} / {dataService.totalPages} </span>
        <Button type='button' className="p-2 rounded-md text-gray-600 hover:text-gray-900" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === dataService.totalPages}>
            <FaAngleRight />
        </Button>
    </div>
  )
}

export default Pagination