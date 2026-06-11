"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DualBrandLock } from "@/components/ui/BrandLogos";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { GOOGLE_FORM_EXTERNAL_URL } from "@/lib/applyForm";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const NAV_LINKS = [
    { label: t.nav.glance, href: "/#about-program" },
    { label: t.nav.whyNow, href: "/#program-difference" },
    { label: t.nav.benefits, href: "/#benefits" },
    { label: t.nav.criteria, href: "/#apply-criteria" },
    { label: t.nav.timeline, href: "/#timeline" },
    { label: t.nav.faq, href: "/#faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-3" : "py-4"
        )}
      >
        <div className="mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between gap-3 rounded-full border border-slate-200/80 bg-white/95 py-2 pl-4 pr-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 sm:gap-6 sm:pl-6 sm:pr-3 lg:gap-8",
              scrolled
                ? "shadow-[0_10px_26px_rgba(15,23,42,0.08)]"
                : "shadow-[0_6px_20px_rgba(15,23,42,0.055)]"
            )}
          >
            <a href="/" className="flex shrink-0 items-center leading-none">
              <DualBrandLock compact />
            </a>

            <nav className="hidden xl:flex items-center gap-2 flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
              <LanguageToggle className="hidden sm:inline-flex" />

              <div className="hidden md:block">
                <Button href={GOOGLE_FORM_EXTERNAL_URL} variant="primary" size="md" withArrow external>
                  {t.nav.apply}
                </Button>
              </div>

              <button
                onClick={() => setOpen(!open)}
                className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm xl:hidden"
                aria-label={open ? t.nav.closeMenu : t.nav.toggleMenu}
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 xl:hidden bg-white/95 backdrop-blur-xl pt-24 overflow-y-auto"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="container-tight flex flex-col gap-1 pb-12"
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="text-2xl font-display font-medium text-slate-900 py-3.5 border-b border-slate-100 tracking-normal"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-6 flex items-center justify-between gap-4">
                <LanguageToggle />
                <Button
                  href={GOOGLE_FORM_EXTERNAL_URL}
                  variant="primary"
                  size="lg"
                  withArrow
                  external
                  className="flex-1"
                >
                  {t.nav.apply}
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
