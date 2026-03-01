"use client"
import { useState } from "react"

import Link from "next/link"
import Image from "next/image"

const links = [
    { href: '/posts', label: 'Publicações' },
    { href: '/admim', label: 'Admim' }
]

export default function Header(){

    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <header className="bg-[#0F1C53] sticky top-0 z-20 w-ful px-6 md:px-15 flex flex-col md:flex-row md:items-center">
            <div className="flex">
                <button className="icone text-white text-2xl lg:hidden text-start" onClick={() => setIsNavOpen(!isNavOpen)}>
                    <i className="bi bi-list"></i>
                </button>
                <div className="flex flex-1 justify-center lg:justify-start ">
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

            {isNavOpen ? (
                <div className="lg:hidden flex md:flex-row md:text-xs flex-col gap-4 bg-[#0F1C53] text-white px-1 py-4">
                    <Link href="/">Home</Link>
                    <Link href="/pagProdutos">Produtos</Link>
                    <Link href="/contato">Contato</Link>
                    <Link href="/admin">Gerenciamento</Link>
                    <Link href="/carrinho">Carrinho</Link>
                    <Link href="/login" className="  text-white font-medium rounded-full px-2 py-1 rounded-full px-2 py-1 transition-colors duration-300">Login</Link>
                </div>
            ) : null}

            <div className="hidden lg:flex flex-1 gap-14 w-full h-full text-[#FFFFFF] font-medium items-center md:justify-end">
                <Link href="/" className="hover:border-white hover:border-1 hover:shadow-md rounded-full px-2 py-1 transition-colors duration-300">Home</Link>
                <Link href="/pagProdutos" className="hover:border-white hover:border-1 hover:shadow-md rounded-full px-2 py-1 transition-colors duration-300">Produtos</Link>
                <Link href="/contato" className="hover:border-white hover:border-1 hover:shadow-md rounded-full px-2 py-1 transition-colors duration-300">Contato</Link>
                <Link href="/admin" className="hover:border-white hover:border-1 hover:shadow-md rounded-full px-2 py-1 transition-colors duration-300">Gerenciamento</Link>
                <Link href="/carrinho" className="hover:border-white hover:border-1 hover:shadow-md rounded-full px-2 py-1 transition-colors duration-300">Carrinho</Link>
                <Link href="/login" className=" bg-[#C9A24D] text-black font-medium rounded-full px-2 py-1 hover:bg-creme rounded-full px-2 py-1 transition-colors duration-300">Login</Link>
            </div>



        </header>
    )
}