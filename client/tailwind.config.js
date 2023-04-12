/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter']
    },
    extend: {
      colors: {
        "primary": "#f39230",
        "grayShade": "#f3f5f9",
        "darkGrayShade": "#222831",
        "lightGrayShade": "#7f8191",
        "lightestGrayShade": "#f3f5f9"
      }
    },
  },
  plugins: [],
}

