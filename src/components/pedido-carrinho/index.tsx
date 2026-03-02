'use client'

import { useCart } from "@/src/context/cardContext";
import { Button } from "@/components/ui/button"

export default function Pedido() {

    const { cart } = useCart();
    const subtotal = cart.reduce((total, product) => {
        return total + product.price;
    }, 0);

    return(
        <div className="px-4 py-7 flex justify-center">
            <div className="px-2 py-2 w-full md:w-110 lg:h-100 border-1 border-golden rounded-3xl flex flex-col gap-3">
                <div>
                    <h1 className="text-xl font-medium py-3 px-2">Meu Pedido</h1>
                </div>
                <div className="w-full flex gap-4 px-2 pb-4">
                    <input type="text" placeholder="Insira um cupom de desconto..." className="border-1 border-black text-sm rounded-3xl px-2 py-2 text-xs w-full" />
                    <button className="border-1 border-black rounded-3xl px-2 text-sm">APLICAR</button>
                </div>
                <div className="flex flex-col gap-8 px-2 text-xs">
                    <div className="subtotal flex justify-between">
                        <p>Subtotal</p>
                        <p>R$ {subtotal},00</p>
                    </div>
                    <div className="descontos flex justify-between">
                        <p>Descontos</p>
                        <p>-R$0,00</p>
                    </div>
                    <div className="frete flex justify-between">
                        <p>Frete</p>
                        <p>R$ 00,00</p>
                    </div>
                </div>

                <div className="w-full flex justify-center md:justify-start md:py-2">
                    <div className="linha w-80 md:w-150 h-px bg-black"></div>
                </div>

                <div className="total flex justify-between p-2 text-sm">
                    <p>Total</p>
                    <p>R${subtotal},00</p>
                </div>

                <div className="w-full flex justify-center py-5 md:py-3 items-center">
                    <Button className="bg-amarelinho flex justify-center rounded-3xl py-2 w-full hover:bg-amber-100 text-black font-medium text-sm shadow-md/30" variant="default" type="submit">
                        COMPRAR
                    </Button>
                </div>

            </div>
        </div>
    )
}