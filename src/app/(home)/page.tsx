import HeroSection from "../../components/hero_section";
import Carrossel from "../../components/carrosel"
import Box_SobreNos from "../../components/box-sobreNos";
import GetMvv from "../../components/get-mmv";
import getCarrossel from "@/actions/home/actions";

export default async function Home() {
  const products = await getCarrossel()

  return (
    <div className="min-h-screen">
      <HeroSection />
      <Carrossel products={products} />
      <Box_SobreNos />
      <GetMvv />
      
    </div>
  )
}
