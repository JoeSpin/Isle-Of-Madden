module.exports = {
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/src/img/home-main.jpg')",
      },
        grayscale: {
          50: '50%',
      },
      width:{
        '1/8':'12.5%',
        'logo':'64px',
      },
      height:{
        'logo':'64px',
        '3/4screen' : '75vh',
      },
    },
    screens: {
      'sm': '480px',
      'md': '640px',
      'lg': '1000px',
      'xl': '1024px',
      '2xl': '1536px',
    },
    colors:{
      purple:'#522888',
      gray:'#1D1D20',
      white:'#FFFFFF'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'black': '#000000',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
