"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslation } from "@/lib/i18n/LanguageProvider";
import { ExternalLink } from "lucide-react";

interface MentorMeta {
  name: string;
  initials: string;
  photo: string | null;
  gradient: string;
  tags: string[];
  linkedin?: string;
}

const mentorMeta: MentorMeta[] = [
  {
    name: "KJ",
    initials: "KJ",
    photo: null,
    gradient: "from-brand-blue to-brand-blue-light",
    tags: ["Physical AI", "Deep Tech"],
  },
  {
    name: "Edgar Chiu",
    initials: "EC",
    photo: "/mentors/edgar-chiu.png",
    gradient: "from-brand-green to-brand-blue",
    tags: ["Taiwan AI", "Program Vision"],
    linkedin: "https://www.linkedin.com/in/edgarchiu",
  },
  {
    name: "Bernard Moon",
    initials: "BM",
    photo: "/mentors/bernard-moon.webp",
    gradient: "from-brand-spark to-brand-spark-glow",
    tags: ["US GTM", "Fundraising"],
  },
  {
    name: "Andrew Chen",
    initials: "AC",
    photo: "/mentors/andrew-chen.jpg",
    gradient: "from-brand-blue-light to-brand-blue",
    tags: ["Overseas Expansion"],
  },
  {
    name: "Tony Ling",
    initials: "TL",
    photo: "/mentors/tony-ling.webp",
    gradient: "from-brand-spark-glow to-yellow-400",
    tags: ["Biotech AI", "Healthcare"],
  },
];

const partnerLogos = [
  "Google",
  "SparkLabs Taiwan",
  "Vertex AI",
  "Gemini",
  "Cloud Run",
  "GKE",
  "Meet Taipei",
  "SparkLabs Group",
  "BigQuery",
  "Firebase",
];

export function Mentors() {
  const { t } = useTranslation();

  return (
    <section id="mentors" className="relative py-28 md:py-36 overflow-hidden">
      <div className="container-tight">
        <SectionHeader
          eyebrow={t.mentors.eyebrow}
          title={t.mentors.title}
          subtitle={t.mentors.subtitle}
        />

        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {mentorMeta.map((mentor, i) => {
            const meta = t.mentors.mentors[i];
            return (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative"
              >
                <div className="relative glass rounded-2xl p-6 h-full flex flex-col transition-all duration-500 group-hover:bg-slate-100/60 group-hover:border-slate-200 group-hover:-translate-y-1">
                  {/* Photo */}
                  <div className="relative mx-auto mb-5 w-fit">
                    <div
                      className={`absolute inset-0 rounded-full blur-md opacity-50 bg-gradient-to-br ${mentor.gradient}`}
                    />
                    {mentor.photo ? (
                      <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-slate-200">
                        <Image
                          src={mentor.photo}
                          alt={mentor.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`relative h-20 w-20 rounded-full bg-gradient-to-br ${mentor.gradient} grid place-items-center font-display text-lg font-bold text-slate-900 border-2 border-slate-200`}
                      >
                        {mentor.initials}
                      </div>
                    )}
                  </div>

                  {/* Name + role */}
                  <div className="text-center flex-1 space-y-1.5">
                    <div className="text-sm md:text-base font-semibold text-slate-900 tracking-tight">
                      {mentor.name}
                    </div>
                    <div className="text-xs text-slate-600 leading-snug">{meta.title}</div>
                    <div className="text-[11px] text-brand-blue font-medium tracking-wide">
                      {meta.org}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5 justify-center">
                    {mentor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100/60 border border-slate-200 text-slate-700 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Contribution tooltip on hover */}
                  <div className="absolute inset-x-3 -bottom-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="text-[11px] leading-snug text-slate-700 bg-white/95 border border-slate-200 rounded-lg px-3 py-2 shadow-xl">
                      {meta.contribution}
                    </div>
                  </div>
                </div>

                {mentor.linkedin && (
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 z-10 grid h-6 w-6 place-items-center rounded-full bg-slate-100/60 hover:bg-slate-100 border border-slate-200 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label={`${mentor.name} LinkedIn`}
                  >
                    <ExternalLink className="h-3 w-3 text-slate-700" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://www.sparklabstaiwan.com/about/people"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-blue transition-colors"
          >
            View full SparkLabs mentor pool
            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <p className="text-center text-xs font-medium tracking-[0.25em] uppercase text-slate-500 mb-10">
            {t.mentors.poweredBy}
          </p>

          <div className="relative overflow-hidden mask-fade-x py-2">
            <div className="flex gap-14 md:gap-20 animate-marquee whitespace-nowrap">
              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <div
                  key={`${logo}-${i}`}
                  className="text-base md:text-lg font-medium text-slate-500/70 shrink-0 tracking-tight"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .mask-fade-x {
          mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
        }
      `}</style>
    </section>
  );
}
