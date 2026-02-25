"use server"

import prisma from "@/lib/db"

export default async function fetchPostById (id: number) {
    const product = await prisma.product.findUnique({
        where: { id },
        include: {
            product: {
                select: {
                    id: true,
                    title: true,
                    price: true,
                    description: true,
                    image: true,
                },
            },
        },
    });

    return product;
}