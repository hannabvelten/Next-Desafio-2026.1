"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
    revalidatePath("/admin")
}

export async function createProduct(formData: FormData) {
    const title = formData.get("name") as string;
    const price = Number(formData.get("price") as string);
    const description = formData.get("description") as string;
    const imageFile = formData.get("image") as File;
    const image = imageFile?.name ?? "";
    const material = formData.get("material") as string;

    await prisma.product.create({
        data: {
            title,
            price,
            description,
            image,
            material,
        }
    })

    redirect("/admin")
}

export async function fetchProductById (id: number | undefined){
    const product = await prisma.product.findUnique({
        where: {id},
        select: {
            id: true,
            title: true,
            price: true,
            description: true,
            material: true,
        }
    })
}