import prisma from "@/lib/db";

const itemsPerPage = 6;

export async function fetchFilteredPosts(query: string, currentPage: number) {
    const produtos = await prisma.product.findMany({
        where: {
            OR: [{title: {contains: query, mode: "insensitive"}}]
        },
        orderBy: {
            title: "asc"
        },
    })

    const count = await prisma.product.count({
        where: {
            OR: [{title: {contains: query, mode: "insensitive"}}]
        }
    })

    return { produtos, count};
}