"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function StickyMobileCTA() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const inlineCtaSections = ["apply-cta"];

    const hasInlineCtaInView = () =>
      inlineCtaSections.some((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight - 80 && rect.bottom > 120;
      });

    const updateVisibility = () => setVisible(window.scrollY > 1200 && !hasInlineCtaInView());
    updateVisibility();

    const interval = window.setInterval(updateVisibility, 300);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    window.addEventListener("hashchange", updateVisibility);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
      window.removeEventListener("hashchange", updateVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 inset-x-4 z-40 md:hidden"
        >
          <a
            href="/apply"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1A73E8] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(26,115,232,0.28)]"
          >
            {t.nav.apply}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
