"use client"
import React from 'react'
import Link from 'next/link'
import Button from '../../atoms/button/Button'
import { IoLogOut } from 'react-icons/io5'
import { useSession, signOut } from 'next-auth/react'

function Sidebar() {
    const {data} = useSession()
    const handleSignOut = () => {
        signOut()
    }
    return (
        <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col">
            <div className="flex items-center mb-8">
                <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="text-xl font-bold">Beauty Sala</span>
            </div>
            <nav className="flex-1">
                <ul className="space-y-2">
                    <li>
                        <Link href="/customers" className="flex items-center p-2 rounded hover:bg-gray-700">

                            Clientes
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="flex items-center p-2 rounded hover:bg-gray-700">

                            Servicios
                        </Link>
                    </li>
                    <li>
                        <Link href="/employees" className="flex items-center p-2 rounded hover:bg-gray-700">

                            Empleados
                        </Link>
                    </li>
                    <li>
                        <Link href="/appointments" className="flex items-center p-2 rounded hover:bg-gray-700">

                            Citas
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="mt-auto">
                <div className="flex items-center mb-4">
                    <img src="/avatar.jpg" alt="User Avatar" className="h-8 w-8 rounded-full mr-2" />
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