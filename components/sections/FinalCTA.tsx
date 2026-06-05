"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Calendar } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section id="apply-cta" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="relative container-wide">
        <div className="relative mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-[#F8FAFF] p-7 text-center shadow-sm ring-1 ring-[#1A73E8]/10 sm:p-8 md:p-12 lg:p-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-[#1A73E8]/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-normal text-[#174EA6]"
            >
              <Calendar className="h-3.5 w-3.5" />
              {t.finalCta.deadline}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative font-display text-3xl font-semibold !leading-[1.18] tracking-normal text-slate-950 text-balance md:text-5xl"
            >
              <span className="block">{t.finalCta.title.line1}</span>
              <span className="block text-[#1A73E8]">{t.finalCta.title.line2}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"
            >
              {t.finalCta.microcopy}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
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
