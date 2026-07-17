"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageProvider";

const previewMentors = [
  { name: "Steve", photo: "/mentors/steve-chen.jpg", position: "50% 15%" },
  { name: "Tina", photo: "/mentors/tina-lin-headshot.png", position: "50% 15%" },
  { name: "Jason", photo: "/mentors/jason-wang.jpg" },
  { name: "Melody", photo: "/mentors/melody-koh.png" },
  { name: "Alice", photo: "/mentors/alice-chang-headshot.jpg" },
];

export function MentorPreviewLink() {
  const { t } = useTranslation();

  return (
    <a
      href="#mentors"
      className="group mx-auto mt-6 grid w-full max-w-4xl gap-5 rounded-lg border border-slate-200 bg-slate-50/80 px-5 py-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4285F4]/35 hover:bg-[#F7FAFF] hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-6"
    >
      <div className="flex items-start justify-center gap-1.5 sm:justify-start">
        {previewMentors.map((mentor) => (
          <div key={mentor.name} className="flex w-11 flex-col items-center gap-1.5 sm:w-12">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-sm ring-1 ring-slate-200 sm:h-11 sm:w-11">
              <Image
                src={mentor.photo}
                alt={mentor.name}
                fill
                sizes="44px"
                className="object-cover"
                style={{ objectPosition: mentor.position ?? "center" }}
              />
            </div>
            <span className="w-full truncate text-center text-[9px] font-semibold leading-none text-slate-500 sm:text-[10px]">
              {mentor.name}
            </span>
          </div>
        ))}
      </div>

      <div className="min-w-0 text-center sm:text-left">
        <div className="font-display text-base font-semibold leading-snug text-slate-900 sm:text-lg">
          {t.heroHighlights.mentorPreview}
        </div>
        <div className="mt-1 text-sm font-semibold text-[#1A73E8]">
          {t.heroHighlights.mentorPreviewCta}
        </div>
      </div>

      <span className="mx-auto grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#1A73E8] ring-1 ring-slate-200 transition-transform group-hover:translate-y-0.5 sm:mx-0">
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      </span>
    </a>
  );
}
