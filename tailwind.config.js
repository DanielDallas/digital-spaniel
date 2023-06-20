/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spaniel: "#C0345E",
        "spaniel-white": "#ffffff",
        "spaniel-blue": "#19293A",
        "spaniel-gray": "#E2E4E6",
        "off-bg": "#EDEFF1",
      },
    },
  },
};
