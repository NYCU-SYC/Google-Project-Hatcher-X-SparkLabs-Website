"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Rocket } from "lucide-react";
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
 */

interface MentorEntry {
  name: string;
  title: string;
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
    org: "SparkLabs Taiwan",
    contribution: "Taiwan AI strategy, program vision, founder global expansion",
    photo: "/mentors/edgar-chiu.png",
    initials: "EC",
  },
  {
    name: "Bernard Moon",
    title: "Co-founder & General Partner",
    org: "SparkLabs Group",
    contribution: "AI startup GTM, US market entry, US investor perspective",
    photo: "/mentors/bernard-moon.webp",
    initials: "BM",
  },
  {
    name: "Andrew Chen",
    title: "VP, SparkLabs Taiwan",
    org: "SparkLabs Taiwan",
    contribution: "Practical overseas / US market entry, cohort operations",
    photo: "/mentors/andrew-chen.jpg",
    initials: "AC",
  },
  {
    name: "Tony Ling",
    title: "Global Mentor",
    org: "SparkLabs Group",
    contribution: "Biotech & Healthcare AI fundraising; Silver Lake / Harvard perspective",
    photo: "/mentors/tony-ling.webp",
    initials: "TL",
  },
  {
    name: "KJ",
    title: "Mentor",
    org: "Google",
    contribution: "Google's view on Physical AI; Deep Tech AI startup lens",
    photo: null,
    initials: "KJ",
    isPlaceholder: true,
    todoNote: "TODO: confirm KJ's official title and headshot before production launch",
  },
  {
    name: "Voice Chang",
    title: "Head of Taiwan Startups",
    org: "Google Cloud",
    contribution: "Taiwan AI startup strategy, Google Cloud partnership lead",
    photo: null,
    initials: "VC",
    isPlaceholder: true,
    todoNote: "TODO: replace placeholder with Voice Chang's official headshot",
  },
  {
    name: "Tony",
    title: "Title to be confirmed",
    org: "Google",
    contribution: "To be confirmed",
    photo: null,
    initials: "TO",
    isPlaceholder: true,
    todoNote: "TODO: confirm Tony's official title and headshot before production launch",
  },
  {
    name: "Sunny",
    title: "Title to be confirmed",
    org: "Google",
    contribution: "To be confirmed",
    photo: null,
    initials: "SU",
    isPlaceholder: true,
    todoNote: "TODO: confirm Sunny's official Google title and headshot before production launch",
  },
];

interface SupportEntry {
  icon: typeof Cpu;
  label: string;
  title: string;
  body: string;
  accent: { text: string; bg: string; ring: string };
}

const googleDirectSupport: SupportEntry[] = [
  {
    icon: Cpu,
    label: "Google Direct Support",
    title: "Google Tech Team",
    body: "Direct technical support from Google engineering and Customer Success. Gemini model optimization, infrastructure scalability, production readiness reviews — implementation-level guidance for each selected startup.",
    accent: { text: "text-[#4285F4]", bg: "bg-[#4285F4]/10", ring: "ring-[#4285F4]/20" },
  },
  {
    icon: Rocket,
    label: "Google Direct Support",
    title: "Google Go-to-Market Team",
    body: "Direct access to Google's GTM playbook. US market entry strategy, Google BU partnerships, advertising support, and partnership channels — institutional firepower behind every team's growth motion.",
    accent: { text: "text-[#34A853]", bg: "bg-[#34A853]/10", ring: "ring-[#34A853]/20" },
  },
];

export function Mentors() {
  const { t } = useTranslation();

  return (
    <section id="mentors" className="relative py-20 md:py-24 bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow={t.mentors.eyebrow}
          title={t.mentors.title}
          subtitle={t.mentors.subtitle}
        />

        {/* Featured Mentors */}
        <div className="mt-14">
          <h3 className="text-sm font-bold tracking-[0.14em] uppercase text-slate-900 mb-6 text-center">
            <span className="inline-block border-b-2 border-[#4285F4] pb-1">
              Featured Mentors &amp; Speakers
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
                className="group rounded-2xl border border-slate-200 bg-white p-5 md:p-6 text-center transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
              >
                <div className="mx-auto h-16 w-16 md:h-20 md:w-20 mb-4">
                  {m.photo ? (
                    <div className="relative h-full w-full rounded-full overflow-hidden ring-1 ring-slate-200">
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-full w-full rounded-full bg-slate-100 ring-1 ring-slate-200 grid place-items-center font-display text-base md:text-lg font-semibold text-slate-600">
                      {m.initials}
                    </div>
                  )}
                </div>

                <div className="font-semibold text-sm md:text-[15px] text-slate-900 tracking-tight">
                  {m.name}
                </div>
                <div className="mt-1 text-xs text-slate-600 leading-snug">{m.title}</div>
                <div className="mt-0.5 text-[11px] font-medium text-[#4285F4] tracking-wide">
                  {m.org}
                </div>

                {m.isPlaceholder && (
                  <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                    To be confirmed
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Google Direct Support */}
        <div className="mt-14 md:mt-16">
          <h3 className="text-sm font-bold tracking-[0.14em] uppercase text-slate-900 mb-6 text-center">
            <span className="inline-block border-b-2 border-[#34A853] pb-1">
              Google Direct Support
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {googleDirectSupport.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`rounded-2xl border border-slate-200 bg-white p-7 md:p-8 ring-1 ${s.accent.ring}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-lg ${s.accent.bg}`}
                    >
                      <Icon className={`h-5 w-5 ${s.accent.text}`} strokeWidth={2.2} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-slate-500">
                        {s.label}
                      </div>
                      <div className="mt-1 font-display text-lg md:text-xl font-semibold text-slate-900 tracking-tight">
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

        {/* Pool callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">{t.mentors.poweredBy}</p>
        </div>
      </div>
    </section>
  );
}
