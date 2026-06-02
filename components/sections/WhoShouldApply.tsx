"use client";

import { motion } from "framer-motion";
import { Rocket, Cpu, Globe2, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
  { icon: Rocket, accent: { text: "text-[#4285F4]", bg: "bg-[#4285F4]/10" } },
  { icon: Cpu, accent: { text: "text-[#EA4335]", bg: "bg-[#EA4335]/10" } },
  { icon: Globe2, accent: { text: "text-[#FBBC04]", bg: "bg-[#FBBC04]/15" } },
  { icon: Users, accent: { text: "text-[#34A853]", bg: "bg-[#34A853]/10" } },
];

export function WhoShouldApply() {
  const { t } = useTranslation();

  return (
    <section
      id="apply-criteria"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Subtle blue wash — gives the section identity without breaking the
          white-bg theme. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(66,133,244,0.08), transparent 70%)",
        }}
      />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — headline + supporting copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-600">
              <Sparkles className="h-3 w-3 text-[#4285F4]" />
              {t.criteria.eyebrow}
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.1] tracking-tight text-slate-900 text-balance">
              {t.criteria.headline.line1}
              <br />
              {t.criteria.headline.line2}
            </h2>
            <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              {t.criteria.cohortIntro}
              <strong className="text-slate-900">
                {t.criteria.cohortHighlight}
              </strong>
              {t.criteria.cohortRest}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/apply" variant="primary" size="md" withArrow>
                {t.criteria.matchCta}
              </Button>
              <Button href="#program-at-a-glance" variant="secondary" size="md">
                {t.criteria.detailsCta}
              </Button>
            </div>

            {/* Reassurance — keeps the "not sure?" friction-killer in view */}
            <div className="mt-6 text-sm text-slate-500">
              {t.criteria.uncertainPrompt}{" "}
              <span className="text-slate-900 font-medium">
                {t.criteria.uncertainAnswer}
              </span>
            </div>
          </motion.div>

          {/* Right — 2x2 criteria card grid */}
          <div className="lg:col-span-7">
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
                    className="group rounded-2xl border border-slate-200 bg-white p-6 md:p-7 transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
                  >
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${meta.accent.bg}`}
                    >
                      <Icon
                        className={`h-5 w-5 ${meta.accent.text}`}
                        strokeWidth={2.2}
                      />
                    </div>
                    <h3 className="mt-4 font-semibold text-base md:text-[17px] text-slate-900 leading-snug tracking-tight">
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
            <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 px-5 py-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                <span className="font-semibold text-slate-700">
                  {t.criteria.domains.title}:
                </span>
                {t.criteria.domains.items.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center rounded-full bg-white border border-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-700"
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
