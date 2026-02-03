//import { useState } from "react"

import Link from "next/link"
import Image from "next/image"

const links = [
    { href: '/posts', label: 'Publicações' },
    { href: '/admim', label: 'Admim' }
]

export default function Header(){
    return (
        <header className="bg-[#0F1C53] sticky top-0 z-20 w-full px-10 py-5 flex justify-between align-middle">
            <div className="flex w-full">
                <Link href='/'>
                    <Image 
                    src={'/imagens/logo.png'}
                    alt="Logo do blog"
                    width={904}
                    height={904}
                    className="h-25 w-40"
                    />
                </Link>
            </div>
                <div className="flex gap-4 w-full justify-end h-full">
                    <div>Home</div>
                    <div>Produtos</div>
                    <div>Contato</div>
                    <div>Gerenciamento</div>
                    <div>Carrinho</div>
                </div>

        </header>
    )
}