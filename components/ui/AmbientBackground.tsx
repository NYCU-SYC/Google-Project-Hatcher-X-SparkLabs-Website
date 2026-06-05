/**
 * Ambient pastel washes for the light theme. On dark backgrounds these
 * used to be high-intensity colored glow orbs; on white we instead use
 * very low-opacity wide gradient washes that read as soft tinted
 * regions of the page rather than visible "blobs". Keeps the Google
 * 4-color brand identity active without overwhelming readability.
 */
export function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(66,133,244,0.07) 0%, rgba(255,255,255,0) 34%), linear-gradient(120deg, rgba(52,168,83,0.045) 0%, rgba(255,255,255,0) 42%), linear-gradient(240deg, rgba(251,188,4,0.04) 0%, rgba(255,255,255,0) 38%)",
        }}
      />
    </div>
  );
}

export function SectionAmbient({
  variant = "blue",
}: {
  variant?: "blue" | "spark" | "green" | "yellow";
}) {
  const colors = {
    blue: "rgba(66,133,244,0.07)",
    spark: "rgba(255,92,53,0.07)",
    green: "rgba(52,168,83,0.07)",
    yellow: "rgba(251,188,4,0.07)",
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colors[variant]} 0%, transparent 65%)`,
        }}
      />
    </div>
  );
}
