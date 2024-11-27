import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "about-zaama-cover": "url(/images/about-zaama-bg.png)",
        "bg-three": "url(/images/bg-3.png)",
        "zaama-code": "url(/images/zaama-code-bg.png)",
        "bg-four": "url(/images/bg-4.png)",
        "hero-bg": "url(/GIF/hero.GIF)",
      },
      colors: {
        zaama_green: "#00C986",
        zaama_red: "#E91C24",
        zaama_yellow: "#FFE4AE",
        zaama_orange: "#FF7700",
        primary: "#A7CCFF",
        secondary: "#0064CA",
      },
      animation: {
        carousel: "carousel 30s linear infinite ",
        "bounce-slow": "bounce 2s linear infinite",
        little_bounce: "little_bounce 1s linear infinite",
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        little_bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
