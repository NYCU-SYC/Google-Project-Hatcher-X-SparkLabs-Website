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

const SITE_NAME = "Project Hatcher x SparkLabs Taiwan";
const SOCIAL_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Project Hatcher x SparkLabs Taiwan | Google Cloud AI Startup Accelerator",
};

const applyMetadataByLocale: Record<Locale, Metadata> = {
  zh: {
    title: "立即申請 Project Hatcher x SparkLabs Taiwan｜Google Cloud AI 新創加速器",
    description:
      "申請 Project Hatcher x SparkLabs Taiwan，Google Cloud Taiwan 與 SparkLabs Taiwan 合作推動的 AI 新創加速器與創業競賽。7 月 26 日截止，精選 15 家 AI 新創。",
    openGraph: {
      title: "Apply to Project Hatcher x SparkLabs Taiwan",
      description:
        "申請 Google Cloud Taiwan 與 SparkLabs Taiwan 合作推動、面向早期 AI 新創的加速與競賽計畫。",
      locale: "zh_TW",
    },
    twitter: {
      title: "Apply to Project Hatcher x SparkLabs Taiwan",
      description: "Google Cloud Taiwan AI 新創加速器與創業競賽，7 月 26 日截止。",
    },
  },
  en: {
    title: "Apply to Project Hatcher x SparkLabs Taiwan | Google Cloud AI Startup Accelerator",
    description:
      "Apply to Project Hatcher x SparkLabs Taiwan, a Google Cloud Taiwan AI startup accelerator and startup competition for early-stage AI, GenAI, LLM, cloud, data, and developer-focused startups.",
    openGraph: {
      title: "Apply to Project Hatcher x SparkLabs Taiwan",
      description:
        "A Google Cloud Taiwan AI startup accelerator and competition with SparkLabs Taiwan for early-stage AI, GenAI, LLM, cloud, data, and developer-focused startups.",
      locale: "en_US",
    },
    twitter: {
      title: "Apply to Project Hatcher x SparkLabs Taiwan",
      description:
        "Google Cloud Taiwan AI startup accelerator and competition with SparkLabs Taiwan. Apply by July 26.",
    },
  },
};

export function generateMetadata(): Metadata {
  const locale = cookies().get("preferred-locale")?.value;
  const metadata = applyMetadataByLocale[locale === "zh" ? "zh" : "en"];

  return {
    ...metadata,
    alternates: {
      canonical: "/apply",
    },
    openGraph: {
      ...metadata.openGraph,
      url: "/apply",
      siteName: SITE_NAME,
      type: "website",
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      ...metadata.twitter,
      images: [SOCIAL_IMAGE.url],
    },
  };
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
