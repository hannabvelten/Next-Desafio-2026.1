import Image from "next/image"
import Link from "next/link"

export default function Card () {
    return (
        <div>
            <div className="card w-full h-60 flex px-6 gap-5 pt-8 items-center">
                <Link href='/' className="" >
                    <Image 
                    src={'/imagens/brincoEstrela.jpeg'}
                    alt="Brinco argola + estrela"
                    width={904}
                    height={904}
                    className="object-cover h-40 w-40"
                    />
                </Link>
    
                <div className="conteudo flex flex-col gap-2">
                    <h1 className="text-[18px] font-medium">Brinco Argola + Estrela</h1>
                    <p className="text-[18px]">R$1.290,00</p>
                    <p className="text-[11px]">ou 5x de R$258,00</p>
                    <div className="bg-creme flex justify-center rounded-3xl p-1 w-24">
                        <p className="text-[14px]">VER MAIS</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="linha w-80 md:w-full h-px bg-black"></div>
            </div>

        </div>
    )
}