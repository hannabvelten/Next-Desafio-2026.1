import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
    return(
        <div className="imagem w-full h-40 md:h-150 relative justify-end">
            <Link href='/'>
                <Image 
                src={'/imagens/colarHero.jpeg'}
                alt="Colar dourado"
                fill
                className="object-cover object-[center_82%]"
                />
            </Link>
            <h1 className="texto absolute text-azulEscuro font-anticdidone flex-col text-xl lg:text-[70px] md:text-4xl text-end inset-0 px-9 py-21 lg:px-45 lg:py-80 md:px-35 md:py-110 ">
                <span>Sua  </span> 
                <span className="text-golden"> essência</span>
                <span>, em</span>
                <br />
                <span>forma de </span> 
                <span className="text-golden"> joia</span>.
            </h1>
        </div>
        
    )
}