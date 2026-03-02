import { getTabela } from "@/actions/gerenciamento/actions"
import { fetchFilteredPosts } from "@/actions/search/actions"
import { Button } from "@/components/ui/button"
import Criar from "@/src/components/modal-criar"
import Paginacao from "@/src/components/paginacao"
import Tabela from "@/src/components/tabela-gerenciamento"
import { Plus } from "lucide-react"



export default async function Page({
        searchParams,
    }: {
        searchParams:{
            query?: string;
            page?: string;
        }
    }) {
        const query = searchParams?.query || ''
        const currentPage = Number(searchParams?.page) || 1
        
        const {products, count} = await fetchFilteredPosts(query, currentPage,5)
        const itemsPerPage = 4
        const totalPages = Math.ceil(count / itemsPerPage)

    return(
        <div className="w-full">
            <div className="w-full py-10 px-10 md:px-14 flex flex-col md:flex-row md:justify-between gap-6">
                <h1 className="text-xl md:text-3xl font-semibold">Gerenciamento de produtos</h1>
                <Criar />  
            </div>
            <Tabela products = {products} totalPages={totalPages} />
        </div>
    )
}