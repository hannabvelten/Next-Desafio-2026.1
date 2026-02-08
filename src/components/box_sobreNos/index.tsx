
import Link from "next/link"
import Image from "next/image"

export default function Box_SobreNos() {
    return (
        <div className="tudo w-full bg-brancoGelo flex px-4 md:px-20">
            <div className="bg-amarelinho w-full md:h-150 rounded-3xl flex">
                <div className="texto p-6">
                    <h1 className="font-anticdidone pb-2 text-azulEscuro font-bold text-xl md:text-6xl md:p-20">Elegância em <br />cada detalhe</h1>
                    <p className="text-xs">Do desenho ao acabamento final, nossas joias refletem sofisticação e cuidado. <span className="pt-2">Peças versáteis, feitas para durar e brilhar em qualquer ocasião.</span></p>
                </div>
                <Link href='/' className="relative">
                    <Image 
                    src={'/imagens/mulherHome.jpg'}
                    alt="mulher com colar"
                    width={904}
                    height={904}
                    className="h-full rounded-t-2xl rounded-b-2xl object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-r from-amarelinho via-transparent to-transparent"></div>
                </Link>


            </div>
        </div>
    )
}