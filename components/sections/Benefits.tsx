"use client";

import { motion } from "framer-motion";
import { Cloud, Brain, Users, Sparkles, Globe2, Check } from "lucide-react";
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

        {/* Hero Card — USD 25K Credit */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 relative"
        >
          <div className="relative glass-strong rounded-lg overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30 grid-bg-fade pointer-events-none" />

            <div className="relative p-7 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Left content */}
              <div className="lg:col-span-3">
                <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-brand-spark/30 bg-brand-spark/15 px-4 py-1.5 text-xs font-bold uppercase tracking-normal text-brand-spark shadow-sm md:text-sm">
                  <Sparkles className="h-4 w-4" />
                  {t.benefits.heroCard.tag}
                </div>

                <h3 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gradient leading-tight tracking-normal text-balance">
                  {t.benefits.heroCard.title}
                </h3>
                <p className="mt-4 text-lg md:text-xl text-brand-blue font-medium tracking-normal">
                  {t.benefits.heroCard.tagline}
                </p>
                <p className="mt-6 text-slate-600 text-[15px] md:text-base leading-relaxed">
                  {t.benefits.heroCard.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3.5 py-1.5 text-xs text-slate-600">
                  <Check className="h-3 w-3 text-brand-green shrink-0" strokeWidth={3} />
                  <span>{t.benefits.heroCard.subnote}</span>
                </div>
              </div>

              {/* Right visual */}
              <div className="lg:col-span-2 relative">
                <div className="relative aspect-square max-w-[280px] mx-auto">
                  <div className="relative h-full rounded-lg border border-slate-200 bg-white grid place-items-center">
                    <div className="text-center px-6">
                      <Cloud
                        className="h-12 w-12 text-brand-blue mx-auto mb-4"
                        strokeWidth={1.2}
                      />
                      <div className="font-display text-6xl md:text-7xl font-bold text-gradient-brand leading-none tracking-normal">
                        USD 25K
                      </div>
                      <div className="mt-4 text-xs tracking-normal uppercase text-slate-600">
                        Google Cloud Credit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other 4 cards in 2x2 grid */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
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
