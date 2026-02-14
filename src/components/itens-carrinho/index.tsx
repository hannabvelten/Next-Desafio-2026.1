import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Plus } from "lucide-react";

export default function ItensCarrinho (){
    return(
        <div className="p-4 flex flex-col gap-5">
            <div className="w-full flex pt-3">
                <Link href="/pagProdutos" className="bg-amarelinho flex text-sm font-medium rounded-full items-center gap-2 px-2 py-1 transition-colors duration-300">
                    <Plus size={16}/>
                    Adicionar mais itens
                </Link>
            </div>

            <div className="px-2 w-full border-1 border-golden rounded-3xl flex gap-3 items-center justify-between">
                <Link href='/' className="" >
                    <Image 
                    src={'/imagens/brincoEstrela.jpeg'}
                    alt="Brinco argola + estrela"
                    width={904}
                    height={904}
                    className="object-cover h-25 w-25 md:h-50 md:w-50 rounded-3xl p-2"
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
            
            <div className="px-2 w-full border-1 border-golden rounded-3xl flex gap-3 items-center justify-between">
                <Link href='/' className="" >
                    <Image 
                    src={'/imagens/brincoEstrela.jpeg'}
                    alt="Brinco argola + estrela"
                    width={904}
                    height={904}
                    className="object-cover h-25 w-25 md:h-50 md:w-50 rounded-3xl p-2"
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