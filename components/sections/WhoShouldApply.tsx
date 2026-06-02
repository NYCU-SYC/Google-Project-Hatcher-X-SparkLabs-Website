"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function WhoShouldApply() {
  const { t } = useTranslation();

  return (
    <section id="apply-criteria" className="relative py-28 md:py-36">
      <div className="container-tight">
        <SectionHeader
          eyebrow={t.criteria.eyebrow}
          title={t.criteria.title}
          subtitle={t.criteria.subtitle}
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-7">
          {/* For You */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative"
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-40 blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(66,133,244,0.25), rgba(52,168,83,0.15))",
              }}
            />
            <div className="relative glass-strong rounded-3xl p-10 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-blue/15 border border-brand-blue/30">
                  <Check className="h-5 w-5 text-brand-blue" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                  {t.criteria.forYouTitle}
                </h3>
              </div>
              <ul className="space-y-5">
                {t.criteria.forYou.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3.5 text-slate-700"
                  >
                    <div className="mt-1 shrink-0 h-4 w-4 rounded-full bg-brand-blue/20 grid place-items-center">
                      <Check className="h-2.5 w-2.5 text-brand-blue" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] leading-relaxed">{c}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Not For You */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-3xl p-10 md:p-12 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100/60 border border-slate-200">
                  <X className="h-5 w-5 text-slate-500" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-700 tracking-tight">
                  {t.criteria.notForYouTitle}
                </h3>
              </div>
              <ul className="space-y-5">
                {t.criteria.notForYou.map((c) => (
                  <li key={c} className="flex items-start gap-3.5 text-slate-500">
                    <div className="mt-1 shrink-0 h-4 w-4 rounded-full bg-slate-100/60 grid place-items-center">
                      <X className="h-2.5 w-2.5 text-slate-500" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.criteria.uncertainPrompt}
                  <br />
                  <span className="text-slate-900 font-medium">{t.criteria.uncertainAnswer}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Domain highlights */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12"
        >
          <div className="relative max-w-3xl mx-auto glass rounded-2xl p-7 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-7">
              <div className="flex items-center gap-2.5 shrink-0">
                <Sparkles className="h-4 w-4 text-brand-spark" />
                <span className="text-sm font-medium text-slate-900 tracking-tight">
                  {t.criteria.domains.title}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.criteria.domains.items.map((d) => (
                  <span
                    key={d}
                    className="text-xs md:text-sm px-3.5 py-1.5 rounded-full bg-brand-spark/10 border border-brand-spark/30 text-brand-spark tracking-tight"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Button href="/apply" variant="primary" size="md" withArrow>
            {t.criteria.matchCta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
