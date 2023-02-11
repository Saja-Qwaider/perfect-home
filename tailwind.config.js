/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/**/*.{html,js}"],
  theme: { 

    fontFamily: {
      'Raleway':'Raleway',
    },
    extend: {
      colors: {
        'pink':'#ffa6a8',
      },
      width: {
        '86%':'86%',
      },
      margin: {
        '10%': '10%',
      }
    },
  },
  plugins: [],
}
