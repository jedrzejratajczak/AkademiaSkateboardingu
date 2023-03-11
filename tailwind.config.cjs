/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'cursive']
      },
      colors: {
        accent: '#FBE000'
      }
    }
  },
  plugins: []
};
