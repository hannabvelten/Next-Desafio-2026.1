import ImagemLogin from "@/src/components/imagem-login";
import InputsCadastro from "@/src/components/inputs-cadastro";
import InputsLogin from "@/src/components/inputs-login";

export default function Login (){
    return (
        <div className="flex">
            <ImagemLogin />
            <InputsCadastro />
        </div>
    )
}