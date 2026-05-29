"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function FAQReminderLink() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 md:py-24">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto glass rounded-2xl p-7 text-center"
        >
          <div className="grid h-10 w-10 mx-auto place-items-center rounded-full bg-white/5 border border-white/10 mb-5">
            <MessageCircleQuestion className="h-4 w-4 text-brand-blue-glow" strokeWidth={1.8} />
          </div>
          <h3 className="font-display text-base md:text-lg font-semibold text-white tracking-tight">
            {t.apply.faqReminder.title}
          </h3>
          <p className="mt-2 text-sm text-slate-400">{t.apply.faqReminder.subtitle}</p>
          <a
            href="/#faq"
            className="group mt-5 inline-flex items-center gap-1.5 text-sm text-brand-blue-glow hover:text-brand-blue-light transition-colors font-medium"
          >
            {t.apply.faqReminder.cta}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
