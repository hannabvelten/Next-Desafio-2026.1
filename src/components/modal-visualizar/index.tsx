'use client'

import { Product } from "@/types/data";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Visualizar({ product }: { product: Product }){

    const [aberto, setAberto] = useState(false)

    return(
        <div>
            <button onClick={() => setAberto(true)}>
                <Eye />
            </button>

            {aberto && (
                <div className="fixed inset-0  bg-black/50 flex items-center justify-center">
                    <div className="absolute w-85 md:w-150 md:h-90 bg-white rounded-2xl">
                        <div className="w-full flex flex-col h-20 gap-2 rounded-2xl justify-center items-center text-xl bg-azulEscuro text-white">
                            <Eye />
                            <h1 className="font-medium">VISUALIZAR PRODUTO</h1>
                        </div>

                        <div className="p-10 flex flex-col md:flex-row gap-10 items-center">
                            <Image 
                            src={product.image}
                            alt="anel cravejado"
                            width={904}
                            height={904}
                            className="md:h-35 w-30 md:w-auto rounded-3xl"
                            />

                            <div className="flex flex-col gap-3 text-start">
                                <p className="font-semibold">{product.title}</p>
                                <p className="text-xs font-light">{product.description} </p>
                                <p className="font-medium">R${product.price},00</p>
                            </div>
                        </div>

                        <div className="flex w-full justify-center pb-4">
                            <button onClick={() => setAberto(false)} className="text-white bg-anil rounded-3xl cursor-pointer px-4 py-2">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}