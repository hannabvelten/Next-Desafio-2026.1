import ItensCarrinho from "@/src/components/itens-carrinho"
import Pedido from "@/src/components/pedido-carrinho"

export default function Carrinho(){
    return(
        <div>
            <div className="w-full flex">
                <p className="md:text-4xl text-2xl font-semibold px-5 py-5 md:px-47 md:py-7">Meu Carrinho</p>
            </div>

            <div className="w-full flex sm:justify-center h-2 md:justify-start md:px-47">
                <div className="linha w-83 md:w-200 h-px bg-black"></div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-center">
                <ItensCarrinho />
                <Pedido />
            </div>
        </div>
    )
}