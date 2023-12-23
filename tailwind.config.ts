import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        main: {
          primary: "#BDFB0B",

          secondary: "#0089ff",

          accent: "#008794",

          neutral: "#291c0f",

          "base-100": "#272C5F",

          info: "#006dff",

          success: "#00c08d",

          warning: "#ffb000",

          error: "#ffa6a5",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
