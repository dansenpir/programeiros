module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg-main': '#010F1D',
        'btn-border': '#94C8FD',
        'p-shadow': '#0466C8',
        'title-green': '#04c8a7',
        'split-complementary': '#C8A704',
        'text-main': '#54A8FC',
      },
      fontSize: {
        'text-2.5xl': '1.75rem',
      },
      lineHeight: {
        'extra-loose': '2.5',
        24: '3.875rem',
      },
      borderWidth: {
        1: '0.0625rem',
      },
    },
    fontFamily: {
      grotesk: ['Space Grotesk', 'sans-serif'],
      overpass: ['Overpass', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
