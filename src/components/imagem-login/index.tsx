import Link from "next/link"
import Image from "next/image"

export default function ImagemLogin (){
    return (
        <div>
            <Link href='/'>
                <Image 
                src={'/imagens/colarManequim.jpeg'}
                alt="Colar em manequim"
                width={904}
                height={904}
                className=" md:h-185 w-auto"
                />
            </Link>
            <div className="absolute inset-0 bg-linear-to-r right-260 from-transparent via-transparent to-white"></div>
        </div>
    )
}