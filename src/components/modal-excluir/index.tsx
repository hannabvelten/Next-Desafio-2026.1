'use client'

import { Eye, Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Excluir (){

    const [aberto, setAberto] = useState(false)

    return (
        <div>
            <button onClick={() => setAberto(true)}>
                <Trash className="text-red-700"/>
            </button>
            
            {aberto && (
                <div className="fixed inset-0  bg-black/50 flex items-center justify-center">
                    <div className="absolute w-150 h-90 bg-white rounded-2xl">
                        <div className="w-full flex flex-col h-20 gap-2 rounded-2xl justify-center items-center text-xl bg-azulEscuro text-white">
                            <Trash />
                            <h1 className="font-medium">EXCLUIR PRODUTO</h1>
                        </div>

                        <div className="p-10 flex gap-10">
                            <Image 
                            src={'/imagens/anelDuoCravejado.jpg'}
                            alt="anel cravejado"
                            width={904}
                            height={904}
                            className="h-35 w-auto rounded-3xl"
                            />

                            <div className="flex flex-col gap-3 text-start">
                                <p className="font-semibold">Anel Duo Cravejado</p>
                                <p className="text-xs font-light">Anel em prata 925 com banho de ouro, composto por duas faixas delicadamente cravejadas com zircônias, trazendo brilho e sofisticação para o dia a dia ou ocasiões especiais.</p>
                                <p className="font-medium">R$350,00</p>
                            </div>
                        </div>

                        <div className="flex w-full justify-center gap-7">
                            <button onClick={() => setAberto(false)} className="text-white bg-anil rounded-3xl cursor-pointer px-4 py-2">
                                Cancelar
                            </button>
                            <button onClick={() => setAberto(false)} className="bg-golden rounded-3xl cursor-pointer px-4 py-2">
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}