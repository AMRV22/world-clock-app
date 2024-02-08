import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": {
          50: "#F3F0FF",
          100: "#EAE6FE",
          200: "#D1C9FD",
          300: "#B0A1FC",
          400: "#836BFA",
          500: "#190482",
          600: "#1A0486",
          700: "#12035E",
          800: "#12035E",
          900: "#000000",
          950: "#000000"
        }
      }
    },
  },
  plugins: [],

};
export default config;
