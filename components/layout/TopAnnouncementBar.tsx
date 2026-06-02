"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function TopAnnouncementBar() {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-x-0 top-0 z-[60] bg-white/95 backdrop-blur-md border-b border-slate-100">
      {/* Google 4-color top stripe */}
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, #EA4335 0%, #FBBC04 33%, #34A853 66%, #4285F4 100%)",
        }}
      />

      <div className="container-tight">
        <div className="flex items-center justify-between gap-4 py-2.5 md:py-3 text-xs md:text-sm">
          {/* Left: program full name */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-1 shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EA4335]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#FBBC04]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#34A853]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#4285F4]" />
            </div>
            <span className="font-display font-semibold text-slate-900 truncate tracking-normal">
              {t.topBanner.programName}
            </span>
          </div>

          {/* Right: deadline + CTA */}
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-brand-spark font-medium tracking-normal">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-spark animate-pulse shadow-[0_0_8px_rgba(255,92,53,0.8)]" />
              {t.topBanner.deadline}
            </span>
            <Link
              href="/apply"
              className="group inline-flex items-center gap-1 text-slate-900 hover:text-brand-blue transition-colors font-medium tracking-normal"
            >
              <span className="hidden sm:inline">{t.topBanner.ctaShort}</span>
              <span className="sm:hidden">{t.topBanner.ctaShort}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
