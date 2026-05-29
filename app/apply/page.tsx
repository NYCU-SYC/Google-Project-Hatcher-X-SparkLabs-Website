import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ApplyHeader } from "@/components/sections/apply/ApplyHeader";
import { EligibilityChecker } from "@/components/sections/apply/EligibilityChecker";
import { PrepareList } from "@/components/sections/apply/PrepareList";
import { ApplyForm } from "@/components/sections/apply/ApplyForm";
import { Reassurance } from "@/components/sections/apply/Reassurance";
import { FAQReminderLink } from "@/components/sections/apply/FAQReminderLink";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

export const metadata: Metadata = {
  title: "Apply | Google × SparkLabs Taiwan AI Accelerator",
  description:
    "Apply to Google × SparkLabs Taiwan AI Accelerator. Application deadline: July 26. Only 10 spots. Free to apply, no equity taken.",
};

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
