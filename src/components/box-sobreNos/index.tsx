
import Link from "next/link"
import Image from "next/image"

export default function Box_SobreNos() {
    return (
        <div className="tudo w-full bg-brancoGelo flex px-4 lg:px-20 md:py-8">
            <div className="bg-amarelinho w-full md:h-150 rounded-3xl flex h-70">
                <div className="texto p-6 md:w-130 w-130">
                    <h1 className="font-anticdidone pb-2 text-azulEscuro font-bold text-xl md:text-6xl md:p-10 md:whitespace-nowrap">Elegância em <br />cada detalhe</h1>
                    <p className="text-xs md:text-3xl md:px-11 md:tracking-wider">Do desenho ao acabamento final, nossas joias refletem sofisticação e cuidado. <br /> Peças versáteis, feitas para durar e brilhar em qualquer ocasião.</p>
                </div>
                <Link href='/' className="relative w-150 md:w-full">
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