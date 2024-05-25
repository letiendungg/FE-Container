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
        main2: "#65798b",
        main3: "#a4b6c6",
        gray: "#f0f2f5",
        border: "#4b5563",
        dryGray: "#E0D5D5",
        bgFooter: "#e1e8ed",
        bgOur: "#33424f",
        hoverLearnMore: "#FF812E",
        
      },
      fontFamily: {
        euclid: ["Euclid Circular A", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
