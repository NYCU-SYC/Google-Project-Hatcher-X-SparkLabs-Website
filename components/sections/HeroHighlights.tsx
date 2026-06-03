"use client";

import { motion } from "framer-motion";
import { Check, Cloud, Globe2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

const cards = [
  {
    key: "credit",
    icon: Cloud,
    accent: "text-[#4285F4]",
    iconBg: "bg-[#4285F4]/10",
    ring: "ring-[#4285F4]/20",
  },
  {
    key: "showcase",
    icon: Globe2,
    accent: "text-[#34A853]",
    iconBg: "bg-[#34A853]/10",
    ring: "ring-[#34A853]/20",
  },
];

export function HeroHighlights() {
  const { t } = useTranslation();
  const content = [t.benefits.heroCard, t.benefits.showcaseCard];

  return (
    <section className="relative bg-white pb-12 md:pb-14">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {cards.map((card, i) => {
            const item = content[i];
            const Icon = card.icon;
            const subnote =
              "subnote" in item && typeof item.subnote === "string" ? item.subnote : undefined;

            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-lg border border-slate-200 bg-white p-7 shadow-[0_8px_28px_rgba(15,23,42,0.05)] ring-1 ${card.ring} md:p-8`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${card.iconBg}`}
                  >
                    <Icon className={`h-6 w-6 ${card.accent}`} strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-normal text-slate-500">
                      {item.tag}
                    </div>
                    <h2 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-normal text-slate-900 md:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>

                {subnote && (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-600">
                    <Check className="h-3.5 w-3.5 shrink-0 text-[#34A853]" strokeWidth={3} />
                    <span>{subnote}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
