import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ApplyHeader } from "@/components/sections/apply/ApplyHeader";
import { EligibilityChecker } from "@/components/sections/apply/EligibilityChecker";
import { PrepareList } from "@/components/sections/apply/PrepareList";
import { ApplyForm } from "@/components/sections/apply/ApplyForm";
import { Reassurance } from "@/components/sections/apply/Reassurance";
import { FAQReminderLink } from "@/components/sections/apply/FAQReminderLink";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import type { Locale } from "@/lib/i18n/translations";

const applyMetadataByLocale: Record<Locale, Metadata> = {
  zh: {
    title: "立即申請｜Google Cloud × SparkLabs Taiwan AI Accelerator",
    description:
      "申請 Google Cloud × SparkLabs Taiwan AI Accelerator。7 月 26 日截止，精選 15 家 AI 新創。免費申請，不交換股權。",
    openGraph: {
      title: "立即申請｜Google Cloud × SparkLabs Taiwan AI Accelerator",
      description:
        "申請 12 週、不交換股權的 AI 新創加速器計畫。7 月 26 日截止。",
      locale: "zh_TW",
    },
    twitter: {
      title: "立即申請｜Google Cloud × SparkLabs Taiwan AI Accelerator",
      description: "免費申請，不交換股權。7 月 26 日截止。",
    },
  },
  en: {
    title: "Apply | Google Cloud × SparkLabs Taiwan AI Accelerator",
    description:
      "Apply to the Google Cloud × SparkLabs Taiwan AI Accelerator. Application deadline: July 26. 15 selected AI startups. Free to apply, equity-free.",
    openGraph: {
      title: "Apply | Google Cloud × SparkLabs Taiwan AI Accelerator",
      description:
        "A 12-week, equity-free accelerator for AI founders with global ambition. Apply by July 26.",
      locale: "en_US",
    },
    twitter: {
      title: "Apply | Google Cloud × SparkLabs Taiwan AI Accelerator",
      description: "15 selected AI startups. Free to apply, equity-free.",
    },
  },
};

export function generateMetadata(): Metadata {
  const locale = cookies().get("preferred-locale")?.value;
  return applyMetadataByLocale[locale === "zh" ? "zh" : "en"];
}

export default function ApplyPage() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <AmbientBackground />
      <Navigation />
      <div className="relative z-10">
        <ApplyHeader />
        <EligibilityChecker />
        <PrepareList />
        <ApplyForm />
        <Reassurance />
        <FAQReminderLink />
      </div>
      <Footer />
    </main>
  );
}
