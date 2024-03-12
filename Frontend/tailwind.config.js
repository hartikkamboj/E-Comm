import { url } from "inspector";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      colors: {
        "Background-color": "#F2F0F1",
      },
      backgroundImage: {
        heroPattern:
          " url('/Users/ldt/Desktop/Project-Ecomm/Frontend/src/assets/HeroBackGroundImage.png')",
      },
    },
  },
  plugins: [],
};
