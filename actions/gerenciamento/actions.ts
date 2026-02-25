"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { writeFile } from "fs/promises"

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

    const title = formData.get("title") as string
    const price = Number(formData.get("price"))
    const description = formData.get("description") as string
    const material = formData.get("material") as string

    const imageFile = formData.get("image") as File

    console.log("IMAGE FILE:", imageFile);
    console.log("SIZE:", imageFile?.size);

    let imageUrl: string | null = null

    if (imageFile && imageFile.size > 0) {
        const bytes = await imageFile.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const fileName = Date.now() + "-" + imageFile.name
        await writeFile(`./public/imagens/${fileName}`, buffer)

        imageUrl = `/imagens/${fileName}`
    }

    await prisma.product.create({
        data: {
            title,
            price,
            description,
            material,
            image: imageUrl,
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

export async function updateProduct (id: number | undefined , formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string
    const price = Number(formData.get("price"))
    const material = formData.get("material") as string
    const image = formData.get("image") as File

    await prisma.product.update({
        where: { id },
        data: {
            title,
            price,
            description,
            material,
            
        },
    });
    redirect("/admin")

}