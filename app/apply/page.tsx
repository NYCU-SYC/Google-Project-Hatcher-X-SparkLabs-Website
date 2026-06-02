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
    title: "立即申請｜Google × SparkLabs Taiwan AI 加速器",
    description:
      "申請 Google × SparkLabs Taiwan AI 加速器。7 月 26 日截止，僅精選 15 家團隊。免費申請，不交換股權。",
  },
  en: {
    title: "Apply | Google × SparkLabs Taiwan AI Accelerator",
    description:
      "Apply to Google × SparkLabs Taiwan AI Accelerator. Application deadline: July 26. Only 15 spots. Free to apply, no equity taken.",
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
