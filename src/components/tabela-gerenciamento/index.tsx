import Link from "next/link"
import Image from "next/image"

import { Eye, SquarePen, Trash } from "lucide-react";
import Paginacao from "../paginacao";
import Visualizar from "../modal-visualizar";
import Editar from "../modal-editar";
import Excluir from "../modal-excluir";
import { Product } from "@/types/data";

type TabelaProps = {
    products: Product[]
}

export default function Tabela({ products }: TabelaProps){

    
    
    return(
        <div className="w-full overflow-x-auto md:flex md:justify-center px-5">
            <table className="w-300 bg-creme rounded-4xl">
                <thead className="">
                    <tr className="">
                        <th className="p-2 py-5">IMAGEM</th>
                        <th className="p-2">NOME DO PRODUTO</th>
                        <th className="p-2">MATERIAL</th>
                        <th className="p-2">PREÇO</th>
                        <th className="p-2">DESCRIÇÃO</th>
                        <th className="p-2">AÇÕES</th>
                    </tr>
                </thead>

                {/* <tr className=" border-b border-black"></tr> */}

                <tbody>
                    {products.map((product, index) => (
                    <tr key={index} className="text-center border-b border-black">
                        <td className="py-3">
                            <Link href='/' className="flex justify-center">
                                <Image
                                src={product.image}
                                alt="Logo da marca"
                                width={904}
                                height={904}
                                className="h-15 w-15 object-cover"
                                />
                            </Link>
                        </td>
                        <td className="p-2">{product.title}</td>
                        <td className="p-2">{product.material}</td>
                        <td className="p-2">R${product.price},00</td>
                        <td className="max-w-[50px] truncate p-2">{product.description}</td>
                        <td className="p-2">
                            <div className="flex justify-center gap-3">
                                <Visualizar product={product} />
                                <Editar product={product}/>
                                <Excluir product={product} />
                            </div>
                        </td>
                    </tr>
                    ))} 
                
                    <tr className=" border-black border w-200 py-3"/>
                    
                    <tr>
                        <td colSpan={5}>
                            <Paginacao />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}