/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          'blue-rgba': 'rgba(0, 120, 215, 0.54)',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}