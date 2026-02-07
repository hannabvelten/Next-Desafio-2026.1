import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return(
        <div className="bg-azulEscurao flex h-fit w-full mt-24 md:px-15 py-7 items-center justify-between flex-col">
            <div className="redes e politicas flex gap-10 w-full justify-center">
                <div className="esquerda h-full flex flex-col gap-6 items-center justify-center">
                    <div className="redes-sociais flex flex-col items-center gap-3 text-x">
                        <p className=" texto text-white text-xs">Redes Sociais</p>
                        <div className="icones flex gap-3">
                            <i className="bi bi-instagram text-white"></i>
                            <i className="bi bi-facebook text-white"></i>
                            <i className="bi bi-twitter text-white"></i>
                            <i className="bi bi-linkedin text-white"></i>
                        </div>
                    </div>
                    <div className="contato flex flex-col h-full items-center text-white text-xs">
                        <p className="texto">Contato</p>
                        <p className="numero">(32) 91234-5678</p>
                    </div>
                </div>
                <div className="meio text-white flex flex-col items-center justify-center gap-2 text-[10px]">
                    <p className="flex text-center"> 2026 Clair Acessórios. <br /> Todos os direitos reservados</p>
                    <p>Termos de Uso | Política de Privacidade</p>
                </div>
            </div>

            <div className="imagem flex shrink-0">
                <Link href='/'>
                    <Image 
                    src={'/imagens/logo.png'}
                    alt="Logo da marca"
                    width={904}
                    height={904}
                    className="h-24 md:h-40 w-auto"
                    />
                </Link>
            </div>
        </div>
    )
}