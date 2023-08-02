/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'blink': 'blink 0.9s step-end infinite',
      },
      keyframes: {
        blink: {
          'from, to': {
            'border-color': 'transparent',
          },
          '50%': {
            'border-color': ' #ffff',

          }
        },
      },

    },
  },
  plugins: [],
}
