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
    <section id="faq" className="relative bg-slate-50/70 py-16 md:py-24">
      <div className="container-wide">
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} />

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 md:mt-12 lg:grid-cols-2">
          {t.faq.items.map((faq, i) => {
            const isOpen = open.has(i);
            return (
              <motion.div
                key={i}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-slate-300"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-6"
                >
                  <span className="font-display text-base md:text-lg font-medium text-slate-900 tracking-normal leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-[#1A73E8]" : "bg-slate-100"
                    }`}
                  >
                    <Plus
                      className={`h-4 w-4 ${isOpen ? "text-white" : "text-slate-900"}`}
                      strokeWidth={2.5}
                    />
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
                      <div className="px-5 md:px-7 pb-6 text-slate-600 text-[15px] leading-relaxed">
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
