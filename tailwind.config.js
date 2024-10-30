/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: 'rgb(3, 37, 65, 1)',
        text: 'rgba(0, 0, 0, .6)',
      },
      transitionProperty: {
        top: 'top',
      },
      width: {
        maxPrimaryPageWidth: '1400px',
      },
    },
  },
  plugins: [],
};
