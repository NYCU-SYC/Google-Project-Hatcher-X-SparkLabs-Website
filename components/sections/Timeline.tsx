"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

/**
 * Horizontal program timeline.
 *
 * Desktop (≥ md): grid rail with date badges sitting on a
 * brand-colored gradient rule. Each step shows phase label, BIG date
 * badge, title, one-line description.
 *
 * Mobile (< md): stacked compact list with the same prominent date
 * badge on the left, content on the right.
 *
 * Date prominence is the primary visual: the date is the largest
 * tabular-numeric element in each step, sitting in a brand-colored
 * pill so visitors instantly see "when". Status color comes from the
 * status array per index (upcoming / future).
 */

const itemStatus: ("open" | "upcoming" | "future")[] = [
  "upcoming",
  "future",
  "future",
];

const stepMeta = [
  {
    dot: "bg-[#4285F4]",
    text: "text-[#4285F4]",
    dateBg: "bg-[#4285F4]",
    dateText: "text-white",
    border: "border-[#4285F4]/25",
    ring: "ring-[#4285F4]/15",
    wash: "from-[#4285F4]/10",
  },
  {
    dot: "bg-[#FBBC04]",
    text: "text-[#B77900]",
    dateBg: "bg-[#FBBC04]",
    dateText: "text-slate-900",
    border: "border-[#FBBC04]/35",
    ring: "ring-[#FBBC04]/20",
    wash: "from-[#FBBC04]/12",
  },
  {
    dot: "bg-[#34A853]",
    text: "text-[#16833A]",
    dateBg: "bg-[#34A853]",
    dateText: "text-white",
    border: "border-[#34A853]/30",
    ring: "ring-[#34A853]/20",
    wash: "from-[#34A853]/10",
  },
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

        {/* Desktop / tablet: true horizontal milestone timeline */}
        <div className="hidden md:block mt-14 pb-4">
          <div className="relative mx-auto w-full max-w-6xl pt-2">
            <div
              aria-hidden
              className="absolute left-[16%] right-[16%] top-8 h-1 rounded-full bg-slate-100"
            />
            <div
              aria-hidden
              className="absolute left-[16%] right-[16%] top-8 h-1 rounded-full bg-gradient-to-r from-[#4285F4] via-[#FBBC04] to-[#34A853]"
            />
            <ol
              className="relative grid auto-rows-fr items-stretch gap-4 lg:gap-6"
              style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
            >
              {items.map((item, i) => {
                const status = itemStatus[i] ?? "future";
                const styles = statusStyles[status];
                const statusLabel = t.timeline.statuses[status];
                const meta = stepMeta[i] ?? stepMeta[0];
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative flex h-full min-h-full flex-col"
                  >
                    <div className="relative z-10 mb-6 flex justify-center">
                      <div className={`grid h-14 w-14 place-items-center rounded-full border-4 border-white text-sm font-bold text-white shadow-[0_10px_28px_rgba(15,23,42,0.16)] ${meta.dot}`}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className={`relative flex h-full min-h-[180px] flex-1 flex-col overflow-hidden rounded-lg border bg-white p-5 text-left shadow-[0_14px_34px_rgba(15,23,42,0.08)] ring-1 ${meta.border} ${meta.ring}`}>
                      <div className={`absolute inset-x-0 top-0 h-1.5 ${meta.dot}`} />
                      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${meta.wash} to-white`} />

                      <div className="relative flex items-start justify-between gap-4">
                        <div>
                          <div className={`font-mono text-2xl font-bold leading-none tracking-normal tabular-nums ${meta.text}`}>
                            {item.date}
                          </div>
                        </div>
                        <span
                          className={`inline-flex w-fit rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-normal uppercase ${styles.badge}`}
                        >
                          {statusLabel}
                        </span>
                      </div>

                      <h3 className="relative mt-6 font-display text-lg font-semibold leading-snug tracking-normal text-slate-900">
                        {item.title}
                      </h3>
                      <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
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
            className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[#4285F4]/45 via-[#FBBC04]/45 to-[#34A853]/45"
          />
          <ol className="space-y-4">
            {items.map((item, i) => {
              const status = itemStatus[i] ?? "future";
              const styles = statusStyles[status];
              const statusLabel = t.timeline.statuses[status];
              const meta = stepMeta[i] ?? stepMeta[0];
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
                    className={`absolute left-[0.375rem] top-6 z-10 h-5 w-5 rounded-full border-4 border-white shadow-sm ${meta.dot}`}
                  />
                  <div className={`relative overflow-hidden rounded-lg border bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.07)] ring-1 ${meta.border} ${meta.ring}`}>
                    <div className={`absolute inset-x-0 top-0 h-1 ${meta.dot}`} />
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${meta.wash} to-white`} />
                    <div className="relative flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div
                          style={{ whiteSpace: "nowrap" }}
                          className={`inline-flex whitespace-nowrap items-center rounded-lg px-3 py-1.5 font-mono text-sm font-bold tabular-nums tracking-normal ${meta.dateBg} ${meta.dateText}`}
                        >
                          {item.date}
                        </div>
                      </div>
                      <span
                        className={`inline-block rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-normal uppercase ${styles.badge}`}
                      >
                        {statusLabel}
                      </span>
                    </div>
                    <h3 className="relative mt-4 font-semibold text-base text-slate-900 leading-snug tracking-normal">
                      {item.title}
                    </h3>
                    <p className="relative mt-2 text-sm text-slate-600 leading-relaxed">
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
