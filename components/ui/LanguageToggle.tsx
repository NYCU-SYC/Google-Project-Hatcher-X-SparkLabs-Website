"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { locale, setLocale } = useTranslation();

  const options: { value: "zh" | "en"; label: string }[] = [
    { value: "zh", label: "中" },
    { value: "en", label: "EN" },
  ];

  return (
    <div
      className={cn(
        "relative inline-flex items-center rounded-full glass-strong p-1 text-xs font-medium",
        className
      )}
    >
      {options.map((opt) => {
        const active = locale === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => setLocale(opt.value)}
            className={cn(
              "relative z-10 px-3.5 py-1.5 rounded-full transition-colors duration-300",
              active ? "text-slate-900" : "text-slate-600 hover:text-slate-800"
            )}
            aria-label={`Switch to ${opt.label}`}
          >
            {active && (
              <motion.span
                layoutId="lang-toggle-pill"
                className="absolute inset-0 rounded-full bg-brand-blue shadow-[0_4px_20px_rgba(66,133,244,0.45)]"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative z-10">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
