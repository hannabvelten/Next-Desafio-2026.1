import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Plus, X } from "lucide-react";

export default function ItensCarrinho (){
    return(
        <div className="p-4 flex flex-col gap-5">
            <div className="w-full flex pt-3 md:py-2">
                <Link href="/pagProdutos" className="bg-amarelinho flex text-sm font-medium rounded-full items-center gap-2 px-2 py-2 transition-colors duration-300">
                    <Plus size={16}/>
                    Adicionar mais itens
                </Link>
            </div>

            <div className="px-2 md:px-4 md:py-2 w-full md:w-170 border-1 border-golden rounded-3xl flex gap-3 items-center justify-between">
                <div className="md:flex md:gap-4">

                    <Link href='/' className="" >
                        <Image
                        src={'/imagens/brincoEstrela.jpeg'}
                        alt="Brinco argola + estrela"
                        width={904}
                        height={904}
                        className="object-cover h-25 w-25 md:h-40 md:w-40 rounded-3xl p-2"
                        />
                    </Link>

                    <div className="py-2 md:flex md:flex-col md:justify-center md:h-40">
                        <p className="text-xl font-medium">Brinco Argola + <br />Estrela</p>
                        <p className="text-sm">Joia em ouro 18k</p>
                        <Button className="bg-transparent text-red-700 text-[11px] font-light p-0 md:hidden">Remover</Button>
                    </div>
                </div>

                <div>
                    <p className="font-medium text-sm md:text-xl px-3">R$1.290,00</p>
                </div>

                <div className="flex items-center gap-1">
                    <X className="text-red-700" size={17}/>
                    <Button className="bg-transparent text-red-700 text-[11px] md:text-sm font-light p-0 sm:hidden md:flex">Remover</Button>
                </div>
            </div>
            
            <div className="px-2 md:py-2 w-full border-1 border-golden rounded-3xl flex gap-3 items-center justify-between">
                <Link href='/' className="" >
                    <Image 
                    src={'/imagens/brincoEstrela.jpeg'}
                    alt="Brinco argola + estrela"
                    width={904}
                    height={904}
                    className="object-cover h-25 w-25 md:h-40 md:w-40 rounded-3xl p-2"
                    />
                </Link>

                <div className="py-2">
                    <p className="text-[13px] font-medium">Brinco Argola + <br />Estrela</p>
                    <p className="text-[11px]">Joia em ouro 18k</p>
                    <Button className="bg-transparent text-red-700 text-[11px] font-light p-0">Remover</Button>
                </div>

                <div>
                    <p className="font-medium text-sm">R$1.290,00</p>
                </div>
            </div>



        </div>
    )
}