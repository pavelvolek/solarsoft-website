import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#fafbfe',
          '100': '#dadef5',
          '200': '#bac1ed',
          '300': '#9aa4e4',
          '400': '#596ad3',
          '500': '#384dcb',
          '600': '#2d40ad',
          '700': '#25348d',
          '800': '#141c4c', // from logo
          '900': '#0c102c',
          '950': '#03040b',
        },
        secondary: {
          '50': '#f5eeff',
          '100': '#dfc5ff',
          '200': '#c89cff',
          '300': '#b173ff',
          '400': '#9b4bff',
          '500': '#6e00f8', // from gradient
          '600': '#5c00cf',
          '700': '#4a00a6',
          '800': '#38007e',
          '900': '#260055',
          '950': '#14002c',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        gradient:
          'radial-gradient(circle at center bottom, rgba(54,0,188,1) 0%, rgba(54,0,188,0) 60%),radial-gradient(circle at left 35%, rgba(100,0,247,1) 0%, rgba(100,0,247,0) 35%)',
        'split-background': 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(250,251,254,1) 50%, rgba(250,251,254,1) 100%)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;
