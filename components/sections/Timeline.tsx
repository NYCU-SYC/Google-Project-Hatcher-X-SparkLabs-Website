"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

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
    dot: "bg-brand-spark shadow-[0_0_20px_rgba(255,92,53,0.8)]",
    badge: "bg-brand-spark/15 text-brand-spark-glow border-brand-spark/30",
  },
  upcoming: {
    dot: "bg-brand-blue shadow-[0_0_16px_rgba(66,133,244,0.6)]",
    badge: "bg-brand-blue/15 text-brand-blue-glow border-brand-blue/30",
  },
  future: {
    dot: "bg-slate-600",
    badge: "bg-white/5 text-slate-400 border-white/10",
  },
};

export function Timeline() {
  const { t } = useTranslation();

  return (
    <section id="timeline" className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="absolute top-0 right-0 h-[500px] w-[500px] opacity-30 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,92,53,0.3), transparent 70%)",
        }}
      />

      <div className="relative container-tight">
        <SectionHeader
          eyebrow={t.timeline.eyebrow}
          title={t.timeline.title}
          subtitle={t.timeline.subtitle}
        />

        <div className="mt-24 max-w-4xl mx-auto relative">
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-2 bottom-2 w-px bg-gradient-to-b from-brand-spark via-brand-blue to-white/5" />

          <div className="space-y-14 md:space-y-20">
            {t.timeline.items.map((item, i) => {
              const status = itemStatus[i];
              const styles = statusStyles[status];
              const statusLabel = t.timeline.statuses[status];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative md:grid md:grid-cols-2 md:gap-14 items-center"
                >
                  <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                    <div className={`h-3 w-3 rounded-full ${styles.dot}`} />
                  </div>

                  <div
                    className={`pl-12 md:pl-0 ${
                      isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-2.5 mb-3 ${
                        isLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full border tracking-wide ${styles.badge}`}
                      >
                        {statusLabel}
                      </span>
                      <span className="font-mono text-xs text-slate-500 tracking-[0.1em]">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-[15px] leading-relaxed max-w-md md:max-w-none">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
