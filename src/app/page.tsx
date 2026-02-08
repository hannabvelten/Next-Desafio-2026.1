import HeroSection from "../components/hero_section";
import Carrossel from "../components/carrosel"
import Box_SobreNos from "../components/box_sobreNos";
import { getIdentities } from "@/lib/api/get-mvv";

export default async function Home() {
  try{
    const data = await getIdentities();

    return (
      <div className="min-h-screen">
        <HeroSection />
        <Carrossel />
        <Box_SobreNos />

        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.text}</p>
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
