import HeroSection from "../components/hero_section";
import Carrossel from "../components/carrosel"
import Box_SobreNos from "../components/box_sobreNos";
import { getIdentities } from "@/lib/api/get-mvv";

import { Target } from "lucide-react"; 
import { Eye } from "lucide-react"; 
import { } from "lucide-react"; 


export default async function Home() {
  try{
    const data = await getIdentities();

    return (
      <div className="min-h-screen">
        <HeroSection />
        <Carrossel />
        <Box_SobreNos />

        <div className="p-2">
          <ul className="flex flex-col gap-10 p-7 md:flex-row md:p-15 md:px-30 md:gap-20">
            {data.map((item) => (
              <li key={item.id} className="flex gap-7 md:flex-col justify-center items-center">
                <p className="text-[15px] md:text-3xl flex justify-center items-center uppercase text-azulEscuro font-medium">{item.title}</p>
                <p className="text-[11px] md:text-xl flex md:justify-center">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching identities", error);
    return <p>Ocorreu um erro ao carregar os dados</p>;
  }
}
