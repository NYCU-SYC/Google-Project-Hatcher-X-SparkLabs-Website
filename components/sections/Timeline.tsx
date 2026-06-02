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
    <section id="timeline" className="relative py-16 md:py-20 bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow={t.timeline.eyebrow}
          title={t.timeline.title}
          subtitle={t.timeline.subtitle}
        />

        {/* Desktop / tablet: true horizontal timeline */}
        <div className="hidden md:block mt-12 overflow-x-auto pb-4">
          <div className="relative min-w-[1220px] pt-12">
            <div
              aria-hidden
              className="absolute left-[7%] right-[7%] top-[1.375rem] h-px bg-gradient-to-r from-[#EA4335]/45 via-[#4285F4]/40 to-slate-300"
            />
            <ol className="grid grid-cols-6 gap-4">
              {items.map((item, i) => {
                const status = itemStatus[i] ?? "future";
                const styles = statusStyles[status];
                const statusLabel = t.timeline.statuses[status];
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative"
                  >
                    <div
                      className={`absolute left-1/2 top-[-2.375rem] z-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white shadow-sm ${styles.dot}`}
                    />
                    <div className="h-full rounded-lg border border-slate-200 bg-white p-4 text-center shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                      <div className="grid w-full justify-items-center gap-2">
                        <div
                          style={{ whiteSpace: "nowrap" }}
                          className={`inline-flex w-fit whitespace-nowrap items-center rounded-lg px-3 py-1.5 font-mono text-sm font-bold tabular-nums tracking-normal ${styles.dateBg} ${styles.dateText}`}
                        >
                          {item.date}
                        </div>
                        <span
                          className={`inline-flex w-fit rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-normal uppercase ${styles.badge}`}
                        >
                          {statusLabel}
                        </span>
                      </div>
                      <h3 className="mt-4 font-semibold text-[15px] text-slate-900 leading-snug tracking-normal">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Mobile: vertical timeline for readability */}
        <div className="md:hidden relative mt-10">
          <div
            aria-hidden
            className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[#EA4335]/40 via-[#4285F4]/35 to-slate-300"
          />
          <ol className="space-y-4">
            {items.map((item, i) => {
              const status = itemStatus[i] ?? "future";
              const styles = statusStyles[status];
              const statusLabel = t.timeline.statuses[status];
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative pl-11"
                >
                  <div
                    className={`absolute left-[0.375rem] top-6 z-10 h-5 w-5 rounded-full border-4 border-white shadow-sm ${styles.dot}`}
                  />
                  <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div
                        style={{ whiteSpace: "nowrap" }}
                        className={`inline-flex whitespace-nowrap items-center rounded-lg px-3 py-1.5 font-mono text-sm font-bold tabular-nums tracking-normal ${styles.dateBg} ${styles.dateText}`}
                      >
                        {item.date}
                      </div>
                      <span
                        className={`inline-block rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-normal uppercase ${styles.badge}`}
                      >
                        {statusLabel}
                      </span>
                    </div>
                    <h3 className="mt-4 font-semibold text-base text-slate-900 leading-snug tracking-normal">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
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
