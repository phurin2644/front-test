/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green-pro': '#008C8C',
        'bg-pro': '#F6FAFA',
        'green-g': 'rgba(0, 161, 69, 0.2)'
      },
      backgroundColor: {
        'default': '#F6FAFA',
      },
    },
  },
  plugins: [],
}

