'use client'

import { useState } from "react"
import { Clipboard, House, CircleUser, HouseIcon, LogOut } from "lucide-react"

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
            <div className="md:w-65 md:min-h-screen">
                <div className="bg-azulEscurao w-full md:min-h-screen">
                    <div className="flex">
                        <button className="icone text-white text-2xl md:hidden text-start px-3" onClick={toggleAdminSidebar}>
                            <i className="bi bi-list"></i>
                        </button>
                        <div className="flex flex-1 justify-center">
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

                    { isAdminSidebarOpen ? (
                        <div className="md:hidden flex flex-col gap-4 bg-[#0F1C53] text-white p-4">
                            <Link href="/">Home</Link>
                            <div>
                                <Link href="/gerenciamento">Gerenciamento</Link>
                            </div>
                        </div>
                    ) : null }


                    <div className="w-full hidden md:flex justify-center md:py-5 ">
                        <div className="linha w-50 h-px bg-white"></div>
                    </div>

                    <div className="text-white hidden md:flex text-xl gap-3 px-5 items-center ">
                        <CircleUser className="h-8"/>
                        <h1>Nome</h1>
                    </div>

                    <div className="w-full hidden md:flex justify-center md:py-6">
                        <div className="linha w-50 h-[0.5px] bg-white"></div>
                    </div>
                    
                    <div className="text-white hidden md:flex flex-col h-110 gap-10 px-6 py-15">
                        <div className="flex gap-3 px-1">
                            <HouseIcon />
                            <Link href="/">Home</Link>
                        </div>
                        <div className="flex gap-3 bg-amarelinho text-black rounded-4xl py-2 px-1">
                            <Clipboard />
                            <Link href="/gerenciamento">Gerenciamento</Link>
                        </div>
                    </div>

                    <div className="text-white hidden md:flex gap-3 justify-center">
                        <LogOut />
                        <h1 className="font-medium">Logout</h1>
                    </div>

                </div>
            </div>
    )
}