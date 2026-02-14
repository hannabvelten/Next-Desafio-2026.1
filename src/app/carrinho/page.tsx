import ItensCarrinho from "@/src/components/itens-carrinho"
import Pedido from "@/src/components/pedido-carrinho"

export default function Carrinho(){
    return(
        <div>
            <div className="w-full flex">
                <p className="md:text-4xl text-2xl font-semibold px-5 py-5 md:px-20 md:py-10">Meu Carrinho</p>
            </div>

            <div className="w-full flex justify-center">
                <div className="linha w-83 md:w-150 h-px bg-black"></div>
            </div>

            <ItensCarrinho />
            <Pedido />
        </div>
    )
}