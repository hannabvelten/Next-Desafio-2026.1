'use client'

import { useState } from "react"
import { Clipboard, House } from "lucide-react"

import Link from "next/link"
import Image from "next/image"

const LinksSidebar = [
    {href: '/', label: 'Home', icon: House},
    {href: '/admin', label: 'Produtos', icon: Clipboard},
]

export default function Sidebar(){
    const [isAdminSidebarOpen, setIsAdminSidebarOpen] = useState(false)

    const toggleAdminSidebar = () => setIsAdminSidebarOpen(!isAdminSidebarOpen)

    return (
        <div>
            <div className="bg-azulEscurao w-70 h-full">
                <div className="flex flex-1 justify-center md:justify-start ">
                    <Link href='/'>
                        <Image 
                        src={'/imagens/logo.png'}
                        alt="Logo da marca"
                        width={904}
                        height={904}
                        className="h-16 md:h-25 w-auto"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}