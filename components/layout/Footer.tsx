"use client";

import { DualBrandLock } from "@/components/ui/BrandLogos";
import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { GOOGLE_FORM_EXTERNAL_URL } from "@/lib/applyForm";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative border-t border-slate-100 bg-white">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(66,133,244,0.12), transparent 70%)",
        }}
      />

      <div className="relative container-tight py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 space-y-6">
            <DualBrandLock />
            <p className="text-slate-600 text-sm leading-relaxed max-w-md">{t.footer.tagline}</p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-slate-100 transition-colors"
                aria-label={t.footer.socialAria.linkedin}
              >
                <Linkedin className="h-4 w-4 text-slate-700" />
              </a>
              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-slate-100 transition-colors"
                aria-label={t.footer.socialAria.twitter}
              >
                <Twitter className="h-4 w-4 text-slate-700" />
              </a>
              <a
                href="mailto:program@sparklabstaiwan.com"
                className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-slate-100 transition-colors"
                aria-label={t.footer.socialAria.email}
              >
                <Mail className="h-4 w-4 text-slate-700" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium tracking-normal uppercase text-slate-500 mb-5">
              {t.footer.programTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              {t.footer.programLinks.map((link) => {
                const isApplyLink = link.href === "/apply";
                return (
                  <li key={link.href}>
                    <a
                      href={isApplyLink ? GOOGLE_FORM_EXTERNAL_URL : link.href}
                      target={isApplyLink ? "_blank" : undefined}
                      rel={isApplyLink ? "noopener noreferrer" : undefined}
                      className="text-slate-700 hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-medium tracking-normal uppercase text-slate-500 mb-5">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-700">
                <Mail className="h-4 w-4 mt-0.5 text-brand-blue shrink-0" />
                <a
                  href="mailto:program@sparklabstaiwan.com"
                  className="hover:text-slate-900 transition-colors"
                >
                  program@sparklabstaiwan.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-700">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-blue shrink-0" />
                <span>{t.footer.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-700 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-slate-700 transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
