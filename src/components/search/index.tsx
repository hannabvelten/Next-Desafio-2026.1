import { Search as SearchIcon} from "lucide-react";

export default function Search() {
    return (
        <form className="flex basis-full px-3" autoComplete="off">
            <div className=" flex w-full flex-col items-center gap-6">
                <div className="relative flex w-full items-center px-5">
                    <SearchIcon className="w-5 h-5 left-8 absolute opacity-60"/>
                    <input 
                    id="search"
                    name="search"
                    type="text"
                    className="w-full h-1 rounded-xl bg-creme shadow-md/20 hover:bg-creme px-10 py-4 text-xs transition-all duration-300"
                    placeholder="O que você procura?"
                    /> 

                </div>
            </div>
        </form>
    )
}