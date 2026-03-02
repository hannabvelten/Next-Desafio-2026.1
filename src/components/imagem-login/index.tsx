import Link from "next/link"
import Image from "next/image"

export default function ImagemLogin (){
    return (
        <div>
            <div className="lg:hidden flex w-full min-h-[100vh] bg-blue-200">
                <Link href='/'>
                    <Image
                    src={'/imagens/colarManequim.jpeg'}
                    alt="Colar em manequim"
                    fill
                    className="object-cover"
                    />
                </Link>
                <div className="absolute inset-0 z-10 bg-white/40"></div>
            </div>

            <div className="hidden lg:flex lg:w-123">
                <Link href='/'>
                    <Image
                    src={'/imagens/colarManequim.jpeg'}
                    alt="Colar em manequim"
                    width={904}
                    height={904}
                    className=""
                    />
                </Link>
            </div>

            <div className="hidden md:flex absolute inset-0 bg-linear-to-r right-260.5 from-transparent via-transparent to-white"></div>
        </div>
    )
}