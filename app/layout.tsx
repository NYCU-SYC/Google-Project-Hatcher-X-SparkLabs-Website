import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Sora, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/translations";

const SITE_URL = "https://project-hatcher.sparklabstaiwan.com";
const SITE_NAME = "Project Hatcher x SparkLabs Taiwan";
const SOCIAL_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Project Hatcher x SparkLabs Taiwan | Google Cloud AI Startup Accelerator",
};

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
    title: "Project Hatcher x SparkLabs Taiwan｜Google Cloud AI 新創加速器與競賽",
    description:
      "Project Hatcher x SparkLabs Taiwan 是 Google Cloud Taiwan 與 SparkLabs Taiwan 合作的 AI 新創加速器與創業競賽，聚焦台灣早期 AI、GenAI、LLM、Cloud、Data 與 Developer-focused 新創團隊。",
    openGraph: {
      title:
        "Project Hatcher x SparkLabs Taiwan｜Google Cloud AI Startup Accelerator & Competition",
      description:
        "申請 Project Hatcher x SparkLabs Taiwan，Google Cloud Taiwan 與 SparkLabs Taiwan 合作推動、面向早期 AI、GenAI、LLM、Cloud、Data 新創的加速與競賽計畫。",
      locale: "zh_TW",
    },
    twitter: {
      title:
        "Project Hatcher x SparkLabs Taiwan｜Google Cloud AI Startup Accelerator & Competition",
      description:
        "Google Cloud Taiwan 與 SparkLabs Taiwan 合作推動的 AI 新創加速器與創業競賽。",
    },
  },
  en: {
    title: "Project Hatcher x SparkLabs Taiwan | Google Cloud AI Startup Accelerator",
    description:
      "Project Hatcher x SparkLabs Taiwan is a Google Cloud Taiwan AI startup accelerator and startup competition for early-stage AI, GenAI, LLM, cloud, data, and developer-focused startups in Taiwan.",
    openGraph: {
      title:
        "Project Hatcher x SparkLabs Taiwan | Google Cloud AI Startup Accelerator & Competition",
      description:
        "Apply to Project Hatcher x SparkLabs Taiwan, a Google Cloud Taiwan program for early-stage AI, GenAI, LLM, cloud, data, and developer-focused startups.",
      locale: "en_US",
    },
    twitter: {
      title:
        "Project Hatcher x SparkLabs Taiwan | Google Cloud AI Startup Accelerator & Competition",
      description:
        "A Google Cloud Taiwan AI startup accelerator and competition with SparkLabs Taiwan.",
    },
  },
};

const keywordsByLocale: Record<Locale, string[]> = {
  zh: [
    "Project Hatcher",
    "Google Project Hatcher",
    "SparkLabs Taiwan",
    "Google Cloud Taiwan",
    "台灣 AI 新創加速器",
    "AI 新創",
    "人工智慧新創",
    "生成式 AI",
    "新創競賽",
    "創業加速器",
    "Google Cloud 新創",
    "AI startup competition Taiwan",
    "GenAI startup Taiwan",
    "LLM startup Taiwan",
    "Cloud AI startup",
    "Developer tools startup",
  ],
  en: [
    "Project Hatcher",
    "Google Project Hatcher",
    "SparkLabs Taiwan",
    "Google Cloud Taiwan",
    "Google Cloud AI startup Taiwan",
    "AI startup accelerator Taiwan",
    "AI startup competition",
    "Generative AI startup",
    "GenAI startup",
    "LLM startup",
    "Machine Learning startup",
    "AI Agent startup",
    "Cloud AI",
    "Data startup",
    "Developer tools startup",
    "Pre-seed startup",
    "Seed startup",
    "Pre-Series A startup",
  ],
};

function getRequestLocale(): Locale {
  const locale = cookies().get("preferred-locale")?.value;
  return locale === "zh" || locale === "en" ? locale : "en";
}

function getStructuredData(locale: Locale, metadata: Metadata) {
  const inLanguage = locale === "zh" ? "zh-Hant" : "en";
  const description =
    typeof metadata.description === "string" ? metadata.description : undefined;
  const title = typeof metadata.title === "string" ? metadata.title : SITE_NAME;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "SparkLabs Taiwan",
      url: "https://www.sparklabstaiwan.com/",
      logo: `${SITE_URL}/sparklabs-taiwan-logo.svg`,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: title,
      description,
      inLanguage,
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      about: [
        { "@type": "Thing", name: "Project Hatcher" },
        { "@type": "Thing", name: "Google Cloud Taiwan" },
        { "@type": "Thing", name: "SparkLabs Taiwan" },
        { "@type": "Thing", name: "AI startup accelerator" },
        { "@type": "Thing", name: "Startup competition" },
      ],
    },
  ];
}

export function generateMetadata(): Metadata {
  const locale = getRequestLocale();
  const metadata = metadataByLocale[locale];

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    creator: "SparkLabs Taiwan",
    publisher: "SparkLabs Taiwan",
    ...metadata,
    keywords: keywordsByLocale[locale],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [{ url: "/icon", type: "image/png", sizes: "512x512" }],
      shortcut: ["/icon"],
      apple: [{ url: "/icon", type: "image/png", sizes: "512x512" }],
    },
    openGraph: {
      ...metadata.openGraph,
      url: SITE_URL,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getRequestLocale();
  const structuredData = getStructuredData(locale, metadataByLocale[locale]);

  return (
    <html
      lang={locale === "zh" ? "zh-Hant" : "en"}
      className={`${inter.variable} ${sora.variable} ${notoTC.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider initialLocale={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
