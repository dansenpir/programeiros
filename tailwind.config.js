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
        'jobTypeLabel': '#94C8FD',
        'jobLevelLabel': '#FDEB94',

        'registerButton': '#0466C8',

        'gray-white': '#DBDDE0',
        'gray.500': '#6F7683',
        'gray-dark': '#41454C',
        'gray.900': '#222428',
        gray: '#A5A9B2',

        'white.900': '#F6F6F7',

        discord: '#2D3DEF',
        github: '#085CBD',
        telegram: '#0D73B8',

        'blue.100': '#CAEDFC',
        'blue.300': '#62B6EE',
        'blue.500': '#0466C8',
        'blue.700': '#023A90',
        'blue.900': '#001D60',
        blue: '#54A8FC',

        dark: '#121315',

        green: '#04C8A7',
        'green-dark': '#03AB8F',
        'green.700': '#028D90',
        'green.900': '#004C60',

        orange: '#C8A704',
        'orange-dark': '#AB8F03',

        red: '#C82504',
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
      gridTemplateColumns: {
        'searchForm': 'repeat(4, 1fr) min-content'
      },
      spacing: {
        '1.3px': '0.08125rem',
        '17.28': '1.08rem',
        '60': '3.75rem'
      }
    },
    fontFamily: {
      grotesk: ['Space Grotesk', 'sans-serif'],
      overpass: ['Overpass', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
      borderRadius: ['last'],
    },
  },
  plugins: [],
};
