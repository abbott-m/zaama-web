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
        "ticket-1": "url(/images/ticket-1.png)",
        "bg-four": "url(/images/bg-4.png)",
      },
      colors: {
        zaama_green: "#00C986",
        zaama_red: "#E91C24",
        zaama_yellow: "#FFE4AE",
        zaama_orange: "#FF7700",
      },
      animation: {
        carousel: "carousel 40s linear infinite",
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
