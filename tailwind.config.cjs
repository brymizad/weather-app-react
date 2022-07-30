/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'day-clear': "url('/img/day/clear.jpg')",
        'day-cloudy': "url('/img/day/cloudy.jpg')",
        'day-rainy': "url('/img/day/rainy.jpg')",
        'day-snowy': "url('/img/day/snowy.jpg')",
        'night-clear': "url('/img/night/clear.jpg')",
        'night-cloudy': "url('/img/night/cloudy.jpg')",
        'night-rainy': "url('/img/night/rainy.jpg')",
        'night-snowy': "url('/img/night/snowy.jpg')",
      },
    },
  },
  plugins: [],
};
