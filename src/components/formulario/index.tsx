"use client";

import { Button } from "@/components/ui/button"
import { formSchema } from "@/src/schema/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { FormValue } from "@/src/schema/form";

export default function Formulario() {

    const {handleSubmit, register, formState: {errors}, reset} = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name:"",
            email: ""
        }
    })

    const onSubmit = async (data: FormValue) => {
        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })

        if(response.ok){
            reset()
        }
        else {
            const err = await response.json();
            console.log(err);
        }

    }

    return(
        <div className="p-4">
            <div className="bg-creme w-full md:w-110 rounded-3xl flex flex-col justify-center p-4 gap-6">
                <h1 className="text-center text-xl">Fale com a gente:</h1>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input className="bg-brancoGelo py-2 px-3 rounded-4xl w-full border-1 border-golden text-sm shadow-md/30" placeholder="Digite seu nome..." type="text" id="name" {...register("name")}></input>
                        <label className="text-red-700 text-xs">{errors.name?.message}</label>
                    </div>

                    <div>
                        <input className="bg-brancoGelo py-2 px-3 rounded-4xl w-full border-1 border-golden text-sm shadow-md/20" placeholder="Digite seu email..." type="email" id="email" {...register("email")} />
                        <label className="text-red-700 text-xs">{errors.email?.message}</label>
                    </div>

                    <input className="bg-brancoGelo py-2 px-3 rounded-4xl w-full border-1 border-golden text-sm shadow-md/20" placeholder="Sobre o que você que falar?"></input>
                    <textarea className="bg-brancoGelo py-2 px-3 rounded-4xl resize-none w-full h-30 border-1 border-golden text-sm flex shadow-md/20" placeholder="Digite sua mensagem..."></textarea>

                    <div className="w-full flex justify-center">
                        <Button className="bg-amarelinho flex justify-center rounded-3xl p-2 hover:bg-amber-100 text-black font-medium shadow-md/30" variant="default" type="submit">
                            Enviar mensagem
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}