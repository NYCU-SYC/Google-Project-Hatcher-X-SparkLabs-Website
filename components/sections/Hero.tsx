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
      className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-16 overflow-hidden"
    >
      {/* Subtle warm wash behind the headline. Keeps the section feeling
          "lit" without resorting to glow orbs. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] -z-10"
        style={{
          background:
            "radial-gradient(ellipse 800px 400px at 50% 0%, rgba(66,133,244,0.06), transparent 70%)",
        }}
      />

      <div className="container-tight">
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow — program name with Google 4-color dots */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 rounded-full border border-[#4285F4]/20 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm"
          >
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-[#4285F4]" />
              <span className="h-2 w-2 rounded-full bg-[#EA4335]" />
              <span className="h-2 w-2 rounded-full bg-[#FBBC04]" />
              <span className="h-2 w-2 rounded-full bg-[#34A853]" />
            </span>
            <span>{t.topBanner.programName}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mx-auto mt-8 max-w-5xl font-display text-[2.15rem] sm:text-[2.65rem] md:text-[2.75rem] lg:text-[2.85rem] xl:text-[3.25rem] font-semibold leading-[1.12] tracking-normal text-slate-900 text-balance"
          >
            <span className="block md:whitespace-nowrap">{t.hero.title.part1}</span>
            <span className="block text-gradient-brand md:whitespace-nowrap">
              {t.hero.title.highlight.trim()}
              {t.hero.title.part3 || ""}
            </span>
          </motion.h1>

          {/* Subheadline — one sentence */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3"
          >
            <Button href="/apply" variant="primary" size="lg" withArrow>
              {t.hero.ctaPrimary}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-5 text-sm font-semibold text-slate-600"
          >
            {t.hero.applicationOpen}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
