/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'grey': '#444444',
      'off-white': '#EAF8F4',
      'mint': '#98D0BF',
      'mint-light': '#BBEEDF',
    },
    extend: {
      fontSize: {
        '2xs': '0.6rem',
      },
    },
  },
  plugins: [],
}

