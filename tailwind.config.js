/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cardo", "serif"],
        display: ["Satisfy", "cursive"],
      },
      spacing: {
        128: '32rem',
      }
    }
  },
}

