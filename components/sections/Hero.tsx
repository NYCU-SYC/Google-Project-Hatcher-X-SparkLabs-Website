"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

const partnerStrip = ["Vertex AI", "Gemini", "BigQuery", "Cloud Run", "GKE", "Firebase"];

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-36 pb-24"
    >
      <AmbientBackground />

      <div className="relative container-tight flex flex-col items-center text-center z-10">
        {/* 1. Program Name Eyebrow — branded chip with Google 4-color dots */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 rounded-full glass-strong pl-3.5 pr-5 py-2"
        >
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EA4335]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FBBC04]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#34A853]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#4285F4]" />
          </div>
          <span className="text-xs md:text-sm font-medium text-white tracking-tight">
            {t.topBanner.programName}
          </span>
        </motion.div>

        {/* 2. Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 font-display text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-bold leading-display tracking-display-tighter text-balance"
        >
          <span className="text-gradient">{t.hero.title.part1}</span>
          <br />
          <span className="text-gradient">{t.hero.title.part2}</span>
          <span className="text-gradient-brand">{t.hero.title.highlight}</span>
          <span className="text-gradient">{t.hero.title.part3}</span>
        </motion.h1>

        {/* 3. Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-slate-400 text-balance"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* 4. Unified Countdown Card (status strip + countdown) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12"
        >
          <CountdownTimer variant="card" />
        </motion.div>

        {/* 5. CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button href="/apply" variant="primary" size="lg" withArrow>
            {t.hero.ctaPrimary}
          </Button>
          <Button href="#benefits" variant="secondary" size="lg">
            {t.hero.ctaSecondary}
          </Button>
        </motion.div>

        {/* 6. Partner strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-20 md:mt-24 w-full max-w-3xl"
        >
          <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-slate-500 mb-6">
            {t.hero.poweredBy}
          </p>
          <div className="relative overflow-hidden mask-fade">
            <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap">
              {partnerStrip.map((name) => (
                <div
                  key={name}
                  className="text-sm md:text-base font-medium text-slate-500 hover:text-slate-300 transition-colors tracking-tight"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 7. Scroll indicator — in flow, no overlap */}
        <motion.a
          href="#stats"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden md:flex mt-16 flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
        >
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase">
            {t.hero.scroll}
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>

      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent);
        }
      `}</style>
    </section>
  );
}
