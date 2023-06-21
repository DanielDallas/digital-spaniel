/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "350px", max: "1100px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }
      },
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
