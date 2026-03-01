import Contatos from "@/src/components/contatos";
import Formulario from "@/src/components/formulario";
import Mapa from "@/src/components/mapa";

export default function Contato() {
    return(
        <div className="md:flex-row md:gap-10 bg-brancoGelo">
            <div className="w-full flex flex-col justify-center items-center p-7 gap-4">
                <h1 className="text-3xl md:text-4xl text-azulEscuro">Entre em Contato</h1>
                <p className="text-center text-xs md:text-sm">Tem alguma dúvida, sugestão ou precisa de ajuda com seu pedido? Estamos aqui para te atender com carinho e atenção!</p>
            </div>

            <div className=" flex lg:flex-row sm:flex-col justify-center lg:gap-30">
                <div className="flex flex-col gap-10 pb-10">
                    <Contatos />
                    <Mapa />
                </div>
                <Formulario />
            </div>
        </div>
    )
}