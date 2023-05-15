/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Pacifico", "cursive"],
      banner_title: ["Petit Formal Script", "cursive"],
    },
    extend: {},
  },
  plugins: [],
});
