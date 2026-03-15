import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#3B82F6", dark: "#2563EB" },
        surface: { DEFAULT: "#0f172a", elevated: "#1e293b" },
        border: { DEFAULT: "#1e293b", subtle: "#334155" },
        text: {
          primary: "#e2e8f0",
          muted: "#64748b",
          disabled: "#334155",
        },
        success: "#10B981",
        danger: "#EF4444",
        warning: "#F59E0B",
      },
    },
  },
  plugins: [],
} satisfies Config;
