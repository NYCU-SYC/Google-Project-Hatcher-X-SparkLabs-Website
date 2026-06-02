"use client";

import { motion } from "framer-motion";
import { Calendar, Users } from "lucide-react";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function ApplyHeader() {
  const { t } = useTranslation();

  return (
    <header className="relative pt-32 pb-12 md:pt-40 md:pb-14 overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(66,133,244,0.18), transparent 70%)",
        }}
      />

      <div className="relative container-tight text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-normal uppercase text-brand-blue mb-7"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(66,133,244,0.8)]" />
          {t.apply.header.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-3xl md:text-5xl lg:text-[3.1rem] font-bold leading-tight tracking-normal text-balance text-gradient max-w-3xl mx-auto"
        >
          {t.apply.header.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          {t.apply.header.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-spark/15 border border-brand-spark/30 px-4 py-2 text-sm text-brand-spark font-medium">
            <Calendar className="h-4 w-4" />
            {t.apply.header.deadline}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-slate-700">
            <Users className="h-4 w-4 text-brand-blue" />
            {t.apply.header.spots}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex justify-center"
        >
          <CountdownTimer variant="card" showStatus={false} />
        </motion.div>
      </div>
    </header>
  );
}
