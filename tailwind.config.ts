import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "avatar-pulse": {
          "0%": {
            transform: "scale(1)",
            borderColor: "#c6e2ff",
          },
          "100%": {
            transform: "scale(1.2)",
            borderColor: "transparent",
          },
        },
        energy: {
          "0%": { transform: "scale(1, 1)" },
          "25%": { transform: "scale(0.9, 1.1)" },
          "50%": { transform: "scale(1.2, 0.8)" },
          "75%": { transform: "scale(0.95, 1.05)" },
        },
      },
      animation: {
        "avatar-pulse":
          "avatar-pulse 2s cubic-bezier(0.57, 0.06, 0.27, 0.84) infinite",
        energy: "energy 0.5s",
      },
    },
  },
  plugins: [],
} satisfies Config;
