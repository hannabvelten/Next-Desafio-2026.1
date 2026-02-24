import React from 'react'
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from "@/components/ui/card";
import { Carrossel } from '@/types/home/home';
import { Product } from '@/types/data';

type CardCarrosselProps = {
    product: Product
}

export default function CardCarrossel({ product }: CardCarrosselProps){
    return (
        <Link href={`/product/${product.id}`} className='group'>
            <div className="card flex-[0_0_100%] md:flex-[0_0_24%] flex justify-center items-center">
                <Card className='w-50 h-70 p-0 md:w-60 md:h-80 overflow-hidden'>
                    <CardContent className="p-0 w-full overflow-hidden">
                        
                            <div className='relative w-full h-58'>
                                <Image
                                src={product.image || '/imagens/colarSol.jpg'}
                                alt="foto anel cravejado"
                                fill
                                className="rounded-t-xl object-cover object-center"
                                />
                            </div>
                        
                        <h1 className='font-medium px-6 pb-2 pt-4'>{product.title}</h1>
                        <p className='px-6'>R${product.price},00</p>
                    </CardContent>
                </Card>
            </div>
        </Link>
    )
}