import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * Google Cloud × SparkLabs Taiwan AI Accelerator combined brand lockup.
 * Light theme uses the dark-text colorway with colored Project bubble,
 * Google 4-color subtext, and spark icon — same dimensions as the dark
 * theme reverse variant so layout sizing stays parallel.
 *
 *   "light"  → dark text + colors, transparent bg. Use on white surfaces.
 *   "white"  → reverse/negative, white-on-transparent. Use on dark surfaces.
 *   "color"  → original page 1 with baked-in white background (legacy).
 */
export function DualBrandLock({
  className,
  variant = "light",
  compact = false,
}: LogoProps & { variant?: "light" | "white" | "color"; compact?: boolean }) {
  const src =
    variant === "white"
      ? "/hatcher-sparklabs-mixed-v9.png"
      : variant === "color"
      ? "/hatcher-sparklabs-color.png"
      : "/hatcher-sparklabs-light.png";

  const heightClasses = compact
    ? "h-8 sm:h-9 md:h-10"
    : "h-11 sm:h-12 md:h-14";

  return (
    <div className={cn("inline-flex items-center", className)}>
      <Image
        src={src}
        alt="Google Cloud × SparkLabs Taiwan AI Accelerator"
        width={2000}
        height={500}
        priority
        className={cn(heightClasses, "w-auto select-none")}
      />
    </div>
  );
}

/** @deprecated retained for backward-compat with older imports. */
export function GoogleCloudLogo(props: LogoProps) {
  return <DualBrandLock className={props.className} compact />;
}

/** @deprecated retained for backward-compat. */
export function SparkLabsLogo(props: LogoProps) {
  return <DualBrandLock className={props.className} compact />;
}
