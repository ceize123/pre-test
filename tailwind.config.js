/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#74ccec',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
