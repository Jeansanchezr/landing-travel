/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./public/img/*.jpg","./public/svg/*.svg"],
  darkMode: 'class',
  theme: {
    extend: {
	
	/*npm run scanTailWind*/

     /* Personalizando nuestro Design System de taildwind*/
      backgroundImage : {
        'sanFrancisco' : "url('../public/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../public/img/sanFranciscoDesktop.jpg')",
		'yosemite': "url('../public/img/yosemite.jpg')",
		'LA': "url('../public/img/LA.jpg')",
		'seattle': "url('../public/img/seattle.jpg')",
		'new_york': "url('../public/img/new_york.jpg')",
		'norway': "url('../public/img/norway.jpg')",
		'sydney': "url('../public/img/sydney.jpg')",
		'miami': "url('../public/img/miami.jpg')",
		'switzerland': "url('../public/img/switzerland.jpg')",
		'bali': "url('../public/img/bali.jpg')",
		'norway': "url('../public/img/norway.jpg')",
		'chicago': "url('../public/img/chicago.jpg')",
		'europe': "url('../public/img/europe.jpg')",
		'iceland': "url('../public/img/iceland.jpg')",
		
      },

      backgroundColor : theme => ({

        ...theme('colors'),
        		'primary': '#CC2D4A',
				'secondary': '#8FA206',
				'tertiary': '#61AEC9',

      }),

      textColor:{
		
				'primary': '#CC2D4A',
				'secondary': '#8FA206',
				'tertiary': '#61AEC9',
			},

      fontFamily: {
				Montserrat: ["Montserrat", "sans-serif"],
			},

     },
  },
  plugins: [],
}

