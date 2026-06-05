"use client";

import { motion } from "framer-motion";
import { Code2, Globe2, HeartPulse, Layers3, Rocket, Sparkles } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

/**
 * Who Should Apply — conversion-critical "is this me?" section.
 */

const checklistMeta = [
  { icon: Sparkles, color: "text-[#1A73E8]", bg: "bg-[#E8F0FE]", accent: "bg-[#4285F4]" },
  { icon: Rocket, color: "text-[#B06000]", bg: "bg-[#FEF7E0]", accent: "bg-[#FBBC04]" },
  { icon: Code2, color: "text-[#188038]", bg: "bg-[#E6F4EA]", accent: "bg-[#34A853]" },
  { icon: Layers3, color: "text-[#007B83]", bg: "bg-[#E4F7F8]", accent: "bg-[#00ACC1]" },
  { icon: Globe2, color: "text-[#6A1B9A]", bg: "bg-[#F3E8FD]", accent: "bg-[#8E24AA]" },
  { icon: HeartPulse, color: "text-[#C5221F]", bg: "bg-[#FCE8E6]", accent: "bg-[#EA4335]" },
];

export function WhoShouldApply() {
  const { t } = useTranslation();

  return (
    <section
      id="apply-criteria"
      className="relative scroll-mt-28 overflow-hidden bg-white py-16 md:scroll-mt-32 md:py-24"
    >
      <div className="container-wide relative">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center md:mb-12"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#1A73E8]/20 bg-[#1A73E8]/[0.045] px-4 py-1.5 text-xs font-bold uppercase tracking-normal text-[#174EA6]">
            <Sparkles className="h-4 w-4 text-[#1A73E8]" />
            {t.criteria.eyebrow}
          </div>
          <h2 className="mt-5 font-display text-[2rem] font-semibold !leading-[1.18] tracking-normal text-slate-950 text-balance md:text-[2.45rem] lg:text-[2.75rem]">
            {t.criteria.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600 md:text-base">
            {t.criteria.subtitle}
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.07)] ring-1 ring-[#1A73E8]/10">
            <div className="grid h-1 grid-cols-4">
              <div className="bg-[#4285F4]" />
              <div className="bg-[#EA4335]" />
              <div className="bg-[#FBBC04]" />
              <div className="bg-[#34A853]" />
            </div>

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-slate-200 bg-[#F8FAFF] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
                <div className="text-xs font-bold uppercase tracking-normal text-[#174EA6]">
                  {t.criteria.leadIn}
                </div>
                <div className="mt-5 font-display text-3xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-[2.35rem]">
                  {t.criteria.cohortHighlight}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                  {t.criteria.cohortIntro}
                  <strong className="font-semibold text-slate-900">
                    {" "}
                    {t.criteria.cohortHighlight}
                  </strong>
                  {t.criteria.cohortRest}
                </p>

                <div className="mt-6">
                  <div className="text-[11px] font-bold uppercase tracking-normal text-slate-400">
                    {t.criteria.domains.title}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.criteria.domains.items.map((domain) => (
                      <span
                        key={domain}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div className="p-6 sm:p-8 lg:p-9">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {t.criteria.checklist.map((item, i) => {
                    const meta = checklistMeta[i] ?? checklistMeta[0];
                    const Icon = meta.icon;

                    return (
                      <motion.div
                        key={item}
                        initial={false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.35, delay: i * 0.04 }}
                        className="group relative min-h-[92px] overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                      >
                        <div className={`absolute inset-y-0 left-0 w-1 ${meta.accent}`} />
                        <div className="flex items-start gap-3">
                          <div
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${meta.bg}`}
                          >
                            <Icon className={`h-5 w-5 ${meta.color}`} strokeWidth={2.1} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold leading-relaxed text-slate-900 md:text-[15px]">
                              {item}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
