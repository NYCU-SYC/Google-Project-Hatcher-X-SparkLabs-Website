"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

/**
 * Hero — light, official, founder-friendly.
 * Modeled on Google for Startups program landing pages: an eyebrow
 * pill announcing the program, a clean two-line headline, one short
 * supporting paragraph, primary + secondary CTAs, and a deadline
 * meta-strip. No animated countdown, no partner logo wall, no scroll
 * indicator — these create visual noise that fights the message.
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
        <div className="mx-auto max-w-4xl text-center">
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
            className="mt-8 font-display text-[2.25rem] sm:text-[2.75rem] md:text-[3.35rem] lg:text-[3.75rem] font-semibold leading-[1.12] tracking-normal text-slate-900 text-balance"
          >
            {t.hero.title.part1}{" "}
            <span className="text-gradient-brand">{t.hero.title.highlight}</span>
            {t.hero.title.part3 || ""}
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
            <Button href="#program-at-a-glance" variant="secondary" size="lg">
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>

          {/* Deadline meta-strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-7 inline-flex items-center gap-2 text-sm text-slate-500"
          >
            <Calendar className="h-4 w-4 text-slate-400" />
            <span>{t.topBanner.deadline}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>{t.countdown.statusScarcity}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
