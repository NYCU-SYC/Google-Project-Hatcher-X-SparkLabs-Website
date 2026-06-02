"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Calendar } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section id="apply-cta" className="relative py-28 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(66,133,244,0.25), transparent 65%)",
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl animate-pulse-glow"
        style={{
          background:
            "conic-gradient(from 90deg, #4285F4, #34A853, #FF5C35, #4285F4)",
        }}
      />

      <div className="relative container-tight">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-spark/15 blur-2xl" />

          <div className="relative glass-strong rounded-[2rem] p-12 md:p-16 lg:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30 grid-bg-fade pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative inline-flex items-center gap-2 rounded-full bg-brand-spark/15 border border-brand-spark/30 px-4 py-1.5 text-sm font-medium text-brand-spark mb-10"
            >
              <Calendar className="h-3.5 w-3.5" />
              {t.finalCta.deadline}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-display tracking-display-tighter text-balance"
            >
              <span className="text-gradient">{t.finalCta.title.line1}</span>
              <br />
              <span className="text-gradient-brand">{t.finalCta.title.line2}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-slate-800"
            >
              {t.finalCta.subtitle1}
              <br className="hidden md:inline" />
              {t.finalCta.subtitle2}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button href="/apply" variant="primary" size="lg" withArrow>
                {t.finalCta.ctaPrimary}
              </Button>
              <Button href="mailto:program@sparklabstaiwan.com" variant="secondary" size="lg">
                {t.finalCta.ctaSecondary}
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative mt-10 text-sm text-slate-700 tracking-wide font-medium"
            >
              {t.finalCta.microcopy}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
