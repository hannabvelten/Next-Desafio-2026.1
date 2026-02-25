'use client'

import { createProduct } from "@/actions/gerenciamento/actions"
import { Button } from "@/components/ui/button"
import { Plus, PlusIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Criar(){

    const [aberto, setAberto] = useState(false)

    const [image, setImage] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if (file) {
            setImage(file)
            setPreview(URL.createObjectURL(file))
        }
}

    return(   
        <div>
            <Button onClick={() => setAberto(true)} className="bg-amarelinho w-40 flex justify-center rounded-3xl py-2 hover:bg-amber-100 text-black font-medium text-sm shadow-md/30" variant="default" type="submit">
                <Plus />
                Novo produto
            </Button>

            {aberto && (
                <div className="fixed inset-0  bg-black/50 flex items-center justify-center">
                    <form autoComplete="off" className="absolute md:w-150 w-85  bg-white rounded-2xl" action={createProduct}>
                        <div className="w-full flex flex-col h-20 gap-2 rounded-2xl justify-center items-center text-xl bg-azulEscuro text-white">
                            <PlusIcon />
                            <h1 className="font-medium">ADICIONAR PRODUTO</h1>
                        </div>

                        <div className="p-10 flex gap-10 flex-col md:flex-row items-center">
                            {preview ? (
                                <img
                                src={preview}
                                alt="Preview"
                                className="w-42 h-40 object-cover rounded-2xl"
                                />
                            ) : (
                                <label className="cursor-pointer border border-black w-42 h-40 flex items-center justify-center text-xs rounded-2xl text-center">
                                Escolher imagem
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    name="image"
                                />
                                </label>
                            )}

                            <div className="flex flex-col gap-3">
                                <p>Nome do produto:</p>
                                <input 
                                    className="border-b-1 border-black w-70 outline-none"
                                    name="name">
                                </input>
                            </div>
                        </div>

                        <div className="flex flex-col gap-10 justify-center items-center w-full">
                            <div className="flex flex-col gap-3">
                                    <p>Material:</p>
                                    <input className="border-b-1 border-black w-70 md:w-130 outline-none" name="material"></input>
                            </div>
                            <div className="flex flex-col gap-3">
                                    <p>Preço:</p>
                                    <input className="border-b-1 border-black w-70 md:w-130 outline-none" name="price" type="number"></input>
                            </div>
                            <div className="flex flex-col gap-3">
                                    <p>Descrição:</p>
                                    <input className="border-b-1 border-black w-70 md:w-130 outline-none" name="description"></input>
                            </div>
                        </div>

                        <div className="flex w-full justify-center gap-6 py-7">
                            <button onClick={() => setAberto(false)} type="button" className="text-white bg-anil rounded-3xl cursor-pointer px-4 py-2">
                                Cancelar
                            </button>
                            <button type="submit" className="bg-golden rounded-3xl cursor-pointer px-4 py-2">
                                Adicionar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}