import Link from "next/link"
import Image from "next/image"

import { Eye, SquarePen, Trash } from "lucide-react";
import Paginacao from "../paginacao";
import Visualizar from "../modal-visualizar";
import Editar from "../modal-editar";
import Excluir from "../modal-excluir";

export default function Tabela(){
    return(
        <div className="flex justify-center overflow-x-auto">
            <table className="w-300 bg-creme rounded-4xl">
                <thead className="">
                    <tr className="">
                        <th className="p-2 py-5">IMAGEM</th>
                        <th className="p-2">NOME DO PRODUTO</th>
                        <th className="p-2">PREÇO</th>
                        <th className="p-2">DESCRIÇÃO</th>
                        <th className="p-2">AÇÕES</th>
                    </tr>
                </thead>

                <tr className=" border-black border w-200 py-3"/>

                <tbody>
                    <tr className="text-center">
                        <td className="py-3">
                            <Link href='/' className="flex justify-center">
                                <Image 
                                src={'/imagens/anelDuoCravejado.jpg'}
                                alt="Logo da marca"
                                width={904}
                                height={904}
                                className="h-15 w-auto"
                                />
                            </Link>
                        </td>
                        <td className="p-2">Anel Duo Cravejado</td>
                        <td className="p-2">R$350,00</td>
                        <td className="max-w-[50px] truncate p-2">Anel em prata 925 lindo pra usar em qualquer ocasiao e dia da sua vida lmojcidvdj</td>
                        <td className="p-2">
                            <div className="flex justify-center gap-3">
                                <Visualizar />
                                <Editar />
                                <Excluir />
                            </div>
                        </td>
                    </tr>

                    <tr className=" border-black border w-200 py-3"/>

                    <tr className="text-center">
                        <td className="py-5">
                            <Link href='/' className="flex justify-center">
                                <Image 
                                src={'/imagens/anelDuoCravejado.jpg'}
                                alt="Logo da marca"
                                width={904}
                                height={904}
                                className="h-15 w-auto"
                                />
                            </Link>
                        </td>
                        <td className="p-2">Anel Duo Cravejado</td>
                        <td className="p-2">R$350,00</td>
                        <td className="max-w-[50px] truncate p-2">Anel em prata 925 lindo pra usar em qualquer ocasiao e dia da sua vida lmojcidvdj</td>
                        <td className="p-2">
                            <div className="flex justify-center gap-3">
                                <Eye />
                                <SquarePen />
                                <Trash className="text-red-700"/>
                            </div>
                        </td>
                    </tr>

                    <tr className=" border-black border w-200 py-3"/>

                    <tr className="text-center">
                        <td className="py-5">
                            <Link href='/' className="flex justify-center">
                                <Image 
                                src={'/imagens/anelDuoCravejado.jpg'}
                                alt="Logo da marca"
                                width={904}
                                height={904}
                                className="h-15 w-auto"
                                />
                            </Link>
                        </td>
                        <td className="p-2">Anel Duo Cravejado</td>
                        <td className="p-2">R$350,00</td>
                        <td className="max-w-[50px] truncate p-2">Anel em prata 925 lindo pra usar em qualquer ocasiao e dia da sua vida lmojcidvdj</td>
                        <td className="p-2">
                            <div className="flex justify-center gap-3">
                                <Eye />
                                <SquarePen />
                                <Trash className="text-red-700"/>
                            </div>
                        </td>
                    </tr>

                    <tr className=" border-black border w-200 py-3"/>

                    <tr className="text-center">
                        <td className="py-5">
                            <Link href='/' className="flex justify-center">
                                <Image 
                                src={'/imagens/anelDuoCravejado.jpg'}
                                alt="Logo da marca"
                                width={904}
                                height={904}
                                className="h-15 w-auto"
                                />
                            </Link>
                        </td>
                        <td className="p-2">Anel Duo Cravejado</td>
                        <td className="p-2">R$350,00</td>
                        <td className="max-w-[50px] truncate p-2">Anel em prata 925 lindo pra usar em qualquer ocasiao e dia da sua vida lmojcidvdj</td>
                        <td className="p-2">
                            <div className="flex justify-center gap-3">
                                <Eye />
                                <SquarePen />
                                <Trash className="text-red-700"/>
                            </div>
                        </td>
                    </tr>

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