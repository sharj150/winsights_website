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
        primary: {
          blue: "rgb(0, 20, 113)",
          dark: "rgb(14, 26, 55)",
        },
        neutral: {
          white: "#ffffff",
          "light-grey": "#e5e7eb",
          black: "#000000",
        },
      },
      fontFamily: {
        sans: ["var(--font-league-spartan)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

