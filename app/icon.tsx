import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: 96,
          border: "32px solid #E8F0FE",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 300,
            borderRadius: 80,
            background: "#1A73E8",
            color: "#ffffff",
            fontSize: 142,
            fontWeight: 800,
            letterSpacing: 0,
          }}
        >
          PH
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 54,
            left: 96,
            right: 96,
            height: 18,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ flex: 1, background: "#EA4335" }} />
          <div style={{ flex: 1, background: "#FBBC04" }} />
          <div style={{ flex: 1, background: "#34A853" }} />
          <div style={{ flex: 1, background: "#1A73E8" }} />
        </div>
      </div>
    ),
    size
  );
}
