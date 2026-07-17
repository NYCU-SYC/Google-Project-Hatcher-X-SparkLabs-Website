"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Boxes,
  Check,
  ChevronDown,
  Globe2,
  TrendingUp,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

const cardMeta = [
  {
    icon: Boxes,
    accent: "text-[#4285F4]",
    iconBg: "bg-[#4285F4]/10",
    ring: "ring-[#4285F4]/15",
    border: "border-[#4285F4]/20",
    surface: "bg-[#F7FAFF]",
    checkBg: "bg-[#1A73E8]",
    pill: "border-[#4285F4]/20 bg-[#4285F4]/10 text-[#174EA6]",
  },
  {
    icon: TrendingUp,
    accent: "text-[#E37400]",
    iconBg: "bg-[#FBBC04]/14",
    ring: "ring-[#FBBC04]/20",
    border: "border-[#FBBC04]/30",
    surface: "bg-[#FFFBF0]",
    checkBg: "bg-[#E37400]",
    pill: "border-[#FBBC04]/30 bg-[#FBBC04]/14 text-[#B06000]",
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
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <section id="program-difference" className="relative scroll-mt-28 bg-white py-16 md:py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow={t.programDifference.eyebrow}
          title={t.programDifference.title}
          subtitle={t.programDifference.subtitle}
        />

        <div className="mt-12 grid grid-cols-1 items-start gap-5 lg:grid-cols-3 lg:gap-6">
          {t.programDifference.cards.map((card, i) => {
            const meta = cardMeta[i];
            const Icon = meta.icon;
            const isOpen = openCard === i;

            return (
              <motion.div
                key={card.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative overflow-hidden rounded-lg border shadow-sm ring-1 ${meta.surface} ${meta.border} ${meta.ring} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(15,23,42,0.07)]`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${
                    i === 0
                      ? "bg-[#4285F4]"
                      : i === 1
                        ? "bg-[#FBBC04]"
                        : "bg-[#34A853]"
                  }`}
                />

                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenCard(isOpen ? null : i)}
                  className="w-full p-6 text-left sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/80 ${meta.iconBg}`}
                    >
                      <Icon className={`h-7 w-7 ${meta.accent}`} strokeWidth={2.1} />
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className={`text-xs font-bold uppercase ${meta.accent}`}>
                        {card.phase}
                      </div>
                      <h3 className="mt-1 font-display text-2xl font-semibold leading-tight tracking-normal text-slate-950">
                        {card.title}
                      </h3>
                      <div
                        className={`mt-3 inline-flex rounded-full border px-3 py-1 text-[11px] font-bold tracking-normal ${meta.pill}`}
                      >
                        {card.poweredBy}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {card.summary}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-200/80 pt-4 text-sm font-semibold text-slate-700">
                    <span>
                      {isOpen
                        ? t.programDifference.collapseLabel
                        : t.programDifference.expandLabel}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="grid gap-3 border-t border-slate-200/80 px-6 py-6 sm:px-7">
                        {card.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="grid grid-cols-[20px_1fr] items-start gap-3 rounded-lg border border-white/80 bg-white/80 px-3.5 py-3 text-sm text-slate-700 shadow-sm"
                          >
                            <span
                              className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${meta.checkBg} text-white`}
                            >
                              <Check className="h-3.5 w-3.5" strokeWidth={3} />
                            </span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
