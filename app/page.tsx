import type { Metadata } from "next";
import Nav from "@/components/Nav";
import LogoBanner from "@/components/LogoBanner";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import SectionDivider from "@/components/SectionDivider";
import FounderStory from "@/components/FounderStory";
import WhatToExpect from "@/components/WhatToExpect";
import CoachingPhilosophy from "@/components/CoachingPhilosophy";
import BridgeSentence from "@/components/BridgeSentence";
import ServicesPreview from "@/components/ServicesPreview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Boundless Summits Coaching Co.",
  description:
    "Run your own race. Reach your own summits. Boundless Summits Coaching Co. helps professionals rewrite the script — with intention, self-reflection, and action aligned with who they really are.",
};

export default function HomePage() {
  return (
    <>
      <Nav activePage="/" />
      <LogoBanner />
      <Hero />
      <Welcome />
      <SectionDivider bg="cream-deep" />
      <FounderStory />
      <SectionDivider bg="cream" />
      <WhatToExpect />
      <SectionDivider bg="cream-deep" />
      <CoachingPhilosophy />
      <BridgeSentence />
      <SectionDivider bg="cream" />
      <ServicesPreview />
      <SectionDivider bg="cream-warmer" />
      <FinalCTA />
      <Footer />
    </>
  );
}
