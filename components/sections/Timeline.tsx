"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

/**
 * Horizontal program timeline.
 *
 * Desktop (≥ md): grid rail with numbered date badges sitting on a
 * brand-colored gradient rule. Each step shows phase label, BIG date
 * badge, title, one-line description.
 *
 * Mobile (< md): stacked compact list with the same prominent date
 * badge on the left, content on the right.
 *
 * Date prominence is the primary visual: the date is the largest
 * tabular-numeric element in each step, sitting in a brand-colored
 * pill so visitors instantly see "when". Status color comes from the
 * status array per index (open / upcoming / future).
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
    dateBg: "bg-[#EA4335]",
    dateText: "text-white",
    dot: "bg-[#EA4335] ring-[#EA4335]/20",
    badge: "bg-[#EA4335]/10 text-[#EA4335] border-[#EA4335]/15",
  },
  upcoming: {
    dateBg: "bg-[#4285F4]",
    dateText: "text-white",
    dot: "bg-[#4285F4] ring-[#4285F4]/20",
    badge: "bg-[#4285F4]/10 text-[#4285F4] border-[#4285F4]/15",
  },
  future: {
    dateBg: "bg-slate-900",
    dateText: "text-white",
    dot: "bg-slate-400 ring-slate-200",
    badge: "bg-slate-100 text-slate-600 border-slate-200",
  },
};

export function Timeline() {
  const { t } = useTranslation();
  const items = t.timeline.items;

  return (
    <section id="timeline" className="relative py-20 md:py-24 bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow={t.timeline.eyebrow}
          title={t.timeline.title}
          subtitle={t.timeline.subtitle}
        />

        {/* DESKTOP — horizontal rail */}
        <div className="hidden md:block mt-14">
          <div className="relative">
            {/* Continuous gradient rule behind the markers */}
            <div className="absolute left-0 right-0 top-[18px] h-px bg-gradient-to-r from-[#4285F4]/30 via-[#34A853]/30 to-[#EA4335]/30" />

            <div
              className="relative grid gap-3"
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
                    className="relative pt-12 px-2 text-center"
                  >
                    {/* Marker on the rule */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 h-9 w-9 rounded-full bg-white ring-4 ring-white flex items-center justify-center">
                      <div className={`h-3.5 w-3.5 rounded-full ${styles.dot}`} />
                    </div>

                    {/* Status badge */}
                    <span
                      className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${styles.badge}`}
                    >
                      {statusLabel}
                    </span>

                    {/* BIG date pill */}
                    <div
                      className={`mx-auto mt-3 inline-flex items-center rounded-lg px-3 py-1.5 font-mono text-sm font-bold tabular-nums tracking-tight ${styles.dateBg} ${styles.dateText}`}
                    >
                      {item.date}
                    </div>

                    {/* Title + description */}
                    <h3 className="mt-3 font-semibold text-sm text-slate-900 leading-snug tracking-tight">
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
        <div className="md:hidden mt-10">
          <ol className="space-y-4">
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
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                >
                  {/* Left — prominent date block */}
                  <div className="shrink-0">
                    <div
                      className={`inline-flex items-center rounded-lg px-2.5 py-1.5 font-mono text-xs font-bold tabular-nums tracking-tight ${styles.dateBg} ${styles.dateText}`}
                    >
                      {item.date}
                    </div>
                  </div>

                  {/* Right — content */}
                  <div className="min-w-0">
                    <span
                      className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${styles.badge}`}
                    >
                      {statusLabel}
                    </span>
                    <h3 className="mt-1.5 font-semibold text-[15px] text-slate-900 leading-snug tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
