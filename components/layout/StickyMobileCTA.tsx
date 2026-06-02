"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function StickyMobileCTA() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            className="flex items-center justify-center gap-2 w-full rounded-full bg-brand-blue px-6 py-4 text-base font-medium text-slate-900 shadow-[0_12px_40px_rgba(66,133,244,0.55)]"
          >
            {t.nav.apply}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
