"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionAmbient } from "@/components/ui/AmbientBackground";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function WhyNow() {
  const { t } = useTranslation();

  return (
    <section id="why-now" className="relative py-20 md:py-24 overflow-hidden">
      <SectionAmbient variant="green" />

      <div className="relative container-tight">
        <SectionHeader
          eyebrow={t.whyNow.eyebrow}
          title={t.whyNow.title}
          subtitle={t.whyNow.body}
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-7 items-stretch">
          {/* Quote card */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative"
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-40 blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(66,133,244,0.25), rgba(52,168,83,0.2))",
              }}
            />
            <div className="relative glass-strong rounded-3xl p-10 md:p-14 h-full flex flex-col">
              <Quote
                className="h-10 w-10 text-brand-blue opacity-50 mb-8"
                strokeWidth={1.5}
              />

              <blockquote className="font-display text-xl md:text-2xl lg:text-[1.625rem] leading-[1.4] text-slate-900 text-balance tracking-normal">
                &ldquo;{t.whyNow.quote}&rdquo;
              </blockquote>

              <div className="mt-10 pt-6 border-t border-slate-200 flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-slate-200 shrink-0">
                  <Image
                    src="/mentors/edgar-chiu.png"
                    alt={t.whyNow.quoteAuthor}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 tracking-normal">
                    {t.whyNow.quoteAuthor}
                  </div>
                  <div className="text-xs text-slate-600 mt-1">{t.whyNow.quoteRole}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Three pillars */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {t.whyNow.pillars.map((pillar, i) => {
              const colors = ["#4285F4", "#34A853", "#FF5C35"];
              return (
                <div
                  key={pillar.label}
                  className="glass rounded-2xl p-7 transition-all duration-300 hover:bg-slate-100/60 hover:border-slate-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-1.5 h-2 w-2 rounded-full shrink-0"
                      style={{
                        backgroundColor: colors[i],
                        boxShadow: `0 0 14px ${colors[i]}90`,
                      }}
                    />
                    <div>
                      <div className="font-display text-base md:text-lg font-semibold text-slate-900 tracking-normal">
                        {pillar.label}
                      </div>
                      <div className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
