import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react';

export default function PagPIndivudual (){
    return (
        <div className="tudo flex flex-col md:flex-row w-full justify-center md:p-10">
            <div className="flex flex-col">
                <div className="imagem py-10 md:pt-10 md:py-0 md:w-100 w-full flex justify-center items-center">
                    <Link href='/'className="">
                        <Image 
                        src={'/imagens/aliancaOuro.jpeg'}
                        alt="Aliança ouro"
                        width={904}
                        height={904}
                        className="object-cover h-45 w-55 rounded-t-2xl md:w-100 md:h-100"
                        />
                    </Link>
                </div>

                <div className="carrinho w-full md:flex justify-center pt-7 sm:hidden">
                    <Button className="bg-golden text-black w-100 rounded-4xl hover:bg-amarelinho">ADICIONAR AO CARRINHO</Button>
                </div>
            </div>

            <div className="conteudo flex flex-col gap-4 md:gap-6 px-10 md:w-150 md:justify-center">
                <h1 className="text-2xl md:text-4xl font-semibold">Par Alianças Premium</h1>

                <div className="w-full flex justify-center md:justify-start md:py-2">
                    <div className="linha w-80 md:w-150 h-px bg-black"></div>
                </div>

                <p className="text-xs md:text-lg">Par de alianças premium em ouro 18k, com acabamento refinado e design atemporal.
                Uma joia criada para simbolizar união, amor e compromisso em todos os momentos da vida.</p>

                <div className="flex flex-col gap-2 ">
                    <p className="text-2xl md:text-3xl">R$4.590,00</p>
                    <p className="text-xs">ou 12x de R$382,50</p>
                </div>
                
                <div className="flex w-full justify-between">
                    <p>ARO</p>
                    <div className="flex w-10 gap-3">
                        <p>12</p>
                        <ChevronDown />
                    </div>
                </div>

                <div className="w-full flex justify-center md:justify-start md:py-0">
                    <div className="linha w-80 md:w-150 h-px bg-black"></div>
                </div>
            </div>

            <div className="carrinho w-full flex justify-center pt-7 md:hidden">
                <Button className="bg-golden text-black w-80 rounded-4xl hover:bg-amarelinho">ADICIONAR AO CARRINHO</Button>
            </div>
        </div>
    )
}