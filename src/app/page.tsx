"use client";

import HeroSection from "../components/hero_section";
import Carrossel from "../components/carrosel"
import Box_SobreNos from "../components/box_sobreNos";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Carrossel />
      <Box_SobreNos />
    </div>
  );
}
