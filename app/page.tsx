// Homepage section order:
// Hero → RotatingPhilosophy → Welcome → [copper divider]
// → FounderStory → WhatToExpect → ServicesPreview
// → FinalCTA → Footer

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import RotatingPhilosophy from "@/components/RotatingPhilosophy";
import Welcome from "@/components/Welcome";
import FounderStory from "@/components/FounderStory";
import WhatToExpect from "@/components/WhatToExpect";
import ServicesPreview from "@/components/ServicesPreview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  description:
    "Run your own race. Reach your own summits. Boundless Summits Coaching Co. helps professionals rewrite the script — with intention, self-reflection, and action aligned with who they really are.",
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RotatingPhilosophy />
        <Welcome />
        <div className="flex justify-center py-[60px] bg-cream">
          <div className="w-20 h-px bg-copper" />
        </div>
        <FounderStory />
        <WhatToExpect />
        <ServicesPreview />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
