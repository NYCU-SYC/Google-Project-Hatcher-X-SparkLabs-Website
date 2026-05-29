import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * Project Hatcher × SparkLabs Taiwan combined brand lockup.
 * Two colorways per the official brand guideline (page 4 of source .ai):
 * - "white"  → reverse/negative version, designed for dark backgrounds (default)
 * - "color"  → full-color version, designed for white / light backgrounds
 */
export function DualBrandLock({
  className,
  variant = "white",
  compact = false,
}: LogoProps & { variant?: "white" | "color"; compact?: boolean }) {
  const src =
    variant === "color"
      ? "/hatcher-sparklabs-color.png"
      : "/hatcher-sparklabs-white.png";

  // Responsive heights — combined lockup has 4:1 aspect ratio.
  // compact = nav usage (smaller). non-compact = footer/hero usage.
  const heightClasses = compact
    ? "h-7 sm:h-8 md:h-10"
    : "h-10 sm:h-12 md:h-14";

  return (
    <div className={cn("inline-flex items-center", className)}>
      <Image
        src={src}
        alt="Project Hatcher × SparkLabs Taiwan"
        width={2000}
        height={500}
        priority
        className={cn(heightClasses, "w-auto select-none")}
      />
    </div>
  );
}

/**
 * @deprecated kept for backward-compat in case other code still imports it.
 * Returns the combined lockup at compact size.
 */
export function GoogleCloudLogo(props: LogoProps) {
  return <DualBrandLock className={props.className} compact />;
}

/**
 * @deprecated kept for backward-compat. Returns the combined lockup.
 */
export function SparkLabsLogo(props: LogoProps) {
  return <DualBrandLock className={props.className} compact />;
}
