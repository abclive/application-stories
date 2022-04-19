module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Sen', 'sans-serif'],
      title: ['Montserrat', 'serif'],
    },
    extend: {
      colors: {
        transit: {
          DEFAULT: "#30B566",
          dark: "#1C7F49",
          light: "#2BC875",
          'almost-white': "#D6F0E0",
          blue: "#14446B",
          "dark-blue": "#1E212D",
          gray: "#5E7A82",
          "light-gray": "#B0B9C2" 
        }
      }
    },
  },
  plugins: [],
}
