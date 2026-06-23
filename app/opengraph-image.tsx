import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Project Hatcher x SparkLabs Taiwan | Google Cloud AI Startup Accelerator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "white",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(26,115,232,0.10), transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(255,92,53,0.10), transparent 70%)",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Top: brand line + co-brand */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#3C4043",
            fontWeight: 500,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              padding: "8px 18px",
              borderRadius: 999,
              background: "#E8F0FE",
              color: "#1A73E8",
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            Google Cloud
          </div>
          <span style={{ color: "#BDC1C6" }}>×</span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              padding: "8px 18px",
              borderRadius: 999,
              background: "#FFEEE7",
              color: "#FF5C35",
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            SparkLabs Taiwan
          </div>
        </div>

        {/* Middle: headline + program name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "#5F6368",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Project Hatcher · Cohort 2026
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 82,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#1F1F1F",
              maxWidth: 900,
            }}
          >
            Google Cloud AI
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #1A73E8 0%, #34A853 50%, #EA4335 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Startup Accelerator
            </span>{" "}
          </div>
        </div>

        {/* Bottom: meta line */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#5F6368",
            paddingTop: 28,
            borderTop: "1px solid #DADCE0",
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>
              <strong style={{ color: "#1F1F1F" }}>12-week</strong> accelerator
            </span>
            <span style={{ color: "#DADCE0" }}>·</span>
            <span>
              <strong style={{ color: "#1F1F1F" }}>Equity-free</strong>
            </span>
            <span style={{ color: "#DADCE0" }}>·</span>
            <span>
              <strong style={{ color: "#1F1F1F" }}>USD 25K</strong> Cloud Credits
            </span>
            <span style={{ color: "#DADCE0" }}>·</span>
            <span>
              Apply by <strong style={{ color: "#EA4335" }}>July 26</strong>
            </span>
          </div>
        </div>

        {/* Bottom accent stripe */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background:
              "linear-gradient(90deg, #EA4335 0%, #FBBC04 33%, #34A853 66%, #1A73E8 100%)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
