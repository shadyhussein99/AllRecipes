/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "heading": ["Source Serif Pro"],
        "body": ["Source Sans Pro"]
      }
    },
  },
  plugins: [],
}
