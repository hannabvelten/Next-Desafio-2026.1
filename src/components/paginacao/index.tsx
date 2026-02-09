import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Paginacao(){
    return (
        <div className="w-full flex justify-center p-10 items-center">
            <div className="tudo flex w-150 justify-center gap-10 items-center">
                <div className="arco">
                    <ChevronLeft />
                </div>
                <div className='numeros flex gap-10 items-center font-medium'>
                    <p className='bg-creme h-8 w-8 flex justify-center rounded-lg shadow-md items-center'>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>
                <div className="arco">
                    <ChevronRight />
                </div>
            </div>
        </div>
    )
}