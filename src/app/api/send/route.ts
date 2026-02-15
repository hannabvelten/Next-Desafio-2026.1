import { FormValue } from '@/src/schema/form';
import {WelcomeEmail} from '../../../components/email-template'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<Response> {
    try {
        const body: FormValue = await request.json()

    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['hanna.velten@estudante.ufjf.br'],
        subject: 'Treinamento Email',
        react: WelcomeEmail({ username: body.name , useremail: body.email, subject: body.subject, message: body.message }),
    });

    if (error) {
        return Response.json({ error }, { status: 500 });
    }

    return Response.json({data} , { status: 200 });
    } 
    catch (error) {
    console.error(error);
    return Response.json({ error: String(error) }, { status: 500 });
    }
}