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
        '2/3': '66%',
        'scheduleBox' : '200px',
        '9/10': '90%'
      },
      maxWidth: {
        '1/4': '25%'
      },
      minWidth: {
        'fit': 'fit-content',
        'att': '180px'
      },
      minHeight:{
        '52': '13rem'
      },
      height:{
        'logo':'64px',
        '1/4screen' : '25vh',
        '1/2screen' : '50vh',
        '3/4screen' : '75vh',
        'bgvideo' : '38rem',
        'scheduleBox': '200px',
        '9/10': '90%'
      },
    },
    screens: {
      'sm': '480px',
      'md': '640px',
      'lg': '1000px',
      'xl': '1024px',
      '2xl': '1280px',
    },
    colors:{
      purple:'#522888',
      lightpurple:'#663399',
      gray:'#393E41',
      lightgray:'#9DA5AA',
      white:'#FFFFFF',
      black:'#10181F', 
      stageone:'#008450',
      stagetwo:'#789e28',
      stagethree:'#b3aa14',
      stagefour:'#efb700',
      stagefive:'#e19005',
      stagesix:'#d46a0a',
      stageseven:'#c33c0f',
      stageeight:'#b81d13',

    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'black': '#000000',
     }), 

  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
      rotate: ['active', 'group-hover'],
      transform: ['active', 'group-hover'],
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}
