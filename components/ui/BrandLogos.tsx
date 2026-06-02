import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * Project Hatcher × SparkLabs Taiwan combined brand lockup.
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

  // compact (nav):  h-9  (36) → h-10 (40) → h-12 (48)
  // footer:         h-12 (48) → h-14 (56) → h-16 (64)
  const heightClasses = compact
    ? "h-9 sm:h-10 md:h-12"
    : "h-12 sm:h-14 md:h-16";

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

/** @deprecated retained for backward-compat with older imports. */
export function GoogleCloudLogo(props: LogoProps) {
  return <DualBrandLock className={props.className} compact />;
}

/** @deprecated retained for backward-compat. */
export function SparkLabsLogo(props: LogoProps) {
  return <DualBrandLock className={props.className} compact />;
}
