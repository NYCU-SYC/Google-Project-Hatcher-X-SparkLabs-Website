import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function GoogleCloudLogo({ className }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center", className)}>
      {/* Official Google Cloud logo (dark-bg version: 4-color "Google" + white "Cloud") */}
      <Image
        src="/google-cloud-logo-dark.svg"
        alt="Google Cloud"
        width={181}
        height={28}
        priority
        className="h-5 sm:h-6 w-auto"
      />
    </div>
  );
}

export function SparkLabsLogo({ className }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center", className)}>
      {/* White-text + colored sparks SVG — designed for dark backgrounds */}
      <Image
        src="/sparklabs-taiwan-logo.svg"
        alt="SparkLabs Taiwan"
        width={150}
        height={40}
        priority
        className="h-5 sm:h-7 w-auto"
      />
    </div>
  );
}

export function DualBrandLock({ className, compact = false }: LogoProps & { compact?: boolean }) {
  return (
    <div className={cn("inline-flex items-center gap-2 sm:gap-3.5 md:gap-4", className)}>
      <GoogleCloudLogo />
      <span
        className={cn(
          "text-slate-600 font-light leading-none",
          compact ? "text-sm sm:text-base" : "text-base sm:text-lg"
        )}
      >
        ×
      </span>
      <SparkLabsLogo />
    </div>
  );
}
