import { Button } from "@/components/ui/button"
import Criar from "@/src/components/modal-criar"
import Paginacao from "@/src/components/paginacao"
import Tabela from "@/src/components/tabela-gerenciamento"
import { Plus } from "lucide-react"

export default function Page(){
    return(
        <div className="w-full">
            <div className="w-full py-10 px-14 flex flex-col md:flex-row md:justify-between items-center gap-6">
                <h1 className="text-xl md:text-3xl font-semibold">Gerenciamento de produtos</h1>
                <Criar />  
            </div>
            <Tabela />
        </div>
    )
}