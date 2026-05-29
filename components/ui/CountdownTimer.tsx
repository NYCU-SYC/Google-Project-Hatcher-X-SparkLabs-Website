"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

// Deadline: July 26, 2026 23:59:59 Asia/Taipei (UTC+8)
const DEADLINE_UTC = new Date("2026-07-26T15:59:59Z").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

function calculate(): TimeLeft {
  const now = Date.now();
  const total = Math.max(0, DEADLINE_UTC - now);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds, total };
}

interface CountdownTimerProps {
  variant?: "inline" | "card";
  showStatus?: boolean;
  className?: string;
}

export function CountdownTimer({
  variant = "inline",
  showStatus = true,
  className,
}: CountdownTimerProps) {
  const { t } = useTranslation();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(calculate());
    const id = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) {
    return (
      <div className={cn("flex items-center gap-2 text-xs text-slate-500", className)}>
        <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
        <span>—</span>
      </div>
    );
  }

  const closed = time.total <= 0;
  const lastDay = !closed && time.days === 0;

  const label = closed
    ? t.countdown.labelClosed
    : lastDay
    ? t.countdown.labelLastDay
    : t.countdown.labelOpen;

  const segments = [
    { value: time.days, label: t.countdown.days },
    { value: time.hours, label: t.countdown.hours },
    { value: time.minutes, label: t.countdown.minutes },
    { value: time.seconds, label: t.countdown.seconds },
  ];

  if (variant === "card") {
    return (
      <div
        className={cn(
          "glass-strong rounded-2xl overflow-hidden flex flex-col w-full max-w-[420px] mx-auto sm:min-w-[320px] md:min-w-[420px]",
          className
        )}
      >
        {/* Status strip — top of card */}
        {showStatus && (
          <div className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 sm:py-3 bg-white/[0.025] border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-spark opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-spark" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-brand-spark-glow uppercase tracking-[0.18em] sm:tracking-[0.2em]">
                {t.countdown.statusOpen}
              </span>
            </div>
            <span className="text-white/20">·</span>
            <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 uppercase tracking-[0.18em] sm:tracking-[0.2em]">
              {t.countdown.statusScarcity}
            </span>
          </div>
        )}

        {/* Countdown body */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 px-4 py-5 sm:px-7 sm:py-6 md:px-9 md:py-7">
          <div className="text-[10px] tracking-[0.25em] uppercase text-slate-400 font-medium text-center">
            {label}
          </div>
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
            {segments.map((seg, i) => (
              <div key={seg.label} className="flex items-center gap-2 sm:gap-4 md:gap-6">
                <div className="flex flex-col items-center min-w-[2rem] sm:min-w-[2.5rem]">
                  <div className="font-display text-[1.75rem] sm:text-3xl md:text-[2.5rem] font-bold text-gradient-brand leading-none tabular-nums">
                    {String(seg.value).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-[10px] tracking-[0.15em] uppercase text-slate-500 font-medium">
                    {seg.label}
                  </div>
                </div>
                {i < segments.length - 1 && (
                  <span className="text-slate-700 text-lg sm:text-xl font-light -mt-3">:</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Inline variant
  return (
    <div className={cn("inline-flex items-center gap-2 text-xs text-slate-300", className)}>
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          closed
            ? "bg-slate-500"
            : "bg-brand-spark shadow-[0_0_8px_rgba(255,92,53,0.8)] animate-pulse"
        )}
      />
      <span className="text-slate-400">{label}</span>
      <span className="font-mono tabular-nums text-white">
        {closed
          ? "—"
          : `${time.days}${t.countdown.days} ${String(time.hours).padStart(2, "0")}:${String(
              time.minutes
            ).padStart(2, "0")}:${String(time.seconds).padStart(2, "0")}`}
      </span>
    </div>
  );
}
