import type { Metadata } from "next";
import { Inter, Sora, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sparklabs-google-ai.tw"
  ),
  title:
    "Google × SparkLabs Taiwan AI Accelerator | Build the next world-class AI company from Taiwan",
  description:
    "Google and SparkLabs Taiwan unite to accelerate AI-native founders with USD 25K Google Cloud Credit, global mentor network, and a Global Showcase stage in November 2026. Apply by July 26.",
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
    title: "Google × SparkLabs Taiwan AI Accelerator",
    description: "Build the next world-class AI company from Taiwan. Apply by July 26.",
    type: "website",
    locale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google × SparkLabs Taiwan AI Accelerator",
    description: "Build the next world-class AI company from Taiwan.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-Hant"
      className={`${inter.variable} ${sora.variable} ${notoTC.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
