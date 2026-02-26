'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Product } from '@/types/data';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Paginacao({totalPages}: {totalPages: number}){
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page') || 1)

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', 1)
        params.set("page", pageNumber.toString())
        return `${pathname}?${params.toString()}`
    }

    const pages = []

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    return (
        <div className="w-full flex justify-center p-10 items-center">
            <div className="tudo flex w-150 justify-center md:gap-10 gap-7 items-center">
                {currentPage > 1 && (
                    <Link href={createPageURL(currentPage - 1)}>
                        <ChevronLeft className="cursor-pointer" />
                    </Link>
                )}
                <div className='numeros flex gap-5 items-center font-medium text-black'>
                    {pages.map((page) => (
                        <Link key={page} href={createPageURL(page)}>
                            <Button className={`h-8 w-8 md:h-10 md:w-10 flex justify-center items-center rounded-lg shadow-md/30 border-2 border-golden
                                    ${currentPage === page 
                                        ? "bg-amber-100 text-black" 
                                        : "bg-white text-black hover:bg-amber-100"}`}
                            >
                                {page}
                            </Button>
                        </Link>
                    ))}
                </div>
                {currentPage < totalPages && (
                    <Link href={createPageURL(currentPage + 1)}>
                        <ChevronRight className="cursor-pointer" />
                    </Link>
                )}
            </div>
        </div>
    )
}