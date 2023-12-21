/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#7709FE',
        'bg-secondary': '#33BDFE',
      },
      fontFamily: {
        'font-inter': 'Inter, sans-serif'
      }
    },
  },
  plugins: [require("daisyui")],
}

