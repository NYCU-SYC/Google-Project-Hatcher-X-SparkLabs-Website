import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Sora, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/translations";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const notoTC = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-tc",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
});

const metadataByLocale: Record<Locale, Metadata> = {
  zh: {
    title: "Google × SparkLabs Taiwan AI 加速器｜從台灣打造世界級 AI 新創",
    description:
      "Google 與 SparkLabs Taiwan 攜手，為 AI-native 創辦人提供 USD 25K Google Cloud Credit、全球導師網絡與 11 月 Global Showcase 舞台。7 月 26 日截止申請。",
    openGraph: {
      title: "Google × SparkLabs Taiwan AI 加速器",
      description: "從台灣打造世界級 AI 新創。7 月 26 日截止申請。",
      locale: "zh_TW",
    },
    twitter: {
      title: "Google × SparkLabs Taiwan AI 加速器",
      description: "從台灣打造世界級 AI 新創。",
    },
  },
  en: {
    title:
      "Google × SparkLabs Taiwan AI Accelerator | Build the next world-class AI company from Taiwan",
    description:
      "Google and SparkLabs Taiwan unite to accelerate AI-native founders with USD 25K Google Cloud Credit, a global mentor network, and a Global Showcase stage in November 2026. Apply by July 26.",
    openGraph: {
      title: "Google × SparkLabs Taiwan AI Accelerator",
      description: "Build the next world-class AI company from Taiwan. Apply by July 26.",
      locale: "en_US",
    },
    twitter: {
      title: "Google × SparkLabs Taiwan AI Accelerator",
      description: "Build the next world-class AI company from Taiwan.",
    },
  },
};

function getRequestLocale(): Locale {
  const locale = cookies().get("preferred-locale")?.value;
  return locale === "zh" || locale === "en" ? locale : "en";
}

export function generateMetadata(): Metadata {
  const locale = getRequestLocale();
  const metadata = metadataByLocale[locale];

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "https://sparklabs-google-ai.tw"
    ),
    ...metadata,
    keywords: [
      "AI Accelerator Taiwan",
      "Google Cloud Startup",
      "SparkLabs Taiwan",
      "Vertex AI",
      "Gemini",
      "Frontier AI",
      "Biotech AI",
      "Deep Tech AI",
      "Seed Series A AI",
      "台灣 AI 加速器",
      "AI 新創",
    ],
    openGraph: {
      ...metadata.openGraph,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      ...metadata.twitter,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getRequestLocale();

  return (
    <html
      lang={locale === "zh" ? "zh-Hant" : "en"}
      className={`${inter.variable} ${sora.variable} ${notoTC.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
