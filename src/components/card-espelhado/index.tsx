import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function CardEspelhado () {
    return (
        <div>
            <div className="card w-full h-60 flex px-6 gap-5 pt-8 items-center md:justify-start md:flex-row-reverse">
                <Link href='/' className="" >
                    <Image 
                    src={'/imagens/brincoEstrela.jpeg'}
                    alt="Brinco argola + estrela"
                    width={904}
                    height={904}
                    className="object-cover h-40 w-40 md:h-50 md:w-50"
                    />
                </Link>
                <div className="conteudo flex flex-col gap-2 md:justify-end">
                    <h1 className="text-[18px] md:text-2xl font-medium flex md:justify-end">Brinco Argola + Estrela</h1>
                    <p className="text-[18px] md:text-2xl flex md:justify-end">R$1.290,00</p>
                    <p className="text-[11px] md:text-xs flex md:justify-end">ou 5x de R$258,00</p>
                    <div className="w-full flex md:justify-end">
                        <Button className="bg-creme flex justify-center rounded-3xl p-1 w-24 hover:bg-amber-100 text-black font-light" variant="default">
                            <p className="text-[14px] font-regular">VER MAIS</p>
                        </Button>
                    </div>
                </div>
    
            </div>

            <div className="w-full flex justify-center md:justify-end md:py-10">
                <div className="linha w-80 md:w-150 h-px bg-black"></div>
            </div>

        </div>
    )
}