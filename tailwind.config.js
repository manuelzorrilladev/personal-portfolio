/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          'text': '#f4eaf6',
          'background': '#030302',
          'primary': '#7e108c',
          'secondary': '#211023',
          'accent': '#ffffff',
          'wave1':'#ef70ff',
          'wave2':'#d559e4',
          'wave3':'#b841c7',
          'wave4':'#9927a7',
          'gray-1':'#121212',
          'gray-2':'#454545',
          'gray-3':'#808080'
        },
        light: {
          'text': '#030302',
          'background': '#f4eaf6',
          'primary': '#9e4ca9',
          'secondary': '#eddcef',
          'accent': '#b3b3b3',
          'wave1':'#dbb9d9',
          'wave2':'#cc9ecd',
          'wave3':'#bb80c0',
          'wave4':'#ad66b5',
          'gray-1':'#3d3d3d',
          'gray-2':'#6b6b6b',
          'gray-3':'#989898'
        }
      },
      fontFamily:{
        'nunito':['Nunito' ], //light 300,medium 500
        'main':['Bricolage Grotesque'] // medium 500, bold 700 
      },
      spacing:{
        '9/10':'90%',
        '100':'28rem',
        '110':'37rem',
        '85v':'85vh',
        '40vw':'40vw'
      

      },
      scale:{
        '200':'2'
      },
      
    },

  },
  plugins: [],
}

