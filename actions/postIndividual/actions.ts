"use server"

import prisma from "@/lib/db"

export async function fetchProductById (id: number) {
    const product = await prisma.product.findUnique({
        where: { id },
        select: {
            id: true,
            title: true,
            price: true,
            description: true,
            material: true,
            image: true,
        },
    });
    return product;
}