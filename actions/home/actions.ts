"use server"

import prisma from "@/lib/db"

export default async function getCarrossel(){
    const products = await prisma.product.findMany({
        where: {
            published: true
        },
        select: {
            id: true,
            title: true,
            image: true,
            price: true
        },
        take: 8,
    });
    return products;
}