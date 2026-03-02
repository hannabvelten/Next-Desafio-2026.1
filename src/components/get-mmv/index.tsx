import { getIdentities } from "@/lib/api/get-mvv";
import { Eye, Gem, Target } from "lucide-react";

export default async function GetMvv(){
    try{
        const data = await getIdentities();

        const uniqueData = data.filter(
            (item, index, self) =>
                index === self.findIndex((i) => i.title === item.title)
        );

        return (
            <div className="p-2 bg-brancoGelo">
                <div className="hidden lg:flex w-full justify-between px-70 pt-20 text-azulEscurao">
                    <Target size={45}/>
                    <Eye size={45}/>
                    <Gem size={45}/>
                </div>
                <ul className="flex flex-col gap-10 p-7 lg:flex-row md:px-30 md:gap-20">
                    {uniqueData.map((item) => (
                    <li key={item.id} className="flex gap-7 flex-col justify-center text-center items-center">
                        <p className="text-[15px] md:text-3xl flex justify-center items-center uppercase text-azulEscuro font-medium">{item.title}</p>
                        <p className="text-[11px] md:text-xl flex md:justify-center">{item.text}</p>
                    </li>
                    ))}
                </ul>
            </div>
        );
    } catch (error) {
        console.error("Error fetching identities", error);
        return <p>Ocorreu um erro ao carregar os dados</p>;
    }
}
