"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

/**
 * Horizontal timeline — visitors can take in the entire program flow
 * at one glance. Desktop is a single horizontal row with markers on a
 * gradient rule; mobile becomes a compact stacked list so it never
 * compresses below readability or causes horizontal overflow.
 *
 * Status drives accent color:
 *   open    → Google Red (#EA4335)   — happening now
 *   upcoming → Google Blue (#4285F4) — next step
 *   future   → slate                 — to come
 */

const itemStatus: ("open" | "upcoming" | "future")[] = [
  "open",
  "open",
  "upcoming",
  "upcoming",
  "future",
  "future",
];

const statusStyles = {
  open: {
    dot: "bg-[#EA4335] ring-[#EA4335]/20",
    badge: "bg-[#EA4335]/10 text-[#EA4335]",
  },
  upcoming: {
    dot: "bg-[#4285F4] ring-[#4285F4]/20",
    badge: "bg-[#4285F4]/10 text-[#4285F4]",
  },
  future: {
    dot: "bg-slate-300 ring-slate-200",
    badge: "bg-slate-100 text-slate-500",
  },
};

export function Timeline() {
  const { t } = useTranslation();
  const items = t.timeline.items;

  return (
    <section id="timeline" className="relative py-24 md:py-32 bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow={t.timeline.eyebrow}
          title={t.timeline.title}
          subtitle={t.timeline.subtitle}
        />

        {/* DESKTOP — horizontal rail */}
        <div className="hidden md:block mt-16">
          <div className="relative">
            {/* Continuous rule behind the markers */}
            <div className="absolute left-0 right-0 top-[14px] h-px bg-gradient-to-r from-[#4285F4]/40 via-[#34A853]/40 to-[#EA4335]/40" />

            <div
              className="relative grid gap-4"
              style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0,1fr))` }}
            >
              {items.map((item, i) => {
                const status = itemStatus[i] ?? "future";
                const styles = statusStyles[status];
                const statusLabel = t.timeline.statuses[status];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="relative pt-10 px-2 text-center"
                  >
                    <div className="absolute left-1/2 top-0 -translate-x-1/2">
                      <div className={`h-7 w-7 rounded-full ring-4 ${styles.dot}`} />
                    </div>

                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${styles.badge}`}
                    >
                      {statusLabel}
                    </span>
                    <div className="mt-2 font-mono text-[11px] text-slate-500 tracking-[0.05em]">
                      {item.date}
                    </div>
                    <h3 className="mt-2 font-semibold text-sm text-slate-900 leading-snug tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE — compact stacked list */}
        <div className="md:hidden mt-12">
          <ol className="relative space-y-6 pl-6 before:absolute before:left-[7px] before:top-1 before:bottom-1 before:w-px before:bg-slate-200">
            {items.map((item, i) => {
              const status = itemStatus[i] ?? "future";
              const styles = statusStyles[status];
              const statusLabel = t.timeline.statuses[status];
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="relative"
                >
                  <div
                    className={`absolute -left-6 top-1 h-3.5 w-3.5 rounded-full ring-4 ${styles.dot}`}
                  />
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${styles.badge}`}
                    >
                      {statusLabel}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 tracking-[0.05em]">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-base text-slate-900 leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
