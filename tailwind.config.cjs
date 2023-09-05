/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#CF63FC',
        secondary: '#5964D1',
        'secondary-alt': '#cbcff4',
        black: '#000000',
        'black-alt': '#1A191D',
      },
      fontFamily: {
        primary: ['Acumin', 'sans-serif'],
        secondary: ['Dolego', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
