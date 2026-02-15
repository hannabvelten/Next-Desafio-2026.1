import { email, z } from "zod";

export const formSchema = z.object({
    name: z.string().min(5, {
        message: "Nome deve ter pelo menos 5 caracteres"
    }),
    email: z.string().email({
        message: "Por favor insira um email válido"
    }),
    subject: z.string(),
    message: z.string()
})

export type FormValue = z.infer<typeof formSchema>