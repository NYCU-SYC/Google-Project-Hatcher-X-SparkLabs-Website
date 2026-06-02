"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DualBrandLock } from "@/components/ui/BrandLogos";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const NAV_LINKS = [
    { label: t.nav.glance, href: "/#program-at-a-glance" },
    { label: t.nav.benefits, href: "/#benefits" },
    { label: t.nav.criteria, href: "/#apply-criteria" },
    { label: t.nav.timeline, href: "/#timeline" },
    { label: t.nav.mentors, href: "/#mentors" },
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
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 md:px-10 lg:px-14">
          <div
            className={cn(
              "flex items-center justify-between rounded-full pl-5 pr-3 sm:pl-8 sm:pr-4 md:pl-12 md:pr-5 lg:pl-14 py-2 sm:py-2.5 md:py-3 gap-3 sm:gap-8 lg:gap-12 transition-all duration-300",
              scrolled
                ? "glass-strong shadow-[0_8px_28px_rgba(15,23,42,0.08)]"
                : "bg-transparent"
            )}
          >
            <a href="/" className="shrink-0">
              <DualBrandLock compact />
            </a>

            <nav className="hidden xl:flex items-center gap-2 flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200 rounded-full hover:bg-slate-100/60 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 shrink-0">
              <LanguageToggle className="hidden sm:inline-flex" />

              <div className="hidden md:block">
                <Button href="/apply" variant="primary" size="md" withArrow>
                  {t.nav.apply}
                </Button>
              </div>

              <button
                onClick={() => setOpen(!open)}
                className="xl:hidden grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full glass-strong text-slate-900"
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
                <Button href="/apply" variant="primary" size="lg" withArrow className="flex-1">
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
