"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

interface RawStat {
  value: number;
  prefix?: string;
  suffix?: string;
}

function Counter({ value, prefix, suffix }: RawStat) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        // Tighter timing: previous 2s with deep ease-out felt sluggish on
        // small numbers. 1s with a snappier curve keeps the count-up feel
        // without making the viewer wait.
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) ref.current.textContent = String(latest);
    });
  }, [rounded]);

  return (
    <span className="tabular-nums">
      {prefix}
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export function Stats() {
  const { t } = useTranslation();

  return (
    <section id="stats" className="relative py-20 md:py-28">
      <div className="container-tight">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-medium tracking-[0.25em] uppercase text-slate-500 mb-14"
        >
          {t.stats.title}
        </motion.p>

        <div className="relative">
          <div
            className="absolute inset-0 rounded-3xl opacity-30 blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(66,133,244,0.2), rgba(255,92,53,0.15), transparent)",
            }}
          />

          <div className="relative glass-strong rounded-3xl p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            {t.stats.items.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="text-center md:text-left md:border-l md:border-white/10 md:first:border-l-0 md:pl-6 md:first:pl-0"
              >
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-brand leading-none tracking-tight">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="mt-4 text-sm md:text-[15px] font-semibold text-white tracking-tight">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div className="mt-1.5 text-xs text-slate-500 tracking-wide">
                    {stat.sublabel}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
