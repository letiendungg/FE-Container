/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        main: "#33424f",
        subMain: "#ff6600",
        gray: "#f0f2f5",
        border: "#4b5563",
        dryGray: "#E0D5D5",
        bgFooter: "#e1e8ed",
      },
      fontFamily: {
        euclid: ["Euclid Circular A", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
