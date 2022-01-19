module.exports = {
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  darkMode:'media', // or  or 'class'
  theme: {
    extend: {
        grayscale: {
          50: '50%',
      },
      width:{
        '1/5': '20%',
        '1/8':'12.5%',
        'logo':'64px',
        '1/16':'6%',
        '2/3': '66%'
      },
      height:{
        'logo':'64px',
        '1/4screen' : '25vh',
        '1/2screen' : '50vh',
        '3/4screen' : '75vh',
        'bgvideo' : '38rem',
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
      lightgray:'#575760',
      white:'#FFFFFF',
      black:'#000000'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'black': '#000000',
     })
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
      rotate: ['active', 'group-hover'],
      transform: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
