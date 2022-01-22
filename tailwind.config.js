module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg-main': '#010F1D'
      }
    },
    fontFamily: {
      'grotesk': ['Space Grotesk', 'sans-serif'],
      'overpass': ['Overpass', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
