/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Unicase', 'cursive']
      },
      colors: {
        accent: '#FBE000'
      },
      spacing: {
        10.5: '2.625rem'
      }
    }
  },
  plugins: []
};
