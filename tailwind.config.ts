import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "rounded-md"
  ],
  theme: {
    extend: {
      colors: {
        brandRed: {
          200: "#BF332C",
          400: "#D40F0D",
          500: "#D60D0C",
        },
        brandBlack: "#0D0D0D",
        brandWhite: "#FEFEFE"
      },
      width: {
        myLg: "450px",
        myXl: "600px"
      },
      maxWidth: {
        my2Xl: "1280px"
      }
    },
  },
  plugins: [],
}

export default config;
