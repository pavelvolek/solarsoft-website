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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        gradient:
          "radial-gradient(circle at center bottom, rgba(54,0,188,1) 0%, rgba(54,0,188,0) 60%),radial-gradient(circle at left 35%, rgba(100,0,247,1) 0%, rgba(100,0,247,0) 35%)",
      },
    },
  },
  plugins: [],
};
export default config;
