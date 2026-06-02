"use client";

import { motion } from "framer-motion";
import { Rocket, Cpu, Globe2, Users, Sparkles } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

/**
 * Who Should Apply — conversion-critical "is this me?" section.
 *
 * Layout: 5-col headline on the left + 7-col criteria grid on the right
 * (lg+). On md it splits to single-column headline + 2-col cards; on
 * mobile everything stacks.
 *
 * Copy comes from the i18n layer (t.criteria.*). Only visual metadata
 * (icon + Google brand color tile) lives in the component as a parallel
 * array zipped with t.criteria.cards by index.
 */

// Visual metadata only — copy is in translations.ts t.criteria.cards
const criteriaMeta = [
  {
    icon: Rocket,
    accent: {
      text: "text-[#4285F4]",
      bg: "bg-[#4285F4]/10",
      border: "border-[#4285F4]/35",
      surface: "bg-[#4285F4]/[0.04]",
    },
  },
  {
    icon: Cpu,
    accent: {
      text: "text-[#EA4335]",
      bg: "bg-[#EA4335]/10",
      border: "border-[#EA4335]/35",
      surface: "bg-[#EA4335]/[0.04]",
    },
  },
  {
    icon: Globe2,
    accent: {
      text: "text-[#FBBC04]",
      bg: "bg-[#FBBC04]/15",
      border: "border-[#FBBC04]/50",
      surface: "bg-[#FBBC04]/[0.06]",
    },
  },
  {
    icon: Users,
    accent: {
      text: "text-[#34A853]",
      bg: "bg-[#34A853]/10",
      border: "border-[#34A853]/35",
      surface: "bg-[#34A853]/[0.04]",
    },
  },
];

const domainStyles = [
  "bg-[#4285F4]/10 border-[#4285F4]/30 text-[#174EA6]",
  "bg-[#34A853]/10 border-[#34A853]/30 text-[#137333]",
  "bg-[#EA4335]/10 border-[#EA4335]/30 text-[#A50E0E]",
  "bg-[#FBBC04]/20 border-[#FBBC04]/45 text-[#8A5A00]",
];

export function WhoShouldApply() {
  const { t } = useTranslation();

  return (
    <section
      id="apply-criteria"
      className="relative scroll-mt-28 py-16 md:scroll-mt-32 md:py-20 bg-white overflow-hidden"
    >
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 flex max-w-4xl flex-col items-center text-center md:mb-14"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#4285F4]/25 bg-[#4285F4]/[0.05] px-5 py-2 text-sm font-bold tracking-normal uppercase text-slate-900 shadow-sm md:text-base">
            <Sparkles className="h-4.5 w-4.5 text-[#4285F4]" />
            {t.criteria.eyebrow}
          </div>
          <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-[2.65rem] font-semibold !leading-[1.25] tracking-normal text-slate-900 text-balance">
            {t.criteria.headline.line1}
            <br />
            {t.criteria.headline.line2}
          </h2>
          <p className="mt-5 max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
            {t.criteria.cohortIntro}
            <strong className="text-slate-900">
              {t.criteria.cohortHighlight}
            </strong>
            {t.criteria.cohortRest}
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          {/* 2x2 criteria card grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {criteriaMeta.map((meta, i) => {
                const card = t.criteria.cards[i];
                if (!card) return null;
                const Icon = meta.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
                    className={`group relative rounded-lg border p-6 md:p-7 shadow-[0_6px_20px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] ${meta.accent.border} ${meta.accent.surface}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${meta.accent.bg}`}
                      >
                        <Icon
                          className={`h-5 w-5 ${meta.accent.text}`}
                          strokeWidth={2.2}
                        />
                      </div>
                      <span className="font-mono text-xs font-semibold text-slate-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-semibold text-base md:text-[17px] text-slate-900 leading-snug tracking-normal">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                      {card.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Welcomed domains — let founders see their vertical is welcome */}
            <div className="mt-6 rounded-lg border border-dashed border-slate-200 bg-slate-50/60 px-5 py-4 text-center">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
                <span className="font-semibold text-slate-700">
                  {t.criteria.domains.title}:
                </span>
                {t.criteria.domains.items.map((d, i) => (
                  <span
                    key={d}
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${domainStyles[i % domainStyles.length]}`}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
