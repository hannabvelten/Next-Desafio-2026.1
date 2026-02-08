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
          <ul className="flex flex-col gap-10 p-10">
            {data.map((item) => (
              <li key={item.id} className="flex gap-5">
                <p className="text-xl flex justify-center items-center uppercase">{item.title}</p>
                <p className="text-xs">{item.text}</p>
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
