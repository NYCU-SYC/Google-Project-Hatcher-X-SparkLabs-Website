"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

/**
 * Hero — light, official, founder-friendly.
 * Modeled on Google for Startups program landing pages: an eyebrow
 * pill announcing the program, a clean two-line headline, one short
 * supporting paragraph, primary CTA, and open-date microcopy.
 */
export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 lg:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(66,133,244,0.055) 0%, rgba(255,255,255,0) 48%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] grid-bg grid-bg-fade opacity-45" />

      <div className="container-tight">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex max-w-full items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur sm:text-sm"
          >
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-[#4285F4]" />
              <span className="h-2 w-2 rounded-full bg-[#EA4335]" />
              <span className="h-2 w-2 rounded-full bg-[#FBBC04]" />
              <span className="h-2 w-2 rounded-full bg-[#34A853]" />
            </span>
            <span>{t.topBanner.programName}</span>
          </motion.div>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mx-auto mt-7 max-w-5xl font-display text-[2.45rem] font-semibold leading-[1.08] tracking-normal text-slate-950 text-balance sm:text-[3.25rem] md:text-[4rem] lg:text-[4.55rem]"
          >
            <span className="block">{t.hero.title.part1}</span>
            <span className="block">
              {t.hero.title.highlight.trim()}
              {t.hero.title.part3 || ""}
            </span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-6 max-w-[760px] text-base leading-relaxed text-slate-600 md:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/apply" variant="primary" size="lg" withArrow>
              {t.hero.ctaPrimary}
            </Button>
            <Button href="/#program-difference" variant="secondary" size="lg">
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-5 text-sm font-semibold text-slate-500"
          >
            {t.hero.applicationOpen}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
