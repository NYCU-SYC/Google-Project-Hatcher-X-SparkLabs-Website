"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

// Google Forms embed URL — strip user-specific `/u/0` and edit_requested params,
// add `?embedded=true` for iframe-friendly rendering.
const FORM_ID = "119x6W7T_Ec6fZ6dWStT-54zey0BE-n7lvFp4fLEZ8yw";
const FORM_EMBED_URL = `https://docs.google.com/forms/d/${FORM_ID}/viewform?embedded=true`;
const FORM_EXTERNAL_URL = `https://docs.google.com/forms/d/${FORM_ID}/viewform`;

export function ApplyForm() {
  const { t } = useTranslation();

  return (
    <section id="form" className="relative py-14 md:py-16 scroll-mt-24">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1 text-[11px] font-mono font-medium text-brand-blue uppercase tracking-normal mb-5">
              {t.apply.steps.form}
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 text-balance tracking-normal">
              {t.apply.form.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative glass-strong rounded-lg overflow-hidden"
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-1 z-10"
              style={{
                background:
                  "linear-gradient(90deg, #4285F4 0%, #34A853 50%, #FF5C35 100%)",
              }}
            />

            {/* External link header */}
            <div className="flex items-center justify-between gap-4 px-7 md:px-8 py-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100/60 border border-slate-200">
                  <FileText className="h-4 w-4 text-brand-blue" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 tracking-normal">
                    {t.apply.form.iframeLabel}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{t.apply.form.iframeMeta}</div>
                </div>
              </div>
              <a
                href={FORM_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs md:text-sm text-brand-blue hover:text-brand-blue-light transition-colors font-medium whitespace-nowrap"
              >
                {t.apply.form.openInNewTab}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Embedded iframe — white background since Google Forms is light */}
            <div className="relative bg-white">
              <iframe
                src={FORM_EMBED_URL}
                title={t.apply.form.iframeTitle}
                className="w-full border-0"
                style={{ minHeight: "1200px" }}
                loading="lazy"
              >
                {t.apply.form.loading}
              </iframe>
            </div>

            {/* Footer reassurance */}
            <div className="px-7 md:px-8 py-5 border-t border-slate-100">
              <p className="text-xs text-slate-500 text-center leading-relaxed">
                {t.apply.form.note}
              </p>
            </div>
          </motion.div>

          {/* Fallback CTA if iframe fails */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-slate-500 mb-4">{t.apply.form.fallbackPrompt}</p>
            <Button
              href={FORM_EXTERNAL_URL}
              variant="secondary"
              size="md"
              withArrow
              external
            >
              {t.apply.form.fallbackCta}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
