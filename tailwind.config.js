/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./404.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Yeseva One", "serif"],
        guj: ["Noto Sans Gujarati", "sans-serif"],
      },
    },
  },
  plugins: [],
}
