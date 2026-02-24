"use server"

import prisma from "@/lib/db"

export async function getTabela(){
    const products = await prisma.product.findMany({
        where: {
            published: true
        },
        select: {
            id: true,
            title: true,
            image: true,
            price: true,
            material: true,
            description: true,
        },
    })
    return products;
}

export async function deleteProduct(id: number | undefined) {
    await prisma.product.delete({
        where: { id },
    });
}