import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        // TODO define primary colors based on the theme we pick
        primary: {
          '50': '#eff6ff',
          '100': '#dbeafe',
          '200': '#bfdbfe',
          '300': '#93c5fd',
          '400': '#60a5fa',
          '500': '#3b82f6',
          '600': '#2563eb',
          '700': '#5600d9', // somewhat purple
          '800': '#300187', // somewhat blue
          '900': '#1e3a8a',
          '950': '#172554',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        gradient:
          'radial-gradient(circle at center bottom, rgba(54,0,188,1) 0%, rgba(54,0,188,0) 60%),radial-gradient(circle at left 35%, rgba(100,0,247,1) 0%, rgba(100,0,247,0) 35%)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;
