import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Product } from "@/types/data"

type CardProps = {
    product: Product
}

export default function Card ({product}: CardProps) {
    const installment = product.price / 8;
    const formattedInstallment = installment.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return (
        <div>
            <div className="card w-full h-60 flex px-6 gap-5 pt-8 items-center">
                <Link href='/' className="" >
                    <Image 
                    src={product.image}
                    alt="Brinco argola + estrela"
                    width={904}
                    height={904}
                    className="object-cover h-40 w-40 md:h-50 md:w-50"
                    />
                </Link>
    
                <div className="conteudo flex flex-col gap-2">
                    <h1 className="text-[18px] md:text-2xl font-medium">{product.title}</h1>
                    <p className="text-[18px] md:text-2xl">R$ {product.price},00</p>
                    <p className="text-[11px] md:text-xs">ou 8x de {formattedInstallment}</p>
                    <div className="w-full flex">
                        <Button className="bg-creme flex justify-center rounded-3xl p-1 w-24 hover:bg-amber-100 text-black font-light" variant="default">
                            <Link href={`/produtoIndividual/${product.id}`} className="text-[14px] font-regular">VER MAIS</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center md:justify-start md:py-10">
                <div className="linha w-80 md:w-150 h-px bg-black"></div>
            </div>

        </div>
    )
}