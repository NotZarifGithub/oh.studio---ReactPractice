/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#7f7f7f",
        tertiary: "#e8e5e480",
        btn_color: "#e8e5e480",
      },
      fontFamily: {
        roboto: ['Roboto', "sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "810px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}