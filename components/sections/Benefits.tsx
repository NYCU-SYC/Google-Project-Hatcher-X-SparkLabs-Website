"use client";

import { motion } from "framer-motion";
import { Cloud, Brain, Users, Sparkles, Globe2, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const itemMeta = [
  { icon: Brain, accent: "from-brand-blue to-brand-blue-light" },
  { icon: Users, accent: "from-brand-green to-brand-blue" },
  { icon: Sparkles, accent: "from-brand-spark to-brand-spark-glow" },
  { icon: Globe2, accent: "from-purple-400 to-brand-spark" },
];

export function Benefits() {
  const { t } = useTranslation();

  return (
    <section id="benefits" className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(66,133,244,0.12), transparent 70%)",
        }}
      />

      <div className="relative container-tight">
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
          className="mt-20 relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-blue/30 via-brand-green/15 to-transparent blur-2xl" />

          <div className="relative glass-strong rounded-3xl overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30 grid-bg-fade pointer-events-none" />

            <div className="relative p-10 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
              {/* Left content */}
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-spark/15 border border-brand-spark/30 px-3.5 py-1 text-[11px] font-medium text-brand-spark uppercase tracking-[0.15em] mb-6">
                  <Sparkles className="h-3 w-3" />
                  {t.benefits.heroCard.tag}
                </div>

                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient leading-display tracking-display-tight text-balance">
                  {t.benefits.heroCard.title}
                </h3>
                <p className="mt-5 text-lg md:text-xl text-brand-blue font-medium tracking-tight">
                  {t.benefits.heroCard.tagline}
                </p>
                <p className="mt-6 text-slate-600 text-[15px] md:text-base leading-relaxed">
                  {t.benefits.heroCard.description}
                </p>
                <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-100/60 border border-slate-200 px-3.5 py-1.5 text-xs text-slate-600">
                  <Check className="h-3 w-3 text-brand-green shrink-0" strokeWidth={3} />
                  <span>{t.benefits.heroCard.subnote}</span>
                </div>
              </div>

              {/* Right visual */}
              <div className="lg:col-span-2 relative">
                <div className="relative aspect-square max-w-[280px] mx-auto">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-blue/30 to-brand-green/20 blur-xl" />
                  <div className="relative h-full rounded-3xl glass-strong grid place-items-center">
                    <div className="text-center px-6">
                      <Cloud
                        className="h-12 w-12 text-brand-blue mx-auto mb-4"
                        strokeWidth={1.2}
                      />
                      <div className="font-display text-6xl md:text-7xl font-bold text-gradient-brand leading-none tracking-tight">
                        $25K
                      </div>
                      <div className="mt-4 text-xs tracking-[0.25em] uppercase text-slate-600">
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
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="group relative rounded-3xl overflow-hidden"
              >
                <div
                  className={cn(
                    "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl",
                    `bg-gradient-to-br ${meta.accent}`
                  )}
                  style={{ filter: "blur(40px)", transform: "scale(0.9)" }}
                />

                <div className="relative h-full glass-strong rounded-3xl p-8 md:p-9 transition-all duration-500 group-hover:border-slate-200 group-hover:-translate-y-1">
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
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-900 tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-brand-blue tracking-tight">
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

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <span className="text-sm text-slate-600">{t.benefits.readyCta}</span>
          <Button href="/apply" variant="primary" size="md" withArrow>
            {t.nav.apply}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
