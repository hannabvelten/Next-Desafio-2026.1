
import Link from "next/link"
import Image from "next/image"

const links = [
    { href: '/posts', label: 'Publicações' },
    { href: '/admim', label: 'Admim' }
]

export default function Header(){
    return (
        <header className="bg-[#0F1C53] sticky top-0 z-20 w-full px-6 md:px-15 flex justify-center items-center">
            <div className="icone text-white text-2xl md:hidden">
                <i className="bi bi-list"></i>
            </div>
            <div className="flex flex-1 justify-center md:justify-start">
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
            <div className="hidden md:flex flex-1 gap-14 w-full h-full text-[#FFFFFF] font-medium items-center">
                <Link href="/" className="hover:bg-[#c8b473] hover:text-black rounded-full px-2 py-1 transition-colors duration-300">Home</Link>
                <Link href="/produtos" className="hover:bg-[#c8b473] hover:text-black rounded-full px-2 py-1 transition-colors duration-300">Produtos</Link>
                <Link href="/contato" className="hover:bg-[#c8b473] hover:text-black rounded-full px-2 py-1 transition-colors duration-300">Contato</Link>
                <Link href="/gerenciamento" className="hover:bg-[#c8b473] hover:text-black rounded-full px-2 py-1 transition-colors duration-300">Gerenciamento</Link>
                <Link href="/carrinho" className="hover:bg-[#c8b473] hover:text-black rounded-full px-2 py-1 transition-colors duration-300">Carrinho</Link>
                <div className=" bg-[#C9A24D] text-black font-medium rounded-full px-2 py-1 hover:bg-[#8184AC] hover:text-white rounded-full px-2 py-1 transition-colors duration-300">Login</div>
            </div>

        </header>
    )
}