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
  // -v2 = source PDF page 2 (mono black) inverted to white-on-transparent,
  // with the artwork's safe-area bounding box stripped (4-px edge wipe).
  const src =
    variant === "white"
      ? "/hatcher-sparklabs-white-v2.png"
      : "/hatcher-sparklabs-color.png";

  // Combined lockup is 4:1 aspect. Bumped to match the visual weight of
  // a premium tech nav at the upper end of the benchmark range:
  // Stripe ~80px, Vercel ~64px, Google Cloud ~72px. Our lockup has more
  // information density (Project bubble + Google subtext) so we want main
  // "Hatcher" / "SparkLabs" cap-height pushing ~32-40px for confident reading.
  //
  // compact (nav):  h-14 (56) → h-16 (64) → h-20 (80)  // Hatcher cap ~36-48px
  // footer:         h-20 (80) → h-24 (96) → h-28 (112) // anchor mark
  const heightClasses = compact
    ? "h-14 sm:h-16 md:h-20"
    : "h-20 sm:h-24 md:h-28";

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
