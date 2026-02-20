import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button"

export default function Paginacao(){
    return (
        <div className="w-full flex justify-center p-10 items-center">
            <div className="tudo flex w-150 justify-center md:gap-10 gap-7 items-center">
                <div className="arco">
                    <ChevronLeft />
                </div>
                <div className='numeros flex gap-5 items-center font-medium text-black'>
                    <Button className='bg-amber-100 h-8 w-8 md:h-10 md:w-10 flex text-black justify-center rounded-lg shadow-md/30 items-center hover:bg-amber-100 border-2 border-golden'>1</Button>
                    <Button className='bg-white h-8 w-8 md:h-10 md:w-10 flex text-black justify-center rounded-lg shadow-md/30 items-center hover:bg-amber-100 border-2 border-golden'>2</Button>
                    <Button className='bg-white h-8 w-8 md:h-10 md:w-10 flex text-black justify-center rounded-lg shadow-md/30 items-center hover:bg-amber-100 border-2 border-golden'>3</Button>
                    <Button className='bg-white h-8 w-8 md:h-10 md:w-10 flex text-black justify-center rounded-lg shadow-md/30 items-center hover:bg-amber-100 border-2 border-golden'>4</Button>
                </div>
                <div className="arco">
                    <ChevronRight />
                </div>
            </div>
        </div>
    )
}