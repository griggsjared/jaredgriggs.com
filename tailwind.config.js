/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

const themeColors = {

}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral
    },
    fontFamily: {
      sans: ['Oxygen', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
