export default function Pedido() {
    return(
        <div className="px-2 w-full border-1 border-golden rounded-3xl flex flex-col gap-3">
            <div>
                <h1 className="text-xl font-medium">Seu Pedido</h1>
            </div>
            <div className="w-full flex gap-4">
                <input type="text" placeholder="Insira um cupom de desconto..." className="border-1 border-black rounded-3xl px-2 text-xs w-full" />
                <button className="border-1 border-black rounded-3xl px-2">APLICAR</button>
            </div>

            <div className="flex flex-col gap-4">
                <div className="subtotal flex justify-between">
                    <p>Subtotal</p>
                    <p>R$1.640,00</p>
                </div>
                <div className="descontos flex justify-between">
                    <p>Descontos</p>
                    <p>-R$0,00</p>
                </div>
                <div className="frete flex justify-between">
                    <p>Frete</p>
                    <p>R$50,00</p>
                </div>
            </div>

            <div className="w-full flex justify-center md:justify-start md:py-10">
                <div className="linha w-85 md:w-150 h-px bg-black"></div>
            </div>

            <div className="total flex justify-between">
                <p>Total</p>
                <p>R$1.690,00</p>
            </div>
        </div>
    )
}