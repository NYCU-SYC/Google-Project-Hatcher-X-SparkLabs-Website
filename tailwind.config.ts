import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme surface (primary palette)
        ink: {
          950: "#070D1A",
          900: "#0A1628",
          800: "#0F1E36",
          700: "#162844",
          600: "#1E3354",
          500: "#2D4569",
        },
        // Brand colors (kept consistent with original dark version)
        brand: {
          blue: "#4285F4",
          "blue-light": "#6BA1FF",
          "blue-glow": "#82B1FF",
          red: "#EA4335",
          yellow: "#FBBC04",
          green: "#34A853",
          spark: "#FF5C35",
          "spark-glow": "#FF7A5C",
        },
        // Google official colors (kept as semantic aliases for OG image etc.)
        google: {
          blue: "#4285F4",
          "blue-dark": "#1A73E8",
          "blue-light": "#6BA1FF",
          "blue-pale": "rgba(66,133,244,0.12)",
          green: "#34A853",
          "green-pale": "rgba(52,168,83,0.12)",
          yellow: "#FBBC04",
          "yellow-pale": "rgba(251,188,4,0.12)",
          red: "#EA4335",
          "red-pale": "rgba(234,67,53,0.12)",
        },
        spark: {
          DEFAULT: "#FF5C35",
          light: "#FF7A5C",
          pale: "rgba(255,92,53,0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto-tc)", "system-ui", "sans-serif"],
        display: [
          "var(--font-sora)",
          "var(--font-inter)",
          "var(--font-noto-tc)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        "tighter-2": "-0.03em",
        "tight-cn": "0.01em", // CJK 適用，比 normal 稍微寬一點
      },
      lineHeight: {
        "extra-tight": "1.02",
        "display": "1.08",
        "relaxed-cn": "1.75", // 中文段落專用，更寬的行高
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(ellipse at center, rgba(66,133,244,0.15), transparent 70%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "brand-gradient":
          "linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FF5C35 100%)",
        "blue-gradient":
          "linear-gradient(135deg, #6BA1FF 0%, #4285F4 100%)",
        "text-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, #B8C9E8 100%)",
      },
      animation: {
        "float-slow": "float 18s ease-in-out infinite",
        "float-medium": "float 12s ease-in-out infinite",
        "spin-slow": "spin 30s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(66,133,244,0.45)",
        "glow-lg": "0 0 100px -20px rgba(66,133,244,0.55)",
        "spark-glow": "0 0 60px -10px rgba(255,92,53,0.45)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.08)",
        soft: "0 8px 30px -10px rgba(0,0,0,0.5)",
        card: "0 8px 30px -10px rgba(0,0,0,0.4)",
        elevated: "0 16px 50px -10px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
