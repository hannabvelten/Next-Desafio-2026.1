'use client'

import { CircleUserIcon, Lock, Mail, ArrowLeftFromLine, House } from "lucide-react";
import Link from "next/link";

export default function InputsCadastro (){
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        router.push("/admin")
    }
    return(
        <div className="z-10 flex w-full justify-center items-center md:px-10">
            <div className="flex flex-col items-center w-85 md:w-200 gap-7 md:gap-14 bg-white/60 backdrop-blur-sm py-10 rounded-4xl justify-center">

                <Link href="/" className="flex w-full justify-start px-18">
                    <ArrowLeftFromLine />
                    <House />
                </Link>

                <div className="flex flex-col items-center w-full gap-8">
                    <h1 className="text-center font-anticdidone text-azulEscuro text-3xl md:text-7xl">Bem-vindo!</h1>
                    <p className="text-[9px] md:text-[15px] text-center px-4">Cadastre-se para acessar nossas coleções e receber novidades feitas para brilhar com você.</p>
                </div>

                <form className="flex flex-col gap-7 w-full justify-center items-center" onSubmit={handleSubmit}>
                    
                    <div className="flex md:w-120 items-center gap-2 text-xs md:text-[15px] border-1 border-golden rounded-4xl px-3 py-1 md:py-2 shadow-md/20">
                        <CircleUserIcon className="w-3 h-3 opacity-50" />
                        <input className="w-full outline-none" placeholder="Nome"></input>
                    </div>
                    <div className="flex md:w-120 items-center gap-2 text-xs md:text-[15px]  border-1 border-golden rounded-4xl px-3 py-1 md:py-2 shadow-md/20">
                        <Mail className="w-3 h-3 opacity-50" />
                        <input className="w-full outline-none" type="email" placeholder="Email"></input>
                    </div>
                    <div className="flex md:w-120 items-center gap-2 text-xs md:text-[15px] border-1 border-golden rounded-4xl px-3 py-1 md:py-2 shadow-md/20">
                        <Lock className="w-3 h-3 opacity-50"/>
                        <input className="w-full outline-none" type="password" placeholder="Senha"></input>
                    </div>
                    <div className="flex md:w-120 items-center gap-2 text-xs md:text-[15px] border-1 border-golden rounded-4xl px-3 py-1 md:py-2 shadow-md/20">
                        <Lock className="w-3 h-3 opacity-50"/>
                        <input className="w-full outline-none" type="password" placeholder="Confirmar senha"></input>
                    </div>
                    
                    <button href='/admin' type="submit" className="bg-azulEscuro w-35 text-xs lg:text-xl p-2 text-center rounded-4xl text-white">Cadastre-se</button>

                </form>

                <div className="flex gap-2">
                    <p>Já tem uma conta?</p>
                    <Link href='/login' className="text-golden font-medium">Login</Link>
                </div>

            </div>


        </div>
    )
}