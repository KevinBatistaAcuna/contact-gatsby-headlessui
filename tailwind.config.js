/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'sky': '#0B92F1',
      'black': '#000',
      'blacky': '#222427',
      'white': '#FFF',
      'red': '#ff0000',
      'blue': '#1E90FF'
    }
  },
  plugins: [],
}

