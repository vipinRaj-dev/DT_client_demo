import daisyui from "daisyui";
import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkTeal: "#003C51",
        TealText: "#006E74",
        LightTealBackground: "#F2F7F8",
        DarkTealBackground: "#006E74",
      },
    },
  },
  plugins: [daisyui, tailwindScrollbar],
  daisyui: {
    themes: ["light"],
  },
};
