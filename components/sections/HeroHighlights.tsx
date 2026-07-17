"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  Check,
  ChevronDown,
  Globe2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { MentorPreviewLink } from "@/components/sections/MentorPreviewLink";

const cards = [
  {
    key: "build",
    icon: Boxes,
    accent: "text-[#4285F4]",
    iconBg: "bg-[#4285F4]/10",
    ring: "ring-[#4285F4]/20",
    border: "border-[#4285F4]/20",
    itemBorder: "border-[#4285F4]/20",
    itemBg: "bg-[#F7FAFF]",
    number: "text-[#4285F4]/10",
    bar: "bg-[#4285F4]",
    checkBg: "bg-[#1A73E8]",
    pill: "border-[#4285F4]/20 bg-[#4285F4]/10 text-[#174EA6]",
  },
  {
    key: "grow",
    icon: TrendingUp,
    accent: "text-[#E37400]",
    iconBg: "bg-[#FBBC04]/14",
    ring: "ring-[#FBBC04]/20",
    border: "border-[#FBBC04]/30",
    itemBorder: "border-[#FBBC04]/30",
    itemBg: "bg-[#FFFCF2]",
    number: "text-[#E37400]/10",
    bar: "bg-[#FBBC04]",
    checkBg: "bg-[#E37400]",
    pill: "border-[#FBBC04]/30 bg-[#FBBC04]/14 text-[#B06000]",
  },
  {
    key: "global",
    icon: Globe2,
    accent: "text-[#34A853]",
    iconBg: "bg-[#34A853]/10",
    ring: "ring-[#34A853]/20",
    border: "border-[#34A853]/20",
    itemBorder: "border-[#34A853]/20",
    itemBg: "bg-[#F5FBF6]",
    number: "text-[#34A853]/10",
    bar: "bg-[#34A853]",
    checkBg: "bg-[#188038]",
    pill: "border-[#34A853]/20 bg-[#34A853]/10 text-[#137333]",
  },
];

export function HeroHighlights() {
  const { t } = useTranslation();
  const [openCard, setOpenCard] = useState<number | null>(null);
  const aboutFacts = [t.apply.reassurance.items[1], t.apply.reassurance.items[2]];

  return (
    <section className="relative bg-white pb-16 md:pb-20">
      <div className="container-wide">
        <div
          id="program-difference"
          className="grid scroll-mt-28 grid-cols-1 items-start gap-4 md:grid-cols-3 md:gap-5"
        >
          {cards.map((card, i) => {
            const item = t.heroHighlights.cards[i];
            const details = t.programDifference.cards[i];
            const Icon = card.icon;
            const isOpen = openCard === i;
            return (
              <motion.div
                key={card.key}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative overflow-hidden rounded-lg border bg-white shadow-sm ring-1 ${card.border} ${card.ring} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(15,23,42,0.07)]`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 ${card.bar}`} />
                <div className="flex min-h-[390px] flex-col p-5 sm:p-6 lg:min-h-[420px] lg:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${card.iconBg} sm:h-12 sm:w-12`}
                    >
                      <Icon className={`h-6 w-6 ${card.accent}`} strokeWidth={2.2} />
                    </div>
                    <div className={`font-display text-4xl font-semibold leading-none sm:text-5xl ${card.number}`}>
                      0{i + 1}
                    </div>
                  </div>

                  <div className="mt-5">
                    <span className={`text-sm font-bold uppercase ${card.accent}`}>
                      {item.phase}
                    </span>
                    <h2 className="mt-1.5 font-display text-[1.75rem] font-semibold leading-tight tracking-normal text-slate-950 sm:text-3xl">
                      {item.title}
                    </h2>
                  </div>

                  <div className="mt-6 grid flex-1 grid-cols-1 gap-3 min-[500px]:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                    {item.items.map((detail) => (
                      <div
                        key={detail}
                        className={`flex min-h-[88px] items-center justify-center rounded-lg border px-4 py-4 text-center text-sm font-semibold leading-snug text-slate-900 shadow-[0_4px_14px_rgba(15,23,42,0.035)] ${card.itemBorder} ${card.itemBg}`}
                      >
                        {detail}
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`highlight-details-${card.key}`}
                    data-highlight-toggle
                    data-open-label={t.programDifference.expandLabel}
                    data-close-label={t.programDifference.collapseLabel}
                    onClick={() => setOpenCard(isOpen ? null : i)}
                    className="mt-6 flex w-full items-center justify-between border-t border-slate-200/80 pt-4 text-left text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950"
                  >
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
                  </button>
                </div>

                <motion.div
                  id={`highlight-details-${card.key}`}
                  aria-hidden={!isOpen}
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className={`border-t p-5 sm:p-6 lg:p-7 ${card.border} ${card.itemBg}`}>
                    <div
                      className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-bold tracking-normal ${card.pill}`}
                    >
                      {details.poweredBy}
                    </div>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-slate-700">
                      {details.summary}
                    </p>
                    <ul className="mt-5 grid gap-3">
                      {details.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="grid grid-cols-[20px_1fr] items-start gap-3 rounded-lg border border-white/90 bg-white/85 px-3.5 py-3 text-sm text-slate-700 shadow-sm"
                        >
                          <span
                            className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${card.checkBg} text-white`}
                          >
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#34A853]/25 bg-[#EAF5ED] px-4 py-2 text-xs font-bold uppercase text-[#137333] shadow-sm">
            <ShieldCheck className="h-4 w-4" strokeWidth={2.5} />
            {t.heroHighlights.equityFree}
          </div>
        </div>

        <MentorPreviewLink />

      </div>

      <div id="about-program" className="container-wide mt-12 scroll-mt-28 md:mt-16">
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
                <p className="whitespace-pre-line text-[15px] font-semibold leading-relaxed text-slate-900 sm:text-base">
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

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {t.programDifference.cards.map((card, index) => (
                  <div
                    key={card.title}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <div
                      className={`mb-2 h-2 w-2 rounded-full ${
                        index === 0
                          ? "bg-[#4285F4]"
                          : index === 1
                            ? "bg-[#FBBC04]"
                            : "bg-[#34A853]"
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
