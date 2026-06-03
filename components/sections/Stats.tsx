"use client";

import { motion } from "framer-motion";
import { Users, Cloud, Calendar, Globe } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

/**
 * Program at a Glance — 4 quick-read program facts.
 * Replaces the animated count-up "Stats" strip with calmer Google-style
 * cards: an icon in a brand-tinted square, a large number, a one-line
 * label, and a one-line context. Each card uses one Google brand color
 * as an accent — sparingly, not chromatic noise.
 */

interface Item {
  icon: typeof Users;
  value: string;
  label: string;
  context: string;
  accent: {
    text: string;
    bg: string;
  };
}

export function Stats() {
  const { t, locale } = useTranslation();

  const items: Item[] = [
    {
      icon: Users,
      value: String(t.stats.items[0]?.value ?? 15),
      label: t.stats.items[0]?.label ?? "Selected Teams",
      context: t.stats.items[0]?.sublabel ?? "Only spots in this cohort",
      accent: { text: "text-[#4285F4]", bg: "bg-[#4285F4]/10" },
    },
    {
      icon: Cloud,
      value: `${t.stats.items[1]?.prefix ?? "USD "}${t.stats.items[1]?.value ?? 25}${t.stats.items[1]?.suffix ?? "K"}`,
      label: t.stats.items[1]?.label ?? "Google Cloud Credit",
      context: t.stats.items[1]?.sublabel ?? "Per team, exclusive",
      accent: { text: "text-[#EA4335]", bg: "bg-[#EA4335]/10" },
    },
    {
      icon: Calendar,
      value: `${t.stats.items[2]?.value ?? 12}${t.stats.items[2]?.suffix ?? " wk"}`,
      label: t.stats.items[2]?.label ?? "Weeks of Acceleration",
      context: t.stats.items[2]?.sublabel ?? "Aug 24 – Nov 27",
      accent: { text: "text-[#FBBC04]", bg: "bg-[#FBBC04]/15" },
    },
    {
      icon: Globe,
      value: `${t.stats.items[3]?.value ?? 200}${t.stats.items[3]?.suffix ?? "+"}`,
      label: t.stats.items[3]?.label ?? "Global Showcase Audience",
      context: t.stats.items[3]?.sublabel ?? "Co-located with Meet Taipei",
      accent: { text: "text-[#34A853]", bg: "bg-[#34A853]/10" },
    },
  ];

  return (
    <section id="program-at-a-glance" className="relative py-14 md:py-16 bg-white">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 rounded-full border border-[#4285F4]/25 bg-[#4285F4]/[0.05] px-5 py-2 text-sm font-bold tracking-normal uppercase text-slate-900 shadow-sm md:text-base">
            <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
            {t.stats.title}
          </p>
          <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-slate-900 tracking-normal leading-tight">
            {t.stats.headline}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={`${locale}-${i}-${item.label}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group rounded-lg border border-slate-200 bg-white p-6 md:p-7 transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
              >
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${item.accent.bg}`}
                >
                  <Icon className={`h-5 w-5 ${item.accent.text}`} strokeWidth={2.2} />
                </div>
                <div className="mt-5 font-display text-3xl md:text-4xl font-semibold text-slate-900 tabular-nums tracking-normal">
                  {item.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-900">
                  {item.label}
                </div>
                <div className="mt-1 text-sm text-slate-500">{item.context}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
