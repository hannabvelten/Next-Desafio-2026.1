"use client";

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function Carrossel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll:1,
    align:'start',
  })
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <div className="carroselTudo w-full bg-brancoGelo relative">

      <div className="titulo w-full text-azulEscuro text-center py-6 md:text-3xl md:py:10">
        <h2>JOIAS EM DESTAQUE</h2>
      </div>

      <button onClick={scrollPrev} className="absolute left-4 top-1/2 z-10"><ChevronLeft /></button>

      <div className="viewport overflow-hidden py-9 " ref={emblaRef}>

        <div className="container flex gap-10 mx-auto">

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

          <div className="card flex-[0_0_100%] md:flex-[0_0_24%] p-3 flex justify-center items-center">
            <Card className='w-50 h-70 p-0 md:w-60 md:h-80'>
              <CardContent className="p-0 w-full ">
                <Link href='/'>
                        <Image 
                        src={'/imagens/colarSol.jpg'}
                        alt="colar sol"
                        width={904}
                        height={904}
                        className="h-44 w-full rounded-t-xl md:h-53 md:object-cover"
                        />
                    </Link>
                <h1 className='font-medium px-6 pb-2 pt-4'>Colar Sol</h1>
                <p className='px-6'>R$389,00</p>
              </CardContent>
            </Card>
          </div>

          <div className="card flex-[0_0_100%] md:flex-[0_0_24%] p-3 flex justify-center items-center">
            <Card className='w-50 h-70 p-0 md:w-60 md:h-80'>
              <CardContent className="p-0 w-full ">
                <Link href='/'>
                        <Image 
                        src={'/imagens/brincoArgolaPerola.jpg'}
                        alt="brinco argola com perola"
                        width={904}
                        height={904}
                        className="h-44 w-full rounded-t-xl md:h-53 md:object-cover"
                        />
                    </Link>
                <h1 className='font-medium px-6 pb-2 pt-4'>Brinco Argola com Pérola</h1>
                <p className='px-6'>R$150,00</p>
              </CardContent>
            </Card>
          </div>

          <div className="card flex-[0_0_100%] md:flex-[0_0_24%] p-3 flex justify-center items-center">
            <Card className='w-50 h-70 p-0 md:w-60 md:h-80'>
              <CardContent className="p-0 w-full ">
                <Link href='/'>
                        <Image 
                        src={'/imagens/brincoArgolaPerola.jpg'}
                        alt="brinco argola com perola"
                        width={904}
                        height={904}
                        className="h-44 w-full rounded-t-xl md:h-53 md:object-cover"
                        />
                    </Link>
                <h1 className='font-medium px-6 pb-2 pt-4'>Brinco Argola com Pérola</h1>
                <p className='px-6'>R$150,00</p>
              </CardContent>
            </Card>
          </div>

          <div className="card flex-[0_0_100%] md:flex-[0_0_24%] p-3 flex justify-center items-center">
            <Card className='w-50 h-70 p-0 md:w-60 md:h-80'>
              <CardContent className="p-0 w-full ">
                <Link href='/'>
                        <Image 
                        src={'/imagens/brincoArgolaPerola.jpg'}
                        alt="brinco argola com perola"
                        width={904}
                        height={904}
                        className="h-44 w-full rounded-t-xl md:h-53 md:object-cover"
                        />
                    </Link>
                <h1 className='font-medium px-6 pb-2 pt-4'>Brinco Argola com Pérola</h1>
                <p className='px-6'>R$150,00</p>
              </CardContent>
            </Card>
          </div>

          <div className="card flex-[0_0_100%] md:flex-[0_0_24%] p-3 flex justify-center items-center">
            <Card className='w-50 h-70 p-0 md:w-60 md:h-80'>
              <CardContent className="p-0 w-full ">
                <Link href='/'>
                        <Image 
                        src={'/imagens/brincoArgolaPerola.jpg'}
                        alt="brinco argola com perola"
                        width={904}
                        height={904}
                        className="h-44 w-full rounded-t-xl md:h-53 md:object-cover"
                        />
                    </Link>
                <h1 className='font-medium px-6 pb-2 pt-4'>Brinco Argola com Pérola</h1>
                <p className='px-6'>R$150,00</p>
              </CardContent>
            </Card>
          </div>

          <div className="card flex-[0_0_100%] md:flex-[0_0_24%] p-3 flex justify-center items-center">
            <Card className='w-50 h-70 p-0 md:w-60 md:h-80'>
              <CardContent className="p-0 w-full ">
                <Link href='/'>
                        <Image 
                        src={'/imagens/brincoArgolaPerola.jpg'}
                        alt="brinco argola com perola"
                        width={904}
                        height={904}
                        className="h-44 w-full rounded-t-xl md:h-53 md:object-cover"
                        />
                    </Link>
                <h1 className='font-medium px-6 pb-2 pt-4'>Brinco Argola com Pérola</h1>
                <p className='px-6'>R$150,00</p>
              </CardContent>
            </Card>
          </div>

          <div className="card flex-[0_0_100%] md:flex-[0_0_24%] p-3 flex justify-center items-center">
            <Card className='w-50 h-70 p-0 md:w-60 md:h-80'>
              <CardContent className="p-0 w-full ">
                <Link href='/'>
                        <Image 
                        src={'/imagens/brincoArgolaPerola.jpg'}
                        alt="brinco argola com perola"
                        width={904}
                        height={904}
                        className="h-44 w-full rounded-t-xl md:h-53 md:object-cover"
                        />
                    </Link>
                <h1 className='font-medium px-6 pb-2 pt-4'>Brinco Argola com Pérola</h1>
                <p className='px-6'>R$150,00</p>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </div>

    <button onClick={scrollNext} className='absolute right-4 top-1/2 z-10'><ChevronRight /></button>

    </div>
  )
}
