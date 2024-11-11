"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '../../atoms/button/Button'
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOut } from 'react-icons/io5'
import { useSession, signOut } from 'next-auth/react'

function Sidebar() {
    const {data} = useSession()
    const handleSignOut = () => {
        signOut()
    }
    const pathname = usePathname()
    return (
        <aside className="flex flex-col h-full">
            <nav className="flex-1">
                <ul className="space-y-2">
                    <li>
                        <Link href="/dashboard/clients" className={`flex items-center p-2 rounded hover:bg-gray-700 ${pathname.includes('/dashboard/clients')? 'border-b-2 border-gray-500' : ''}`}>

                            Clientes
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/services" className={`flex items-center p-2 rounded hover:bg-gray-700 ${pathname.includes('/dashboard/services')? 'border-b-2 border-gray-500' : ''}`}>

                            Servicios
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/employees" className={`flex items-center p-2 rounded hover:bg-gray-700 ${pathname.includes('/dashboard/employees')? 'border-b-2 border-gray-500' : ''}`}>

                            Empleados
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/appointments" className={`flex items-center p-2 rounded hover:bg-gray-700 ${pathname.includes('/dashboard/appointments')? 'border-b-2 border-gray-500' : ''}`}>

                            Citas
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="mt-auto">
                <div className="flex items-center mb-4">
                    <FaRegUserCircle className="h-8 w-8 rounded-full mr-2" />
                    {/* <img src="/avatar.jpg" alt="User Avatar" className="h-8 w-8 rounded-full mr-2" /> */}
                    <span>{data?.user?.name}</span>
                </div>
                <Button type='button' onClick={handleSignOut} className="w-full bg-gray-100 text-slate-950 flex items-center gap-2 border-white hover:bg-gray-500 hover:text-white p-3 rounded-xl">
                    <IoLogOut />
                    Cerrar Sesión
                </Button>
            </div>
        </aside>
    )
}

export default Sidebar