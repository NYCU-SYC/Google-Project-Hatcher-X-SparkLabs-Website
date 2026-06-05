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
    label: "Google Cloud",
    checkBg: "bg-[#1A73E8]",
  },
  {
    icon: Globe2,
    accent: "text-[#34A853]",
    iconBg: "bg-[#34A853]/10",
    ring: "ring-[#34A853]/15",
    border: "border-[#34A853]/20",
    surface: "bg-[#F7FCF8]",
    label: "SparkLabs Taiwan",
    checkBg: "bg-[#188038]",
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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative min-h-[360px] overflow-hidden rounded-lg border p-6 shadow-sm ring-1 ${meta.surface} ${meta.border} ${meta.ring} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(15,23,42,0.07)] sm:p-7 lg:p-8`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${
                    i === 0 ? "bg-[#4285F4]" : "bg-[#34A853]"
                  }`}
                />

                <div className="flex items-start gap-4">
                  <div
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/80 ${meta.iconBg} sm:h-14 sm:w-14`}
                  >
                    <Icon className={`h-7 w-7 ${meta.accent}`} strokeWidth={2.1} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-normal text-slate-500">
                      {meta.label}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-normal text-slate-950 md:text-3xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600 md:text-base">
                      {card.lead}
                    </p>
                  </div>
                </div>

                <ul className="mt-8 grid gap-3.5">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 rounded-lg border border-white/80 bg-white/70 px-3.5 py-3 text-[15px] text-slate-700 shadow-sm"
                    >
                      <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${meta.checkBg} text-white`}>
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
