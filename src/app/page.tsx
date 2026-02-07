"use client";

import HeroSection from "../components/hero_section";
import Carrossel from "../components/carrosel"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Carrossel />
    </div>
  );
}
