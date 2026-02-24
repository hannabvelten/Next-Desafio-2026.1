"use client";

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Carrossel } from '@/types/home/home';
import CardCarrossel from '../cards-carrossel';
import { Product } from '@/types/data';

type CarrosselProps = {
  products: Product[]
}

export default function Carrossel({products}: CarrosselProps) {
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
          {products.map((product, index) => (
            <CardCarrossel key={index} product={product}/>
          ))}
        </div>
      </div>

    <button onClick={scrollNext} className='absolute right-4 top-1/2 z-10'><ChevronRight /></button>

    </div>
  )
}
