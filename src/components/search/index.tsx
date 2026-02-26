"use client"

import { Product } from "@/types/data";
import { Search as SearchIcon} from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {

    const searchParams = useSearchParams()
    const router = useRouter()

    const [searchTerm, setSearchTerm] = useState(
        searchParams.get("query") || "");

    const handleSearch = (query: string) => {
        const params = new URLSearchParams();

        if (query) {
            params.set("query", query);
        } else {
            params.delete("query");
        }

        router.push(`?${params.toString()}`);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(searchTerm)
    }

    return (
        <form  onSubmit={handleSubmit} className="flex basis-full px-3" autoComplete="off">
            <div className=" flex w-full flex-col items-center gap-6 pt-4 md:pt-5 md:pb-10">
                <div className="w-full md:h-8 flex md:w-150 rounded-xl bg-creme shadow-md/20 px-5 py-2 text-xs gap-3 h-8">
                    <SearchIcon className="w-5 md:w-4 h-full opacity-60 flex items-center"/>
                    <input 
                    id="search"
                    name="search"
                    type="text"
                    className="w-full outline-none"
                    placeholder="O que você procura?"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    /> 
                </div>
            </div>
        </form>
    )
}