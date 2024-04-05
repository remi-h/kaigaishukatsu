import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-zen-kaku-gothic-new)'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'line': '#113946',
        'accent': '#1a0031',
        'primary': '#1E3A8A',
        'secondary': '#EAD7BB',
        'background': '#e1eaed',
        'box': '#d5dfe6',
        'icon': '#c3cdd4',
        'box-hover': '#d3e2ed',
      },
    },
  },
  plugins: [],
};
export default config;
