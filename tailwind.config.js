module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'btn-blue': '#0466C8',
        'btn-blue-hover': '#0357AB',
        'btn-blue-click': '#03498F',
        'btn-discord': '#5865F2',
        'btn-github': '#0969DA',
        'btn-gray': '#6F7683',
        'btn-gray-click': '#5F646F',
        'btn-telegram': '#0F86D7',
        blue: '#54A8FC',
        dark: '#121315',
        discord: '#2D3DEF',
        footer: '#222428',
        github: '#085CBD',
        green: '#04C8A7',
        'green-dark': '#03AB8F',
        gray: '#A5A9B2',
        'gray-white': '#DBDDE0',
        'gray-dark': '#41454C',
        orange: '#C8A704',
        'orange-dark': '#AB8F03',
        red: '#C82504',
        telegram: '#0D73B8',
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
      height: {
        1.25: '0.3125rem',
      },
      margin: {
        150: '37.5rem',
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
