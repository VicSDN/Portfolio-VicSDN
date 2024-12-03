/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'classic-black': '#000000',
        'deep-dark-blue': '#0A0F2C',
        'navy-blue': '#1C3D5A',
        'steel-blue': '#365B7D',
        'sky-blue': '#4A90E2',
        'dark-gray': '#2C2C2C',
        'light-gray': '#DFE1E5',
      },
      fontFamily: {
        title: ['Montserrat', 'sans-serif'],
        body: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}