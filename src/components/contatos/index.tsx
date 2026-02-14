import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Contatos() {
    return (
        <div>
            <div className="w-full flex flex-col justify-center items-center p-7 gap-4">
                <h1 className="text-3xl md:text-4xl text-azulEscuro">Entre em Contato</h1>
                <p className="text-center text-xs md:text-sm">Tem alguma dúvida, sugestão ou precisa de ajuda com seu pedido? Estamos aqui para te atender com carinho e atenção!</p>
            </div>

            <div className="contatos flex flex-col gap-11">
                <div className="celular&email w-full flex justify-center text-xs gap-10 md:gap-19 text-center items-center">
                    <div className="celular flex flex-col md:gap-2">
                        <div className="flex gap-2 items-center">
                            <div className="icone">
                                <Phone size={16} className="md:w-5 md:h-5"/>
                            </div>
                            <p className="font-medium md:text-xl">Celular</p>
                        </div>
                        <p className="md:text-sm">(32) 91234-5678</p>
                    </div>

                    <div className="email flex flex-col text-center md:gap-2">
                        <div className="flex gap-2 justify-center text-center items-center">
                            <Mail size={16} className="md:w-5 md:h-5"/>
                            <p className="font-medium md:text-xl">Email</p>
                        </div>
                        <p className="md:text-sm">clair.contato@gmail.com</p>
                    </div>
                </div>

                <div className="atendimento&loc w-full flex justify-center text-xs gap-10 md:gap-19 text-center">
                    <div className="atendimento flex flex-col md:gap-2">
                        <div className="flex gap-2 justify-center">
                            <Clock size={16} className="md:w-5 md:h-5"/>
                            <p className="font-medium md:text-xl">Atendimento</p>
                        </div>
                        <p className="md:text-sm">Seg a Sex — 9h às 18h</p>
                    </div>
                    <div className="loc flex flex-col md:gap-2">
                        <div className="flex gap-2 justify-center">
                            <MapPin size={16} className="md:w-5 md:h-5"/>
                            <p className="font-medium md:text-xl">Localização</p>
                        </div>
                        <p className="md:text-sm">São Mateus - Juiz de Fora, MG</p>
                    </div>
                </div>
            </div>

        </div>
    )
}