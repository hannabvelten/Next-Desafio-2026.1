import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Contatos() {
    return (
        <div>
            <div className="w-full flex flex-col justify-center items-center p-7 gap-4">
                <h1 className="text-3xl text-azulEscuro">Entre em Contato</h1>
                <p className="text-center text-xs">Tem alguma dúvida, sugestão ou precisa de ajuda com seu pedido? Estamos aqui para te atender com carinho e atenção!</p>
            </div>

            <div className="contatos flex flex-col gap-11">
                <div className="celular&email w-full flex justify-center text-xs gap-10 text-center items-center">
                    <div className="celular flex-wrap gap-3">
                        <div className="flex gap-2">
                            <div className="icone">
                                <Phone size={16}/>
                            </div>
                            <p className="font-medium">Celular</p>
                        </div>
                        <p>(32) 91234-5678</p>
                    </div>

                    <div className="email flex flex-col text-center">
                        <div className="flex gap-2 justify-center text-center">
                            <Mail size={16}/>
                            <p className="font-medium">Email</p>
                        </div>
                        <p>clair.contato@gmail.com</p>
                    </div>
                </div>

                <div className="atendimento&loc w-full flex justify-center text-xs gap-10 text-center">
                    <div className="atendimento flex flex-col">
                        <div className="flex gap-2 justify-center">
                            <Clock size={16}/>
                            <p className="font-medium">Atendimento</p>
                        </div>
                        <p>Seg a Sex — 9h às 18h</p>
                    </div>
                    <div className="loc flex flex-col">
                        <div className="flex gap-2 justify-center">
                            <MapPin size={16}/>
                            <p className="font-medium">Localização</p>
                        </div>
                        <p>São Mateus - Juiz de Fora, MG</p>
                    </div>
                </div>
            </div>

        </div>
    )
}