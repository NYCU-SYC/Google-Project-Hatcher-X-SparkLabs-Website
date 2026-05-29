import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * Project Hatcher × SparkLabs Taiwan combined brand lockup.
 * Two colorways per the official brand guideline (page 4 of source .ai):
 * - "color"  → full-color version (page 1). Has built-in white background;
 *             rendered as a white tile with rounded corners + soft shadow
 *             so it reads as an intentional partner badge on dark surfaces.
 * - "white"  → reverse/negative version (page 3), transparent white logo
 *             for direct overlay on dark backgrounds. Kept as an option.
 */
export function DualBrandLock({
  className,
  variant = "white",
  compact = false,
}: LogoProps & { variant?: "white" | "color"; compact?: boolean }) {
  // -v3 = -v2 cropped tight to actual content (1637 × 284, was 2000 × 500).
  // Source PDF artwork had ~48% vertical whitespace and ~20% horizontal
  // baked-in safe area, making every display height look ~half the
  // effective logo size. v3 has 12 px V / 20 px H breathing only —
  // display heights can be ~1.76x smaller for the same visible mark size.
  const src =
    variant === "white"
      ? "/hatcher-sparklabs-white-v3.png"
      : "/hatcher-sparklabs-color.png";

  // With v3's tight crop, modest display heights yield large visible marks.
  // Sizes chosen so pill height returns to comfortable 52-72 px range
  // (matches the very original nav feel) while keeping visible content at
  // ~33-44 px — equivalent to the v2 + h-14/16/20 setting the stakeholder
  // approved on size, before complaining the bar grew too thick.
  //
  // compact (nav):  h-9 (36) → h-10 (40) → h-12 (48)  // content ~33-44 px
  // footer:         h-12 (48) → h-14 (56) → h-16 (64) // anchor mark
  const heightClasses = compact
    ? "h-9 sm:h-10 md:h-12"
    : "h-12 sm:h-14 md:h-16";

  if (variant === "color") {
    // Wrap with rounded white-bg treatment so the baked-in white background
    // reads as a styled partner badge rather than a stray rectangle.
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-lg overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.25)] ring-1 ring-white/10",
          className
        )}
      >
        <Image
          src={src}
          alt="Project Hatcher × SparkLabs Taiwan"
          width={2000}
          height={500}
          priority
          className={cn(heightClasses, "w-auto select-none block")}
        />
      </div>
    );
  }

  // White variant — transparent PNG, no wrapper styling needed.
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
 */
export function GoogleCloudLogo(props: LogoProps) {
  return <DualBrandLock className={props.className} compact />;
}

/**
 * @deprecated kept for backward-compat.
 */
export function SparkLabsLogo(props: LogoProps) {
  return <DualBrandLock className={props.className} compact />;
}
