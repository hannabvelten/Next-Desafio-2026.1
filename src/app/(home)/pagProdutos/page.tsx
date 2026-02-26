import CardEspelhado from "@/src/components/card-espelhado";
import Search from "../../../components/search";
import Card from "@/src/components/cards";
import Paginacao from "@/src/components/paginacao";
import { getProdutos } from "@/actions/pagProdutos/action";



export default async function PagProdutos() {

    const products = await getProdutos()

    return (
        <div className="min-h-screen">
            <div className="w-full h-20 text-xl md:text-3xl flex justify-center p-10 md:py-15 text-azulEscuro">
                <p>JOIAS</p>
            </div>
            <Search />
            <div className="md:grid md:grid-cols-2 justify-center">
                {products.map((product, index) =>
                    index % 2 === 0 ? (
                    <CardEspelhado key={product.id} product={product} />
                    ) : (
                    <Card key={product.id} product={product} />
                    )
                )}
            </div>
            <Paginacao />
        </div>
    )
}