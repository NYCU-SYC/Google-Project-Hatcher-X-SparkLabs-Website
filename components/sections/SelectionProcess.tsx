"use client";

import { motion } from "framer-motion";
import { FileText, MessageSquare, Award, Cpu, User, TrendingUp, Globe2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

const stageIcons = [FileText, MessageSquare, Award];
const criteriaIcons = [Cpu, User, TrendingUp, Globe2];
const criteriaAccents = [
  "from-brand-blue to-brand-blue-light",
  "from-brand-green to-brand-blue",
  "from-brand-spark to-brand-spark-glow",
  "from-purple-400 to-brand-blue",
];

export function SelectionProcess() {
  const { t } = useTranslation();

  return (
    <section id="selection" className="relative py-20 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(52,168,83,0.12), transparent 65%)",
        }}
      />

      <div className="relative container-tight">
        <SectionHeader
          eyebrow={t.selection.eyebrow}
          title={t.selection.title}
          subtitle={t.selection.subtitle}
        />

        {/* 3-stage funnel */}
        <div className="mt-20 relative">
          <div className="hidden md:block absolute top-[40px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.selection.stages.map((stage, i) => {
              const Icon = stageIcons[i];
              const widths = ["w-full", "w-[92%]", "w-[82%]"];
              return (
                <motion.div
                  key={stage.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`relative ${widths[i]} mx-auto`}
                >
                  <div className="relative mx-auto mb-7 w-fit">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green blur-xl opacity-50" />
                    <div className="relative grid h-20 w-20 place-items-center rounded-2xl bg-white border border-slate-200">
                      <Icon className="h-8 w-8 text-slate-900" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-2 -right-2 rounded-full bg-white border border-slate-200 px-2 py-0.5">
                      <span className="text-[10px] font-mono font-medium text-slate-600">
                        {stage.num}
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-blue font-medium">
                      {stage.description}
                    </p>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed">{stage.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4 evaluation criteria */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              {t.selection.criteriaTitle}
            </h3>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              {t.selection.criteriaSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {t.selection.criteriaItems.map((item, i) => {
              const Icon = criteriaIcons[i];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group relative"
                >
                  <div className="relative glass rounded-2xl p-7 transition-all duration-300 hover:bg-slate-100/60 hover:border-slate-200 hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <div
                          className={`absolute inset-0 rounded-xl blur-md opacity-50 bg-gradient-to-br ${criteriaAccents[i]}`}
                        />
                        <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-white border border-slate-200">
                          <Icon className="h-5 w-5 text-slate-900" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-display text-base md:text-lg font-semibold text-slate-900 tracking-tight">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
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
