/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      phone: '420px',
      tablet: '768px',
      desktop: '1024px',
      reverseDesktop: {'max': '1023px'},
    },
    colors: {
      primary: '#C95D63',
      secondary: '#496DDB',
      highlight: '#EE8434',
      third: '#AE8799'
    },
    extend: {},
  },
  plugins: [],
}