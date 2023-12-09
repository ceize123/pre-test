/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#64c9ec',
        secondary: '#fcbc04',
        light: '#74ccec',
        orange: '#EE7214',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
