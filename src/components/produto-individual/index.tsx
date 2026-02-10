import Image from "next/image"
import Link from "next/link"

export default function PagPIndivudual (){
    return (
        <div className="tudo flex flex-col">
            <div className="imagem py-10 w-full flex justify-center items-center">
                <Link href='/'>
                    <Image 
                    src={'/imagens/aliancaOuro.jpeg'}
                    alt="Aliança ouro"
                    width={904}
                    height={904}
                    className="object-cover object-[center_82%] h-45 w-40"
                    />
                </Link>
            </div>
            <div className="conteudo flex flex-col gap-5 px-10">
                <h1 className="text-2xl font-semibold">Par Alianças Premium</h1>
                <p className="text-xs">Par de alianças premium em ouro 18k, com acabamento refinado e design atemporal.
Uma joia criada para simbolizar união, amor e compromisso em todos os momentos da vida.</p>
            </div>
        </div>
    )
}