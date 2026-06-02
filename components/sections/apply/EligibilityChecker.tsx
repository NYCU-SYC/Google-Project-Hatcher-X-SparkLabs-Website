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
    <section id="eligibility" className="relative py-20 md:py-24">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1 text-[11px] font-mono font-medium text-brand-blue uppercase tracking-[0.2em] mb-5">
              Step 1
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 text-balance tracking-tight">
              {t.apply.eligibility.title}
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
              {t.apply.eligibility.subtitle}
            </p>
          </motion.div>

          <div className="glass-strong rounded-3xl p-7 md:p-9 space-y-3">
            {t.apply.eligibility.items.map((item, i) => {
              const isChecked = checked.has(i);
              return (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => toggle(i)}
                  className={cn(
                    "w-full flex items-start gap-4 p-5 md:p-6 rounded-2xl text-left transition-all duration-300 border",
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
                    {isChecked && <Check className="h-3.5 w-3.5 text-slate-900" strokeWidth={3} />}
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-blue text-slate-900 px-8 py-4 text-base font-medium shadow-[0_8px_30px_rgba(66,133,244,0.45)] hover:shadow-[0_12px_40px_rgba(66,133,244,0.6)] hover:-translate-y-0.5 transition-all"
                >
                  {t.apply.eligibility.readyLabel}
                  <ChevronDown className="h-4 w-4" />
                </motion.a>
              ) : (
                <motion.div
                  key="not-ready"
                  initial={{ opacity: 0 }}
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
