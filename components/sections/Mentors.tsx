"use client";

import { motion } from "framer-motion";
import { Cpu, Globe2, Network, Rocket, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

/**
 * Mentors & Google Direct Support
 *
 * Two stacked subsections so visitors immediately understand WHO
 * supports them:
 *
 *   1. Featured Mentors — individuals with photo / initials avatars.
 *      Some entries are confirmed (real photo from SparkLabs Taiwan),
 *      some are placeholders with TODO notes for the program team to
 *      replace before public launch.
 *
 *   2. Google Direct Support — institutional cards for the Google Tech
 *      Team and Google Go-to-Market Team. These are not individual
 *      mentors but full Google teams that plug into each selected
 *      startup.
 *
 *   3. SparkLabs Global Network — three institutional cards that show
 *      the cross-border mentor, market, and expansion support.
 */

interface MentorEntry {
  name: string;
  title: string;
  titleZh?: string;
  org: string;
  contribution: string;
  photo: string | null;
  initials: string;
  isPlaceholder?: boolean;
  todoNote?: string;
}

const featuredMentors: MentorEntry[] = [
  {
    name: "Edgar Chiu",
    title: "Founding Partner",
    titleZh: "創始合夥人",
    org: "SparkLabs Taiwan",
    contribution: "Taiwan AI strategy, program vision, founder global expansion",
    photo: "/mentors/edgar-chiu.png",
    initials: "EC",
  },
  {
    name: "Bernard Moon",
    title: "Co-founder & General Partner",
    titleZh: "共同創辦人兼合夥人",
    org: "SparkLabs Group",
    contribution: "AI startup GTM, US market entry, US investor perspective",
    photo: "/mentors/bernard-moon.webp",
    initials: "BM",
  },
  {
    name: "Andrew Chen",
    title: "Managing Partner",
    titleZh: "管理合夥人",
    org: "Hickory Falls Ventures",
    contribution: "Venture investing, founder scaling, cross-border GTM",
    photo: "/mentors/andrew-chen.jpg",
    initials: "AC",
  },
  {
    name: "Tony Ling",
    title: "Venture Partner",
    titleZh: "創投合夥人",
    org: "SparkLabs Group",
    contribution: "Biotech & Healthcare AI fundraising; Silver Lake / Harvard perspective",
    photo: "/mentors/tony-ling.webp",
    initials: "TL",
  },
  {
    name: "KJ",
    title: "Google Cloud Mentor",
    titleZh: "Google Cloud 導師",
    org: "Google",
    contribution: "Google's view on Physical AI; Deep Tech AI startup lens",
    photo: null,
    initials: "KJ",
  },
  {
    name: "Voice Chang",
    title: "Head of Taiwan Startups",
    titleZh: "台灣新創業務負責人",
    org: "Google Cloud",
    contribution: "Taiwan AI startup strategy, Google Cloud partnership lead",
    photo: null,
    initials: "VC",
  },
  {
    name: "Tony",
    title: "Google Cloud Mentor",
    titleZh: "Google Cloud 導師",
    org: "Google",
    contribution: "Google Cloud startup support and GTM guidance",
    photo: null,
    initials: "TO",
  },
  {
    name: "Sunny",
    title: "Google Cloud Mentor",
    titleZh: "Google Cloud 導師",
    org: "Google",
    contribution: "Google Cloud startup support and technical guidance",
    photo: null,
    initials: "SU",
  },
];

interface SupportMeta {
  icon: typeof Cpu;
  accent: { text: string; bg: string; ring: string };
}

const googleDirectSupportMeta: SupportMeta[] = [
  {
    icon: Cpu,
    accent: { text: "text-[#4285F4]", bg: "bg-[#4285F4]/10", ring: "ring-[#4285F4]/20" },
  },
  {
    icon: Rocket,
    accent: { text: "text-[#34A853]", bg: "bg-[#34A853]/10", ring: "ring-[#34A853]/20" },
  },
];

const sparkLabsNetworkMeta: SupportMeta[] = [
  {
    icon: Globe2,
    accent: { text: "text-[#4285F4]", bg: "bg-[#4285F4]/10", ring: "ring-[#4285F4]/20" },
  },
  {
    icon: Network,
    accent: { text: "text-[#EA4335]", bg: "bg-[#EA4335]/10", ring: "ring-[#EA4335]/20" },
  },
  {
    icon: Users,
    accent: { text: "text-[#34A853]", bg: "bg-[#34A853]/10", ring: "ring-[#34A853]/20" },
  },
];

export function Mentors() {
  const { locale, t } = useTranslation();

  return (
    <section id="mentors" className="relative py-16 md:py-20 bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow={t.mentors.eyebrow}
          title={t.mentors.title}
          subtitle={t.mentors.subtitle}
        />

        {/* Featured Mentors */}
        <div className="mt-14">
          <h3 className="mb-6 text-center text-sm font-bold tracking-normal uppercase text-slate-900 md:text-base">
            <span className="inline-block border-b-2 border-[#4285F4] pb-1">
              {t.mentors.featuredTitle}
            </span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {featuredMentors.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group rounded-lg border border-slate-200 bg-white p-5 md:p-6 text-center transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
              >
                <div className="mx-auto h-16 w-16 md:h-20 md:w-20 mb-4">
                  {m.photo ? (
                    <div className="relative h-full w-full rounded-full overflow-hidden ring-1 ring-slate-200">
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="h-full w-full rounded-full bg-slate-100 ring-1 ring-slate-200 grid place-items-center font-display text-base md:text-lg font-semibold text-slate-600">
                      {m.initials}
                    </div>
                  )}
                </div>

                <div className="font-semibold text-sm md:text-[15px] text-slate-900 tracking-normal">
                  {m.name}
                </div>
                <div className="mt-1 text-xs text-slate-600 leading-snug">
                  {locale === "zh" ? m.titleZh ?? m.title : m.title}
                </div>
                <div className="mt-0.5 text-[11px] font-medium text-[#4285F4] tracking-normal">
                  {m.org}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Google Direct Support */}
        <div className="mt-14 md:mt-16">
          <h3 className="mb-6 text-center text-sm font-bold tracking-normal uppercase text-slate-900 md:text-base">
            <span className="inline-block border-b-2 border-[#34A853] pb-1">
              {t.mentors.googleSupportTitle}
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {t.mentors.directSupport.map((s, i) => {
              const meta = googleDirectSupportMeta[i];
              const Icon = meta.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`rounded-lg border border-slate-200 bg-white p-6 md:p-7 ring-1 ${meta.accent.ring}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-lg ${meta.accent.bg}`}
                    >
                      <Icon className={`h-5 w-5 ${meta.accent.text}`} strokeWidth={2.2} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold tracking-normal uppercase text-slate-500">
                        {s.label}
                      </div>
                      <div className="mt-1 font-display text-lg md:text-xl font-semibold text-slate-900 tracking-normal">
                        {s.title}
                      </div>
                      <p className="mt-2.5 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SparkLabs Global Network */}
        <div className="mt-14 md:mt-16">
          <h3 className="mb-6 text-center text-sm font-bold tracking-normal uppercase text-slate-900 md:text-base">
            <span className="inline-block border-b-2 border-[#EA4335] pb-1">
              {t.mentors.sparkLabsNetwork.label}
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {t.mentors.sparkLabsNetwork.points.map((point, i) => {
              const meta = sparkLabsNetworkMeta[i] ?? sparkLabsNetworkMeta[0];
              const Icon = meta.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`rounded-lg border border-slate-200 bg-white p-6 md:p-7 ring-1 ${meta.accent.ring}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-lg ${meta.accent.bg}`}
                    >
                      <Icon className={`h-5 w-5 ${meta.accent.text}`} strokeWidth={2.2} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold tracking-normal uppercase text-slate-500">
                        {t.mentors.sparkLabsNetwork.label}
                      </div>
                      <div className="mt-1 font-display text-lg md:text-xl font-semibold text-slate-900 tracking-normal">
                        {point.title}
                      </div>
                      <p className="mt-2.5 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                        {point.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
