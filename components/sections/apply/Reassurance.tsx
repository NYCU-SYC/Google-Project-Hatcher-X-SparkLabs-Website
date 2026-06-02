"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Calendar, Rocket } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

const icons = [ShieldCheck, Lock, Calendar, Rocket];

export function Reassurance() {
  const { t } = useTranslation();

  return (
    <section className="relative py-14 md:py-16">
      <div className="container-tight">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-xs font-medium tracking-normal uppercase text-slate-500 mb-8"
          >
            {t.apply.reassurance.title}
          </motion.h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {t.apply.reassurance.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="glass rounded-lg p-5 md:p-6 text-center"
                >
                  <div className="grid h-10 w-10 mx-auto place-items-center rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-4">
                    <Icon className="h-4 w-4 text-brand-blue" strokeWidth={1.8} />
                  </div>
                  <div className="font-display text-sm font-semibold text-slate-900 tracking-normal">
                    {item.title}
                  </div>
                  <div className="mt-1.5 text-xs text-slate-600 leading-snug">
                    {item.description}
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
