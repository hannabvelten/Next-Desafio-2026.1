import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Product } from "@/types/data"
import { Gem } from "lucide-react"

type CardProps = {
    product: Product
}

export default function CardEspelhado ({product}: CardProps) {
    const installment = product.price / 8;
    const formattedInstallment = installment.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return (
        <div>
            <div className="card w-full h-60 flex px-6 gap-5 pt-8 items-center md:justify-start md:flex-row-reverse">
                <Link href='/' className="" >
                    <Image 
                    src={product.image}
                    alt="Brinco argola + estrela"
                    width={904}
                    height={904}
                    className="object-cover h-40 w-40 lg:h-50 lg:w-50"
                    />
                </Link>
                <div className="conteudo flex flex-col gap-2 md:justify-end">
                    <h1 className="text-[17px] lg:text-2xl font-medium flex md:justify-end">{product.title}</h1>
                    <div className="flex items-center gap-2 md:justify-end">
                        <Gem size={15}/>
                        <p className="text-xs md:text-[10px] lg:text-sm font-medium flex md:justify-end">{product.material}</p>
                    </div>
                    <p className="text-[18px] lg:text-2xl flex md:justify-end">R$ {product.price},00</p>
                    <p className="text-[11px] lg:text-xs flex md:justify-end">ou 8x de {formattedInstallment}</p>
                    <div className="w-full flex md:justify-end">
                        <Button className="bg-creme flex justify-center rounded-3xl p-1 w-24 hover:bg-amber-100 text-black font-light" variant="default">
                            <Link href={`/produtoIndividual/${product.id}`}  className="text-[14px] font-regular">VER MAIS</Link>
                        </Button>
                    </div>
                </div>
    
            </div>

            <div className="w-full flex justify-center md:justify-end md:py-10">
                <div className="linha w-85 lg:w-150 h-px bg-black"></div>
            </div>

        </div>
    )
}