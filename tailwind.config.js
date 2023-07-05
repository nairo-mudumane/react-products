/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#00292d",
        secondary: "#014144",
        tertiary: "#095a59",
        gold: "#daaf71",
        error: "#be1622",
        warning: "#cf9f5e",
        muted: "#969696",
      },
    },
  },
  plugins: [],
};
