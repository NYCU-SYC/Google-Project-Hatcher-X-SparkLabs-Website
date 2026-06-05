"use client";

import { motion } from "framer-motion";
import { Calendar, Users } from "lucide-react";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function ApplyHeader() {
  const { t } = useTranslation();

  return (
    <header className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-14">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(66,133,244,0.07) 0%, rgba(255,255,255,0) 60%)",
        }}
      />

      <div className="relative container-tight text-center">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#1A73E8]/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-normal text-[#174EA6] shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#1A73E8]" />
          {t.apply.header.eyebrow}
        </motion.div>

        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto flex max-w-5xl flex-col items-center gap-1.5 font-display text-3xl font-semibold leading-none tracking-normal text-slate-950 text-balance md:gap-2.5 md:text-5xl lg:gap-3 lg:text-[3.1rem]"
        >
          {t.apply.header.title.split("\n").map((line, index) => (
            <span
              key={line}
              className={index === 1 ? "block md:whitespace-nowrap" : "block"}
            >
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"
        >
          {t.apply.header.subtitle}
        </motion.p>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F9AB00]/25 bg-[#FEF7E0] px-4 py-2 text-sm font-semibold text-[#B06000]">
            <Calendar className="h-4 w-4" />
            {t.apply.header.deadline}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <Users className="h-4 w-4 text-[#1A73E8]" />
            {t.apply.header.spots}
          </div>
        </motion.div>

        <motion.div
          initial={false}
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
