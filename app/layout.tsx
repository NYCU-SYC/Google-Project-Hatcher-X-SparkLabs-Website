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
    title: "Google Cloud × SparkLabs Taiwan AI Accelerator｜為有全球企圖的 AI 創辦人而設",
    description:
      "由 Google Cloud 與 SparkLabs Taiwan 共同推動的 12 週、不交換股權 AI 加速器計畫，協助 AI 新創強化技術、加快成長並拓展國際市場。",
    openGraph: {
      title: "Google Cloud × SparkLabs Taiwan AI Accelerator",
      description: "為有全球企圖的 AI 創辦人而設。7 月 26 日截止申請。",
      locale: "zh_TW",
    },
    twitter: {
      title: "Google Cloud × SparkLabs Taiwan AI Accelerator",
      description: "為有全球企圖的 AI 創辦人而設。",
    },
  },
  en: {
    title:
      "Google Cloud × SparkLabs Taiwan AI Accelerator | Built for AI founders with global ambition",
    description:
      "A 12-week equity-free accelerator powered by Google Cloud and SparkLabs Taiwan, helping AI startups strengthen technology, accelerate growth, and scale globally.",
    openGraph: {
      title: "Google Cloud × SparkLabs Taiwan AI Accelerator",
      description: "Built for AI founders with global ambition. Apply by July 26.",
      locale: "en_US",
    },
    twitter: {
      title: "Google Cloud × SparkLabs Taiwan AI Accelerator",
      description: "Built for AI founders with global ambition.",
    },
  },
};

const keywordsByLocale: Record<Locale, string[]> = {
  zh: [
    "台灣 AI 加速器",
    "AI 新創",
    "Google Cloud Startup",
    "SparkLabs Taiwan",
    "Gemini Enterprise Agent Platform",
    "Gemini models API",
    "Frontier AI",
    "Biotech AI",
    "Deep Tech AI",
    "Seed Series A AI",
  ],
  en: [
    "AI Accelerator Taiwan",
    "Google Cloud Startup",
    "SparkLabs Taiwan",
    "Gemini Enterprise Agent Platform",
    "Gemini models API",
    "Frontier AI",
    "Biotech AI",
    "Deep Tech AI",
    "Seed Series A AI",
  ],
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
    keywords: keywordsByLocale[locale],
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
        <LanguageProvider initialLocale={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
