'use client'

import { SquarePen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Editar ( {id}: { id: number | undefined}){

    const [aberto, setAberto] = useState(false)

    return (
        <div>
            <button onClick={() => setAberto(true)}>
                <SquarePen />
            </button>

            {aberto && (
                <div className="fixed inset-0  bg-black/50 flex items-center justify-center">
                    <div className="absolute md:w-150 w-85 md:h-130 bg-white rounded-2xl">
                        <div className="w-full flex flex-col h-20 gap-2 rounded-2xl justify-center items-center text-xl bg-azulEscuro text-white">
                            <SquarePen />
                            <h1 className="font-medium">EDITAR PRODUTO</h1>
                        </div>

                        <div className="p-10 flex flex-col md:flex-row gap-10 text-start items-center">
                            <Image 
                            src={'/imagens/logo.png'}
                            alt="Logo da marca"
                            width={904}
                            height={904}
                            className="md:h-25 w-40 md:w-auto rounded-3xl"
                            />

                            <div className="flex flex-col gap-3">
                                <p>Nome do produto:</p>
                                <input className="border-b-1 border-black w-70 outline-none" placeholder=""></input>
                            </div>
                        </div>

                        <div className="flex flex-col gap-10 justify-center items-center w-full text-start">
                            <div className="flex flex-col gap-3">
                                    <p>Descrição:</p>
                                    <input className="border-b-1 border-black w-70 md:w-130 outline-none" placeholder=""></input>
                            </div>
                            <div className="flex flex-col gap-3">
                                    <p>Preço:</p>
                                    <input className="border-b-1 border-black w-70 md:w-130 outline-none" placeholder=""></input>
                            </div>
                        </div>

                        <div className="flex w-full justify-center gap-6 py-7">
                            <button onClick={() => setAberto(false)} className="text-white bg-anil rounded-3xl cursor-pointer px-4 py-2">
                                Cancelar
                            </button>
                            <button onClick={() => setAberto(false)} className="bg-golden rounded-3xl cursor-pointer px-4 py-2">
                                Editar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}