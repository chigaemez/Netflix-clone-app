/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants:{
    extends:{
    },
  },

  plugins: [require('tailwind-scrollbar-hide')],
}

