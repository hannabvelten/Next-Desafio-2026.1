import CardEspelhado from "@/src/components/card-espelhado";
import Search from "../../components/search";
import Card from "@/src/components/cards";

export default function PagProdutos() {
    return (
        <div className="min-h-screen">
            <div className="w-full h-20 text-xl md:text-3xl flex justify-center p-10 md:py-15 text-azulEscuro">
                <p>JOIAS</p>
            </div>
            <Search />
            <div className="md:grid md:grid-cols-2 justify-center">
                <CardEspelhado />
                <Card />
                <CardEspelhado />
                <Card />
                <CardEspelhado />
                <Card />
            </div>
        </div>
    )
}