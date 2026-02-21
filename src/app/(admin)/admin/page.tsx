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
                <Button className="bg-amarelinho w-40 flex justify-center rounded-3xl py-2 hover:bg-amber-100 text-black font-medium text-sm shadow-md/30" variant="default" type="submit">
                    <Plus />
                    Novo produto
                </Button>
            </div>
            <Tabela />
            <Criar />
        </div>
    )
}