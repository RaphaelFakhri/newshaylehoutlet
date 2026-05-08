/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E1A2B',
        cream: '#F5F1EA',
        gold: '#B08D57',
        burgundy: '#6B1F2A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['"Noto Kufi Arabic"', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
