import { Search as SearchIcon} from "lucide-react";

export default function Search() {
    return (
        <form className="flex basis-full px-3" autoComplete="off">
            <div className=" flex w-full flex-col items-center gap-6">
                <div className="w-full md:h-8 flex md:w-150 rounded-xl bg-creme shadow-md/20 px-5 py-2 text-xs gap-3 h-8">
                    <SearchIcon className="w-5 md:w-4 h-full opacity-60 flex items-center"/>
                    <input 
                    id="search"
                    name="search"
                    type="text"
                    className=""
                    placeholder="O que você procura?"
                    /> 

                </div>
            </div>
        </form>
    )
}