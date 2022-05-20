module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      title: ['Montserrat', 'serif'],
    },
    extend: {
      colors: {
        intiveo: {
          DEFAULT: "#4054b2",
          "light-blue": "#00bce7",
          "almost-white": "#eefafe"
        }
      }
    },
  },
  plugins: [],
}
