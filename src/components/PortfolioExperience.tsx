"use client";

import { ConnectSection } from "@/components/sections/ConnectSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { WorkSection } from "@/components/sections/WorkSection";
import { Nav } from "@/components/navigation/Nav";
import { ScrollAtmosphere } from "@/components/scroll/ScrollAtmosphere";
import { SmoothScroll } from "@/components/scroll/SmoothScroll";

export function PortfolioExperience() {
  return (
    <SmoothScroll>
      <ScrollAtmosphere />
      <Nav />
      <main className="relative">
        <HeroSection />
        <StorySection />
        <ExperienceSection />
        <WorkSection />
        <ConnectSection />
      </main>
    </SmoothScroll>
  );
}
