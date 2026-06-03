import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Hero } from "@/components/sections/Hero";
import { HeroHighlights } from "@/components/sections/HeroHighlights";
import { Stats } from "@/components/sections/Stats";
import { WhoShouldApply } from "@/components/sections/WhoShouldApply";
import { Benefits } from "@/components/sections/Benefits";
import { Mentors } from "@/components/sections/Mentors";
import { Timeline } from "@/components/sections/Timeline";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

/**
 * Information architecture per Google for Startups program-page convention:
 *   Hero → Credit / Showcase Highlights → Program at a Glance →
 *   Who Should Apply → Benefits → Mentors → Timeline → FAQ → CTA
 *
 * WhyNow and SelectionProcess were dropped from the landing page in favor
 * of a tighter, scan-able flow — selection criteria live on the /apply
 * subpage where intent is higher and detail is welcome.
 */
export default function HomePage() {
  return (
    <main className="relative bg-white">
      <Navigation />
      <Hero />
      <HeroHighlights />
      <Stats />
      <WhoShouldApply />
      <Benefits />
      <Mentors />
      <Timeline />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
