import { email, z } from "zod";

export const formSchema = z.object({
    name: z.string().min(5, {
        message: "Nome deve ter pelo menos 5 caracteres"
    }),
    email: z.string().email({
        message: "Por favor insira um email válido"
    })
})

export type FormValue = z.infer<typeof formSchema>