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
          100: "#01080E",
          200: "#011627",
          300: "#011221",
        },
        secondary: {
          100: "#607B96",
          200: "#3C9D93",
          300: "#4D5BCE",
          400: "#FFFFFF",
        },
        accent: {
          100: "#FEA55F",
          200: "#43D9AD",
          300: "#E99287",
          400: "#C98BDF",
        },
        lines: "#1E2D3D",
        gradients: {
          100: "#4D5BCE",
          200: "#43D9AD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
