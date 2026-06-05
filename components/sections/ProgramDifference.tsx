"use client";

import { motion } from "framer-motion";
import { Check, Cloud, Globe2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

const cardMeta = [
  {
    icon: Cloud,
    accent: "text-[#4285F4]",
    iconBg: "bg-[#4285F4]/10",
    ring: "ring-[#4285F4]/15",
    border: "border-[#4285F4]/20",
    surface: "bg-[#F7FAFF]",
    checkBg: "bg-[#1A73E8]",
    pill: "border-[#4285F4]/20 bg-[#4285F4]/10 text-[#174EA6]",
  },
  {
    icon: Globe2,
    accent: "text-[#34A853]",
    iconBg: "bg-[#34A853]/10",
    ring: "ring-[#34A853]/15",
    border: "border-[#34A853]/20",
    surface: "bg-[#F7FCF8]",
    checkBg: "bg-[#188038]",
    pill: "border-[#34A853]/20 bg-[#34A853]/10 text-[#137333]",
  },
];

export function ProgramDifference() {
  const { t } = useTranslation();

  return (
    <section id="program-difference" className="relative scroll-mt-28 bg-white py-16 md:py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow={t.programDifference.eyebrow}
          title={t.programDifference.title}
          subtitle={t.programDifference.subtitle}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {t.programDifference.cards.map((card, i) => {
            const meta = cardMeta[i];
            const Icon = meta.icon;

            return (
              <motion.div
                key={card.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex min-h-[420px] flex-col overflow-hidden rounded-lg border p-6 shadow-sm ring-1 ${meta.surface} ${meta.border} ${meta.ring} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(15,23,42,0.07)] sm:p-7 lg:p-8`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${
                    i === 0 ? "bg-[#4285F4]" : "bg-[#34A853]"
                  }`}
                />

                <div className="flex min-h-[88px] flex-col gap-4 sm:flex-row sm:items-start">
                  <div
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/80 ${meta.iconBg} sm:h-14 sm:w-14`}
                  >
                    <Icon className={`h-7 w-7 ${meta.accent}`} strokeWidth={2.1} />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="font-display text-2xl font-semibold leading-tight tracking-normal text-slate-950 md:text-3xl">
                      {card.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <div
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold tracking-normal ${meta.pill}`}
                      >
                        {card.poweredBy}
                      </div>
                    </div>
                    {card.lead && (
                      <p className="mt-4 text-[15px] leading-relaxed text-slate-600 md:text-base">
                        {card.lead}
                      </p>
                    )}
                  </div>
                </div>

                <ul className="mt-4 grid flex-1 auto-rows-fr gap-3">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="grid min-h-[72px] grid-cols-[20px_1fr] items-center gap-3 rounded-lg border border-white/80 bg-white/75 px-3.5 py-3 text-[15px] text-slate-700 shadow-sm"
                    >
                      <span className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${meta.checkBg} text-white`}>
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
