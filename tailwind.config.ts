import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        card: "var(--card-bg)",
        cardBorder: "var(--card-border)",
        ink: "#0a0a0a",
        chalk: "#f8f7f2",
        ember: "#ff8a4c",
        mint: "#5eead4",
        signal: "#a7f3d0",
        brand: {
          blue: "#0ea5e9", // A nice tailwind sky/blue for accents in light mode
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.35)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.05)"
      }
    }
  },
  plugins: []
};

export default config;
