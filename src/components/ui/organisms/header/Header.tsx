"use client"
import React from 'react'
import Button from '../../atoms/button/Button'
import { signOut } from 'next-auth/react'
import Sidebar from '../sidebar/Sidebar'

export default function Header() {
    const handleSignOut = () => {
        signOut()
    }
    return (
        <header className='w-full flex justify-between items-center p-2'>
            {/* <Button type='button' onClick={handleSignOut} className=' text-white border border-slate-500 bg-cyan-700 rounded-lg hover:bg-cyan-300 p-4'>Cerrar Sesión</Button> */}
        </header>
    )
}
