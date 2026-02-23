import React from 'react'
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from "@/components/ui/card";

export default function CardCarrossel(){
    return (
        <div className="card flex-[0_0_100%] md:flex-[0_0_24%] flex justify-center items-center">
            <Card className='w-50 h-70 p-0 md:w-60 md:h-80'>
                <CardContent className="p-0 w-full ">
                    <Link href='/'>
                        <Image 
                        src={'/imagens/anelDuoCravejado.jpg'}
                        alt="foto anel cravejado"
                        width={904}
                        height={904}
                        className="h-auto w-full rounded-t-xl"
                        />
                    </Link>
                    <h1 className='font-medium px-6 pb-2 pt-4'>Anel Duo Cravejado</h1>
                    <p className='px-6'>R$350,00</p>
                </CardContent>
            </Card>
        </div>
    )
}