import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F3F4F8",
        secondary: "#5051F9",
      },
      gridTemplateColumns: {
        sidebar: "100px auto", // 👈 for sidebar layout. adds grid-cols-sidebar class
      },
      gridTemplateRows: {
        header: "10px auto", // 👈 for the navbar layout. adds grid-rows-header class
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
