import Image from "next/image"
import Link from "next/link"

import { ChevronDown } from 'lucide-react';

export default function PagPIndivudual (){
    return (
        <div className="tudo flex flex-col">
            <div className="imagem py-10 w-full flex justify-center items-center">
                <Link href='/'className="">
                    <Image 
                    src={'/imagens/aliancaOuro.jpeg'}
                    alt="Aliança ouro"
                    width={904}
                    height={904}
                    className="object-cover h-45 w-50 rounded-t-2xl"
                    />
                </Link>
            </div>
            <div className="conteudo flex flex-col gap-5 px-10">
                <h1 className="text-2xl font-semibold">Par Alianças Premium</h1>

                <div className="w-full flex justify-center md:justify-start md:py-10">
                    <div className="linha w-80 md:w-150 h-px bg-black"></div>
                </div>

                <p className="text-xs">Par de alianças premium em ouro 18k, com acabamento refinado e design atemporal.
                Uma joia criada para simbolizar união, amor e compromisso em todos os momentos da vida.</p>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl">R$4.590,00</p>
                    <p className="text-xs">ou 12x de R$382,50</p>
                </div>
                
                <div className="flex w-full justify-between">
                    <p>ARO</p>
                    <div className="flex w-10 gap-3">
                        <p>12</p>
                        <ChevronDown />
                    </div>
                </div>

                <div className="w-full flex justify-center md:justify-start md:py-10">
                    <div className="linha w-80 md:w-150 h-px bg-black"></div>
                </div>
            </div>
        </div>
    )
}