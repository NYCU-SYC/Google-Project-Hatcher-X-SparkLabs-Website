"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function FAQReminderLink() {
  const { t } = useTranslation();

  return (
    <section className="relative py-14 md:py-16">
      <div className="container-tight">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto glass rounded-lg p-7 text-center"
        >
          <div className="grid h-10 w-10 mx-auto place-items-center rounded-full bg-slate-100/60 border border-slate-200 mb-5">
            <MessageCircleQuestion className="h-4 w-4 text-brand-blue" strokeWidth={1.8} />
          </div>
          <h3 className="font-display text-base md:text-lg font-semibold text-slate-900 tracking-normal">
            {t.apply.faqReminder.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600">{t.apply.faqReminder.subtitle}</p>
          <a
            href="/#faq"
            className="group mt-5 inline-flex items-center gap-1.5 text-sm text-brand-blue hover:text-brand-blue-light transition-colors font-medium"
          >
            {t.apply.faqReminder.cta}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
