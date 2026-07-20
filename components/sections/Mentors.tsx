"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
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

const mentorLineup: MentorEntry[] = [
  {
    name: "Steve Chen",
    title: "Co-founder",
    titleZh: "共同創辦人",
    org: "YouTube",
    photo: "/mentors/steve-chen.jpg",
    initials: "SC",
    objectPosition: "50% 15%",
  },
  {
    name: "Alice Chang",
    title: "Founder & CEO",
    titleZh: "創辦人暨執行長",
    org: "Perfect Corp.",
    orgZh: "玩美移動",
    photo: "/mentors/alice-chang-headshot.jpg",
    initials: "AC",
  },
  {
    name: "Tina Lin",
    title: "Managing Director Sales & Operations at Google",
    titleZh: "銷售與營運總經理",
    org: "Google Taiwan",
    orgZh: "Google 台灣",
    photo: "/mentors/tina-lin-headshot.png",
    initials: "TL",
    objectPosition: "50% 15%",
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
    title: "Venture Partner",
    titleZh: "創投合夥人",
    org: "SparkLabs Taiwan",
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

const featuredMentorNames = [
  "Steve Chen",
  "Tina Lin",
  "Jason Wang",
  "Melody Koh",
  "Alice Chang",
];
function MentorAvatar({
  mentor,
  locale,
  className,
  sizes,
}: {
  mentor: MentorEntry;
  locale: "en" | "zh";
  className: string;
  sizes: string;
}) {
  if (!mentor.photo) {
    return (
      <div
        className={`grid place-items-center rounded-full bg-slate-100 font-display font-semibold text-slate-600 ring-1 ring-slate-200 ${className}`}
      >
        {mentor.initials}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200 ${className}`}>
      <Image
        src={mentor.photo}
        alt={locale === "zh" ? mentor.nameZh ?? mentor.name : mentor.name}
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: mentor.objectPosition ?? "center" }}
        loading="lazy"
      />
    </div>
  );
}

function MentorDetails({ mentor, locale, featured = false }: { mentor: MentorEntry; locale: "en" | "zh"; featured?: boolean }) {
  const name = locale === "zh" ? mentor.nameZh ?? mentor.name : mentor.name;
  const title = locale === "zh" ? mentor.titleZh ?? mentor.title : mentor.title;
  const org = locale === "zh" ? mentor.orgZh ?? mentor.org : mentor.org;

  return (
    <div>
      <h3 className={featured ? "font-display text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl" : "text-base font-semibold tracking-normal text-slate-900 md:text-lg"}>
        {name}
      </h3>
      <p className={featured ? "mt-3 text-lg font-medium leading-snug text-slate-700 sm:text-xl md:text-2xl" : "mt-1.5 text-sm leading-snug text-slate-600"}>{title}</p>
      {org && <p className={featured ? "mt-2 text-base font-bold leading-snug text-[#1A73E8] sm:text-lg md:text-xl" : "mt-1 text-xs font-medium leading-snug text-[#4285F4]"}>{org}</p>}
    </div>
  );
}

export function Mentors() {
  const { locale, t } = useTranslation();
  const featuredMentors = featuredMentorNames.flatMap((name) => {
    const mentor = mentorLineup.find((entry) => entry.name === name);
    return mentor ? [mentor] : [];
  });
  const [steveChen, ...supportingFeaturedMentors] = featuredMentors;
  return (
    <section id="mentors" className="relative scroll-mt-28 bg-white py-16 md:py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow={t.mentors.eyebrow}
          title={t.mentors.title}
          subtitle={t.mentors.subtitle}
        />

        {steveChen && (
          <div className="mt-12 space-y-5 md:space-y-6">
            <motion.article
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="group relative overflow-hidden rounded-lg bg-[#F1F6FF] ring-1 ring-[#1A73E8]/20 md:col-span-2"
            >
              <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-stretch">
                <div className="relative aspect-square min-h-[250px] overflow-hidden bg-slate-100 sm:min-h-[310px] md:min-h-0">
                  {steveChen.photo && (
                    <Image
                      src={steveChen.photo}
                      alt={steveChen.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: steveChen.objectPosition ?? "center" }}
                      priority
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 md:p-12">
                  <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#174EA6] ring-1 ring-[#1A73E8]/15">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    {t.mentors.featuredLabel}
                  </div>
                  <MentorDetails mentor={steveChen} locale={locale} featured />
                </div>
              </div>
            </motion.article>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 md:gap-6">
              {supportingFeaturedMentors.map((mentor, i) => (
              <motion.article
                key={mentor.name}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4285F4]/35 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  {mentor.photo && (
                    <Image
                      src={mentor.photo}
                      alt={mentor.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: mentor.objectPosition ?? "center" }}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-6 sm:p-7">
                  <MentorDetails mentor={mentor} locale={locale} featured />
                </div>
              </motion.article>
              ))}
            </div>

          </div>
        )}

        <div id="mentor-lineup" className="mt-20 scroll-mt-28 border-t border-slate-200 pt-14 md:mt-24 md:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#1A73E8]/20 bg-[#1A73E8]/[0.045] px-4 py-1.5 text-xs font-bold uppercase tracking-normal text-[#174EA6]">
              <span className="h-2 w-2 rounded-full bg-[#1A73E8]" />
              {t.mentors.fullLineupEyebrow}
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">{t.mentors.fullLineupTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{t.mentors.fullLineupSubtitle}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 items-stretch gap-3 sm:gap-4 md:grid-cols-3">
            {mentorLineup.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative flex h-full flex-col items-center overflow-hidden rounded-lg border border-slate-200 bg-white p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4285F4]/35 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-5 md:px-5 md:py-6"
              >
                <div className="mx-auto mb-4 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32">
                  <MentorAvatar mentor={mentor} locale={locale} className="h-full w-full text-lg md:text-xl" sizes="(min-width: 1024px) 128px, (min-width: 768px) 112px, (min-width: 640px) 96px, 80px" />
                </div>
                <MentorDetails mentor={mentor} locale={locale} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
