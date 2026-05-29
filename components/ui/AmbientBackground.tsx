export function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60" />

      <div
        className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-3xl animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(66,133,244,0.45) 0%, rgba(66,133,244,0.05) 50%, transparent 70%)",
        }}
      />

      <div
        className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-float-medium"
        style={{
          background:
            "radial-gradient(circle, rgba(52,168,83,0.35) 0%, rgba(52,168,83,0.05) 50%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 -right-32 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(255,92,53,0.35) 0%, rgba(255,92,53,0.05) 50%, transparent 70%)",
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
    blue: "rgba(66,133,244,0.18)",
    spark: "rgba(255,92,53,0.18)",
    green: "rgba(52,168,83,0.18)",
    yellow: "rgba(251,188,4,0.18)",
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colors[variant]} 0%, transparent 65%)`,
        }}
      />
    </div>
  );
}
