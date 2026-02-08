"use client";

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from "@/components/ui/card";


export default function Carrossel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="carroselTudo w-full bg-brancoGelo">

      <div className="titulo w-full text-azulEscuro text-center py-6">
        <h2>JOIAS EM DESTAQUE</h2>
      </div>

      <div className="viewport overflow-hidden" ref={emblaRef}>

        <div className="container flex">

          <div className="card flex-[0_0_100%] md:flex-[0_0_33%] p-3 flex justify-center items-center">
            <Card className='w-50 h-70 p-0'>
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

          <div className="card flex-[0_0_100%] md:flex-[0_0_33%] p-3">
            <Card className='w-50 h-70 p-0'>
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

          <div className="card flex-[0_0_100%] md:flex-[0_0_33%] p-3">
            <Card>
              <CardContent className="p-4">
                Produto 3
              </CardContent>
            </Card>
          </div>
          
        </div>
      </div>

      <button className="embla__prev">Scroll to prev</button>
      <button className="embla__next">Scroll to next</button>
    </div>
  )
}
