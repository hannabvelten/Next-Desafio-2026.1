import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return(
        <div className="bg-azulEscurao flex h-54 w-full mt-24 px-15 py-7 items-center justify-between">
            <div className="esquerda h-full flex flex-col gap-6">
                <div className="redes-sociais flex flex-col items-center gap-3">
                    <p className=" texto text-white">Redes Sociais</p>
                    <div className="icones flex gap-3">
                        <i className="bi bi-instagram text-white text-2xl"></i>
                        <i className="bi bi-facebook text-white text-2xl"></i>
                        <i className="bi bi-twitter text-white text-2xl"></i>
                        <i className="bi bi-linkedin text-white text-2xl"></i>
                    </div>
                </div>
                <div className="contato flex flex-col h-full items-center text-white">
                    <p className="texto">Contato</p>
                    <p className="numero">(32) 91234-5678</p>
                </div>
            </div>

            <div className="meio text-white flex flex-col items-center gap-2">
                <p> 2026 Clair Acessórios. Todos os direitos reservados</p>
                <p>Termos de Uso | Política de Privacidade</p>
            </div>

            <div className="imagem flex shrink-0">
                <Link href='/'>
                    <Image 
                    src={'/imagens/logo.png'}
                    alt="Logo da marca"
                    width={904}
                    height={904}
                    className="h-40 w-auto"
                    />
                </Link>
            </div>
        </div>
    )
}