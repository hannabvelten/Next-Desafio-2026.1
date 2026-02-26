import { fetchProductById } from "@/actions/postIndividual/actions";
import PagPIndivudual from "@/src/components/produto-individual";
import { notFound } from "next/navigation";

export default async function ProdutoIndividual({params}: {params: {id: string}}){
    const id = parseInt(params.id, 10)

    const product = await fetchProductById(id)

    console.log("ID:", id)
    console.log("Produto:", product)

    if (!product) {
        notFound();
    }

    return (
        <div className="">
            <PagPIndivudual product={product}/>
        </div>
    )
}