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
  const aboutFacts = [t.apply.reassurance.items[1], t.apply.reassurance.items[2]];

  return (
    <section id="about-program" className="relative scroll-mt-28 bg-white pb-16 md:pb-20">
      <div className="container-wide">
        <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {cards.map((card, i) => {
            const item = content[i];
            const Icon = card.icon;
            const subnote =
              "subnote" in item && typeof item.subnote === "string" ? item.subnote : undefined;

            return (
              <motion.div
                key={card.key}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm ring-1 ${card.ring} transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_10px_26px_rgba(15,23,42,0.06)] sm:p-6 lg:p-7`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${card.iconBg} sm:h-12 sm:w-12`}
                  >
                    <Icon className={`h-6 w-6 ${card.accent}`} strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-normal text-slate-500 sm:text-xs">
                      {item.tag}
                    </div>
                    <h2 className="mt-2 font-display text-xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-2xl lg:text-[1.7rem]">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {subnote && (
                  <div className="mt-5 flex w-fit items-start gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium leading-relaxed text-slate-600">
                    <Check className="h-3.5 w-3.5 shrink-0 text-[#34A853]" strokeWidth={3} />
                    <span>{subnote}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="container-wide">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.07)] ring-1 ring-[#1A73E8]/10"
        >
          <div className="grid h-1 grid-cols-4">
            <div className="bg-[#4285F4]" />
            <div className="bg-[#EA4335]" />
            <div className="bg-[#FBBC04]" />
            <div className="bg-[#34A853]" />
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative flex flex-col border-b border-slate-200 bg-[#F8FAFF] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1A73E8]/20 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-normal text-[#174EA6] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#1A73E8]" />
                {t.aboutProgram.eyebrow}
              </div>

              <h2 className="mt-5 max-w-md font-display text-2xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-3xl lg:text-[2.4rem]">
                {t.aboutProgram.title}
              </h2>

              <div className="mt-7 rounded-lg border border-[#1A73E8]/15 bg-white p-5 shadow-sm">
                <div className="mb-4 h-1 w-10 rounded-full bg-[#1A73E8]" />
                <p className="text-[15px] font-semibold leading-relaxed text-slate-900 sm:text-base">
                  {t.aboutProgram.paragraphs[0]}
                </p>
              </div>

              <div className="mt-auto grid grid-cols-1 gap-3 pt-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {aboutFacts.map((fact) => (
                  <div
                    key={fact.title}
                    className="rounded-lg border border-slate-200 bg-white/80 px-4 py-3"
                  >
                    <div className="text-sm font-semibold leading-snug text-slate-900">
                      {fact.title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-500">
                      {fact.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-9">
              <div className="space-y-4 text-[15px] leading-relaxed text-slate-600 lg:text-base">
                {t.aboutProgram.paragraphs.slice(1).map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className="rounded-lg border border-slate-200 bg-slate-50/70 p-4"
                  >
                    <span className="mb-2 block text-xs font-bold uppercase tracking-normal text-slate-400">
                      0{index + 1}
                    </span>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {t.programDifference.cards.map((card, index) => (
                  <div
                    key={card.title}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <div
                      className={`mb-2 h-2 w-2 rounded-full ${
                        index === 0 ? "bg-[#4285F4]" : "bg-[#34A853]"
                      }`}
                    />
                    <div className="text-sm font-semibold leading-snug text-slate-900">
                      {card.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
