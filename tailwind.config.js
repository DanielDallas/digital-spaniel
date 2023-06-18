/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  content: [],
  theme: {
    extend: {
      colors: {
        'spaniel': '#C0345E',
        'spaniel-white': '#ffffff',
        'off-bg': '#EDEFF1'
      },
    }
  }
}