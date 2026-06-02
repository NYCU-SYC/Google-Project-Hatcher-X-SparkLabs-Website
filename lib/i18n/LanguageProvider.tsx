"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { translations, type Locale, type Translation } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "preferred-locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== "undefined"
      ? (window.localStorage.getItem(STORAGE_KEY) as Locale | null)
      : null);
    if (stored === "zh" || stored === "en") {
      setLocaleState(stored);
    } else if (typeof navigator !== "undefined") {
      const lang = navigator.language.toLowerCase();
      if (lang.startsWith("zh")) setLocaleState("zh");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale === "zh" ? "zh-Hant" : "en";
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.cookie = `${STORAGE_KEY}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;

    const seo = translations[locale].seo;
    const isApplyPage = window.location.pathname.startsWith("/apply");
    document.title = isApplyPage ? seo.applyTitle : seo.homeTitle;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = isApplyPage ? seo.applyDescription : seo.homeDescription;
    }
  }, [locale, mounted]);

  const setLocale = useCallback((next: Locale) => setLocaleState(next), []);
  const toggleLocale = useCallback(
    () => setLocaleState((prev) => (prev === "zh" ? "en" : "zh")),
    []
  );

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t: translations[locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return ctx;
}
