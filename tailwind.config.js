/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-pro": "#008C8C",
        "bg-pro": "#F6FAFA",
        "green-g": "rgba(0, 161, 69, 0.2)",
        "green-c": "#005454",
        "green-light-3": "#E4F0EF",
        "green-light-5": "#D2E6E4",
        "green-light-7": "#ACCDCD",
        "green-light-1": "#cce8e8",
        "green-bar": "#48BABA",
        "green-Suscess-1": "#A2ECC2",
        "green-Suscess-2": "#00A145",
        "green-Suscess-3": "#006129",
        "purple-Active-1": "#CDA9D9",
        "purple-Active-2": "#852FA2",
        "purple-Active-3": "#501C61",
      },
      backgroundColor: {
        default: "#F6FAFA",
      },
      height: {
        670: 670,
        320: 320,
        450: 450,
        550: 500,
        966: 766,
        78: 78,
      },
      width: {
        650: 650,
        550: 550,
        1280: 1280,
      },
    },
  },
  plugins: [],
};
