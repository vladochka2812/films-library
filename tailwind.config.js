/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: 'rgb(3, 37, 65, 1)',
        lightBlue: 'rgb(1, 180, 228)',
        lightGreen: 'rgb(30, 213, 169)',
        extraLightGreen: 'rgb(192, 254, 207)',
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
