"use client";

import { motion } from "framer-motion";
import { Brain, Check, Cloud, Globe2, Sparkles, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

const itemMeta = [
  { icon: Cloud, color: "text-[#1A73E8]", bg: "bg-[#E8F0FE]", accent: "bg-[#4285F4]" },
  { icon: Brain, color: "text-[#188038]", bg: "bg-[#E6F4EA]", accent: "bg-[#34A853]" },
  { icon: Users, color: "text-[#B06000]", bg: "bg-[#FEF7E0]", accent: "bg-[#FBBC04]" },
  { icon: Globe2, color: "text-[#007B83]", bg: "bg-[#E4F7F8]", accent: "bg-[#00ACC1]" },
  { icon: Sparkles, color: "text-[#C5221F]", bg: "bg-[#FCE8E6]", accent: "bg-[#EA4335]" },
  { icon: Check, color: "text-[#6A1B9A]", bg: "bg-[#F3E8FD]", accent: "bg-[#8E24AA]" },
];

export function Benefits() {
  const { t } = useTranslation();

  return (
    <section id="benefits" className="relative scroll-mt-28 overflow-hidden bg-slate-50/70 py-16 md:py-24">
      <div className="relative container-wide">
        <SectionHeader
          eyebrow={t.benefits.eyebrow}
          title={t.benefits.title}
          subtitle={t.benefits.subtitle}
        />

        <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {itemMeta.map((meta, i) => {
            const item = t.benefits.items[i];
            if (!item) return null;
            const Icon = meta.icon;
            return (
              <motion.div
                key={item.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group h-full rounded-lg"
              >
                <div className="relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-slate-300 group-hover:shadow-[0_10px_26px_rgba(15,23,42,0.06)] md:p-7">
                  <div className={`absolute inset-x-0 top-0 h-1 ${meta.accent}`} />
                  <div className="flex items-start gap-4">
                    <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${meta.bg}`}>
                      <Icon className={`h-5 w-5 ${meta.color}`} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold leading-snug tracking-normal text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm font-semibold leading-snug text-[#1A73E8] tracking-normal">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-[15px]">
                    {item.description}
                  </p>

                  {item.bullets.length > 0 && (
                    <ul className="mt-6 space-y-2.5">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Check
                            className="h-4 w-4 mt-0.5 text-brand-blue shrink-0"
                            strokeWidth={2.5}
                          />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
