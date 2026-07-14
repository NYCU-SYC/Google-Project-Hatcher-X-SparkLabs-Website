"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

interface MentorEntry {
  name: string;
  nameZh?: string;
  title: string;
  titleZh?: string;
  org: string;
  orgZh?: string;
  photo: string | null;
  initials: string;
  /** object-position for the avatar crop (default: center). Use "top" when
   * a portrait's subject sits high in the frame and center-crop clips the head. */
  objectPosition?: string;
}

const featuredMentors: MentorEntry[] = [
  {
    name: "Steve Chen",
    title: "Co-founder",
    titleZh: "共同創辦人",
    org: "YouTube",
    photo: "/mentors/steve-chen.jpg",
    initials: "SC",
    objectPosition: "50% 28%",
  },
  {
    name: "Alice Chang",
    title: "Founder",
    titleZh: "創辦人",
    org: "Perfect Corp.",
    orgZh: "玩美移動",
    photo: "/mentors/alice-chang-headshot.jpg",
    initials: "AC",
  },
  {
    name: "Tina Lin",
    title: "General Manager",
    titleZh: "總經理",
    org: "Google Taiwan",
    orgZh: "Google 台灣",
    photo: null,
    initials: "TL",
  },
  {
    name: "KJ Wu",
    title: "Head of Startup Customer Engineering, Greater China",
    titleZh: "大中華區新創客戶工程負責人",
    org: "Google Cloud",
    photo: "/mentors/kj-wu-headshot.png",
    initials: "KW",
  },
  {
    name: "Voice Chang",
    title: "Head of Taiwan Startups",
    titleZh: "台灣新創業務負責人",
    org: "Google Cloud",
    photo: "/mentors/voice-chang-headshot.jpg",
    initials: "VC",
  },
  {
    name: "Tony Lee",
    title: "Healthcare Industry Lead",
    titleZh: "醫療產業負責人",
    org: "Google APAC Top Partner Team",
    photo: "/mentors/tony-lee-headshot.jpg",
    initials: "TL",
  },
  {
    name: "Edgar Chiu",
    title: "Founder",
    titleZh: "創辦人",
    org: "SparkLabs Taiwan",
    photo: "/mentors/edgar-chiu.png",
    initials: "EC",
  },
  {
    name: "Bernard Moon",
    title: "Co-founder",
    titleZh: "共同創辦人",
    org: "SparkLabs Group",
    photo: "/mentors/bernard-moon.webp",
    initials: "BM",
  },
  {
    name: "Andrew Chen",
    title: "Entrepreneur & Investor",
    titleZh: "創業家與投資人",
    org: "",
    photo: "/mentors/andrew-chen.jpg",
    initials: "AC",
  },
  {
    name: "Melody Koh",
    title: "Partner",
    titleZh: "創投基金合夥人",
    org: "NextView Ventures",
    orgZh: "美國 NextView Ventures",
    photo: "/mentors/melody-koh.png",
    initials: "MK",
  },
  {
    name: "Jason Wang",
    title: "Professor of Pediatrics & Health Policy",
    titleZh: "兒科與健康政策教授",
    org: "Stanford University School of Medicine",
    orgZh: "史丹佛大學醫學院",
    photo: "/mentors/jason-wang.jpg",
    initials: "JW",
  },
];

export function Mentors() {
  const { locale, t } = useTranslation();

  return (
    <section id="mentors" className="relative scroll-mt-28 bg-white py-16 md:py-20">
      <div className="container-wide">
        <SectionHeader
          eyebrow={t.mentors.eyebrow}
          title={t.mentors.title}
          subtitle={t.mentors.subtitle}
        />

        <motion.p
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto mt-10 max-w-5xl border-y border-slate-200 py-6 text-center text-base font-medium leading-relaxed text-slate-700 sm:px-6 md:text-lg"
        >
          {t.mentors.mentorIntro}
        </motion.p>

        <div className="mt-10">
          <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-5">
            {featuredMentors.map((m, i) => (
              <motion.div
                key={m.name}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm sm:p-5 md:p-6"
              >
                <div className="mx-auto mb-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                  {m.photo ? (
                    <div className="relative h-full w-full rounded-full overflow-hidden ring-1 ring-slate-200">
                      <Image
                        src={m.photo}
                        alt={locale === "zh" ? m.nameZh ?? m.name : m.name}
                        fill
                        sizes="(min-width: 1024px) 96px, (min-width: 640px) 80px, 64px"
                        className="object-cover"
                        style={{ objectPosition: m.objectPosition ?? "center" }}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="h-full w-full rounded-full bg-slate-100 ring-1 ring-slate-200 grid place-items-center font-display text-base md:text-lg font-semibold text-slate-600">
                      {m.initials}
                    </div>
                  )}
                </div>

                <div className="flex min-h-[5.5rem] flex-1 flex-col items-center">
                  <div className="font-semibold text-sm text-slate-900 tracking-normal md:text-[15px]">
                    {locale === "zh" ? m.nameZh ?? m.name : m.name}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-slate-600">
                    {locale === "zh" ? m.titleZh ?? m.title : m.title}
                  </div>
                  {m.org && (
                    <div className="mt-1 text-[11px] font-medium leading-snug text-[#4285F4] tracking-normal">
                      {locale === "zh" ? m.orgZh ?? m.org : m.org}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
