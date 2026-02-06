import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
    return(
        <div className="imagem w-full h-150 relative justify-end">
            <Link href='/'>
                <Image 
                src={'/imagens/colarHero.jpeg'}
                alt="Colar dourado"
                fill
                className="object-cover object-[center_82%]"
                />
            </Link>
            <h1 className="texto absolute w-full h-full text-azulEscuro font-anticdidone flex-col text-[70px] text-end justify-end items-end inset-0 px-45 py-80">
                <span>Sua  </span> 
                <span className="text-golden"> essência, em </span>
                <br />
                <span> forma de </span> 
                <span className="text-golden"> joia</span>.
            </h1>
        </div>
        
    )
}