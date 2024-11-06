"use client"
import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import './header.scss'

export default function Header() {

    return (
        <header className='header w-64 bg-gray-800 text-white'>
            <div className='flex items-center mb-8'>
                <h1 className='font-bold'>Beauty Sala</h1>
            </div>
            <Sidebar />
        </header>
    )
}
