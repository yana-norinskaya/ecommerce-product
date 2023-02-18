const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        transparent: colors.transparent,
        orange: {
          950: "hsl(26, 100%, 55%)",
        },
      },
      boxShadow: {
        "3xl": "0 0 0 3px hsl(26, 100%, 55%)",
        "btn": "0 2px 10px hsl(26, 100%, 55%)",
        "modal": "0px 10px 38px -10px grey"
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        link: {
          from: { width: 0 },
          to: { width: "100%" },
        },
        borders: {
          from: {
            border: "none"
          },
          to: {
            border: "2px solid #f90"
          },
        },
      },
      animation: {
        'link-under': 'link 300ms',
        "border-avatar": 'borders 300ms',
        "fade": "fade 400ms"
      },
    },
  },
  plugins: [],
}