"use client";

import { motion } from "framer-motion";
import {
  Building2,
  UserCircle2,
  Sparkles,
  TrendingUp,
  Globe2,
  Cloud,
  FileText,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

const icons = [Building2, UserCircle2, Sparkles, TrendingUp, Globe2, Cloud, FileText];

export function PrepareList() {
  const { t } = useTranslation();

  return (
    <section id="prepare" className="relative py-20 md:py-24 scroll-mt-24">
      <div className="container-tight">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1 text-[11px] font-mono font-medium text-brand-blue-glow uppercase tracking-[0.2em] mb-5">
              Step 2
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white text-balance tracking-tight">
              {t.apply.prepare.title}
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-400 leading-relaxed">
              {t.apply.prepare.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {t.apply.prepare.items.map((item, i) => {
              const Icon = icons[i] || FileText;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="glass rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:border-white/15"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 grid h-10 w-10 place-items-center rounded-lg bg-white/5 border border-white/10">
                      <Icon className="h-4 w-4 text-brand-blue-glow" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-sm md:text-base font-semibold text-white tracking-tight">
                        {item.title}
                      </div>
                      <div className="mt-1.5 text-xs md:text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
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
