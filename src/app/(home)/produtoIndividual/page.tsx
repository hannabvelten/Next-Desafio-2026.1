import { fetchProductById } from "@/actions/gerenciamento/actions";
import PagPIndivudual from "@/src/components/produto-individual";

export default async function ProdutoIndividual({params}: {params: {id: number}}){
    const id = params.id

    const product = await fetchProductById(id)

    return (
        <div className="">
            <PagPIndivudual product={product}/>
        </div>
    )
}