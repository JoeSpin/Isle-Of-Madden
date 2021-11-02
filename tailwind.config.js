module.exports = {
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      purple:'#522888',
      gray:'#1D1D20',
      white:'#FFFFFF'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
