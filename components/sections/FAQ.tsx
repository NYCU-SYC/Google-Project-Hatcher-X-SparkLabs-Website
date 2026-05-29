"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

const DEFAULT_OPEN = new Set([0, 1, 2]);

export function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<Set<number>>(DEFAULT_OPEN);

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section id="faq" className="relative py-28 md:py-36">
      <div className="container-tight">
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} />

        <div className="mt-20 max-w-3xl mx-auto space-y-3">
          {t.faq.items.map((faq, i) => {
            const isOpen = open.has(i);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="glass rounded-2xl overflow-hidden transition-colors duration-300 hover:border-white/15"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 px-7 md:px-8 py-6 md:py-7 text-left"
                >
                  <span className="font-display text-base md:text-lg font-medium text-white tracking-tight leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                      isOpen ? "bg-brand-blue rotate-45" : "bg-white/5"
                    }`}
                  >
                    <Plus className="h-4 w-4 text-white" strokeWidth={2.5} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 md:px-8 pb-6 text-slate-400 text-[15px] leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
