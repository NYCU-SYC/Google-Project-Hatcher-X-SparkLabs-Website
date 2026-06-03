"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Calendar } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section id="apply-cta" className="relative py-16 md:py-20 overflow-hidden bg-slate-50/60">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(66,133,244,0.07), rgba(255,255,255,0) 65%)",
        }}
      />

      <div className="relative container-wide">
        <div className="relative max-w-5xl mx-auto">
          <div className="relative glass-strong rounded-lg p-8 md:p-12 lg:p-14 text-center overflow-hidden">
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
              className="relative font-display text-3xl md:text-5xl lg:text-[3.25rem] font-bold !leading-[1.32] tracking-normal text-balance"
            >
              <span className="block text-gradient">{t.finalCta.title.line1}</span>
              <span className="block text-gradient-brand">{t.finalCta.title.line2}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-slate-800"
            >
              {t.finalCta.microcopy}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
            >
              <Button href="/apply" variant="primary" size="lg" withArrow>
                {t.finalCta.ctaPrimary}
              </Button>
              <Button href="mailto:program@sparklabstaiwan.com" variant="secondary" size="lg">
                {t.finalCta.ctaSecondary}
              </Button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
