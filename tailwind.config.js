/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cutomLightBlue: '#8ECAE6',
        cutomMidBlue: '#227C9D',
        cutomDartBlack: '#023047',
        cutomOrange: '#FB8500',
        cutomyellow: '#FFB703',
        customBlackNight: '#121312',
        customRaisinBlack:'#001514'

      }
    },
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
      'auto': 'auto',
    }
  },
  plugins: [],
}

