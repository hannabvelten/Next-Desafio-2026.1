import { Button } from "@/components/ui/button"

export default function Formulario() {
    return(
        <div className="p-4">
            <div className="bg-creme w-full md:w-110 rounded-3xl flex flex-col justify-center p-4 gap-6">
                <h1 className="text-center text-xl">Fale com a gente:</h1>
                <form className="flex flex-col gap-6">
                    <input className="bg-brancoGelo py-2 px-3 rounded-4xl w-full border-1 border-golden text-sm shadow-md/30" placeholder="Digite seu nome..."></input>
                    <input className="bg-brancoGelo py-2 px-3 rounded-4xl w-full border-1 border-golden text-sm shadow-md/20" placeholder="Digite seu email..."></input>
                    <input className="bg-brancoGelo py-2 px-3 rounded-4xl w-full border-1 border-golden text-sm shadow-md/20" placeholder="Sobre o que você que falar?"></input>
                    <textarea className="bg-brancoGelo py-2 px-3 rounded-4xl resize-none w-full h-30 border-1 border-golden text-sm flex shadow-md/20" placeholder="Digite sua mensagem..."></textarea>

                    <div className="w-full flex justify-center">
                        <Button className="bg-amarelinho flex justify-center rounded-3xl p-2 hover:bg-amber-100 text-black font-medium shadow-md/30" variant="default" type="submit">
                            Enviar mensagem
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}