import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '11px',
      }
    },
  },
  daisyui: {
    themes: [
      {
        base: {
          primary: "#171A25", // dark blue ~ black
          secondary: "#292F48",
          complementary: "#76A0F0", // neutral blue
          neutral: "#D3D4D9", // row grey
          info: "#1C62EB", // info blue
          success: "#1DB56C", // "live"
          error: "#D24747", // delete
          accent: "#1DCDBC",
          "base-100": "#FFFFFF",
          warning: "#fbbd23",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
