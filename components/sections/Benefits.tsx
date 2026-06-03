"use client";

import { motion } from "framer-motion";
import { Brain, Users, Sparkles, Globe2, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const itemMeta = [
  { icon: Brain, accent: "from-brand-blue to-brand-blue-light" },
  { icon: Users, accent: "from-brand-green to-brand-blue" },
  { icon: Sparkles, accent: "from-brand-spark to-brand-spark-glow" },
  { icon: Globe2, accent: "from-brand-blue to-brand-green" },
];

export function Benefits() {
  const { t } = useTranslation();

  return (
    <section id="benefits" className="relative py-16 md:py-20 overflow-hidden bg-slate-50/50">
      <div className="relative container-wide">
        <SectionHeader
          eyebrow={t.benefits.eyebrow}
          title={t.benefits.title}
          subtitle={t.benefits.subtitle}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {itemMeta.map((meta, i) => {
            const item = t.benefits.items[i];
            const Icon = meta.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative rounded-lg overflow-hidden"
              >
                <div
                  className={cn(
                    "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl",
                    `bg-gradient-to-br ${meta.accent}`
                  )}
                  style={{ filter: "blur(40px)", transform: "scale(0.9)" }}
                />

                <div className="relative h-full glass-strong rounded-lg p-6 md:p-7 transition-all duration-300 group-hover:border-slate-200 group-hover:-translate-y-0.5">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative shrink-0">
                      <div
                        className={cn(
                          "absolute inset-0 rounded-xl blur-md opacity-60",
                          `bg-gradient-to-br ${meta.accent}`
                        )}
                      />
                      <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-white border border-slate-200">
                        <Icon className="h-5 w-5 text-slate-900" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-900 tracking-normal leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-brand-blue tracking-normal">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
                    {item.description}
                  </p>

                  {item.bullets.length > 0 && (
                    <ul className="mt-6 space-y-2.5">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Check
                            className="h-4 w-4 mt-0.5 text-brand-blue shrink-0"
                            strokeWidth={2.5}
                          />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
