"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { locale, setLocale, t } = useTranslation();

  const options: { value: "zh" | "en"; label: string }[] = [
    { value: "zh", label: locale === "en" ? "ZH" : "中" },
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
          <a
            href={`/api/locale?locale=${opt.value}`}
            key={opt.value}
            onClick={(event) => {
              event.preventDefault();
              setLocale(opt.value);
              document.cookie = `preferred-locale=${opt.value}; path=/; max-age=31536000; SameSite=Lax`;
            }}
            aria-current={active ? "true" : undefined}
            className={cn(
              "relative z-10 min-w-11 cursor-pointer select-none rounded-full px-3.5 py-1.5 text-center transition-colors duration-300",
              active ? "text-white" : "text-slate-600 hover:text-slate-800"
            )}
            aria-label={t.languageToggle[opt.value]}
          >
            {active && (
              <motion.span
                layoutId="lang-toggle-pill"
                className="pointer-events-none absolute inset-0 rounded-full bg-[#1A73E8] shadow-sm"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className="pointer-events-none relative z-10">{opt.label}</span>
          </a>
        );
      })}
    </div>
  );
}
