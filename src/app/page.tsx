import HeroSection from "../components/hero_section";
import Carrossel from "../components/carrosel"
import Box_SobreNos from "../components/box_sobreNos";
import GetMvv from "../components/get-mmv";

import { Target } from "lucide-react"; 
import { Eye } from "lucide-react"; 
import { } from "lucide-react"; 


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Carrossel />
      <Box_SobreNos />
      <GetMvv />
      
    </div>
  )
}
