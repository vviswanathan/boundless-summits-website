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
        cream: {
          DEFAULT: "#FAF6EE",
          deep: "#F2EDE2",
          warmer: "#EFE8DC",
        },
        navy: {
          DEFAULT: "#1B2A4E",
          deep: "#0F1B36",
          darker: "#091230",
        },
        copper: {
          DEFAULT: "#B87333",
          light: "#D69052",
        },
        sage: "#5C7A5E",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
