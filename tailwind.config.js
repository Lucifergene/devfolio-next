/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['var(--font-geist)', ...defaultTheme.fontFamily.sans],
        montserrat: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
        poppins: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        sourceSans: [
          'var(--font-source-sans-3)',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
