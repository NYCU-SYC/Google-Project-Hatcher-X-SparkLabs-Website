import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { WhyNow } from "@/components/sections/WhyNow";
import { Benefits } from "@/components/sections/Benefits";
import { WhoShouldApply } from "@/components/sections/WhoShouldApply";
import { Timeline } from "@/components/sections/Timeline";
import { SelectionProcess } from "@/components/sections/SelectionProcess";
import { Mentors } from "@/components/sections/Mentors";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <Hero />
      <Stats />
      <WhyNow />
      <Benefits />
      <WhoShouldApply />
      <Timeline />
      <SelectionProcess />
      <Mentors />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
