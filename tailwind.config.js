const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        DEFAULT: '#6E4281',
        900: '#553064',
        800: '#6E4281',
        600: '#B164D0',
        400: '#D7A8EA',
        200: '#F2E6F6',
      },
    },
  },
  plugins: [],
};
