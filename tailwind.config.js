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
      },
      fontFamily: {
        euclid: ["Euclid Circular A", "sans-serif"],
      },
    },
  },
  plugins: [],
};
