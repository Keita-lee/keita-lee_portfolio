import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          950: "#1C1917",
          900: "#2E2B28",
          800: "#3A3733",
          700: "#4A4745",
          600: "#5A5652",
          500: "#6B6460",
          400: "#78716C",
          300: "#A09A95",
          200: "#C8C4BC",
          100: "#E2DDD7",
          50:  "#F0EDE8",
          25:  "#FAFAF8",
        },
        sage: {
          700: "#3D7A52",
          600: "#4D7A5E",
          100: "#F0FEF4",
          50:  "#F5FAF7",
        },
        rust: {
          600: "#C05840",
          500: "#E85D4A",
          50:  "#FEF9F8",
        },
      },
      fontFamily: {
        sans:  ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-dm-serif)", "serif"],
        mono:  ["ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
