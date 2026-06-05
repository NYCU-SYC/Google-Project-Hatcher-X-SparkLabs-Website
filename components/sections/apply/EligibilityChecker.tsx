"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, ChevronDown } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function EligibilityChecker() {
  const { t } = useTranslation();
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const allChecked = checked.size === t.apply.eligibility.items.length;

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section id="eligibility" className="relative py-14 md:py-16">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1 text-[11px] font-mono font-medium text-brand-blue uppercase tracking-normal mb-5">
              {t.apply.steps.eligibility}
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 text-balance tracking-normal">
              {t.apply.eligibility.title}
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
              {t.apply.eligibility.subtitle}
            </p>
          </motion.div>

          <div className="glass-strong rounded-lg p-5 md:p-7 space-y-3">
            {t.apply.eligibility.items.map((item, i) => {
              const isChecked = checked.has(i);
              return (
                <motion.button
                  key={i}
                  initial={false}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => toggle(i)}
                  className={cn(
                    "w-full flex items-start gap-4 p-4 md:p-5 rounded-lg text-left transition-all duration-300 border",
                    isChecked
                      ? "bg-brand-blue/10 border-brand-blue/30"
                      : "bg-slate-50 border-slate-100 hover:bg-slate-100/60 hover:border-slate-200"
                  )}
                >
                  <div
                    className={cn(
                      "shrink-0 mt-0.5 h-6 w-6 rounded-lg grid place-items-center transition-all duration-300 border",
                      isChecked
                        ? "bg-brand-blue border-brand-blue"
                        : "bg-transparent border-slate-300"
                    )}
                  >
                    {isChecked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
                  </div>
                  <span
                    className={cn(
                      "text-[15px] leading-relaxed transition-colors",
                      isChecked ? "text-slate-900" : "text-slate-700"
                    )}
                  >
                    {item}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <AnimatePresence mode="wait">
              {allChecked ? (
                <motion.a
                  key="ready"
                  href="#prepare"
                  initial={false}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-blue text-white px-8 py-4 text-base font-medium shadow-[0_8px_24px_rgba(66,133,244,0.32)] hover:shadow-[0_12px_32px_rgba(66,133,244,0.42)] hover:-translate-y-0.5 transition-all"
                >
                  {t.apply.eligibility.readyLabel}
                  <ChevronDown className="h-4 w-4" />
                </motion.a>
              ) : (
                <motion.div
                  key="not-ready"
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-2 text-sm text-slate-500"
                >
                  <AlertCircle className="h-4 w-4" />
                  {t.apply.eligibility.notReadyLabel}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
