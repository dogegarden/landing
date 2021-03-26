module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dc: '#DDA945', // Doge Color
        dcd: '#CE9E41', // Doge Color Dark
        dcl: '#ECB44A', // Doge Color Light
        ghc: '#141920', // GitHub Color
        ghcl: '#1d2024' // GitHub Color Light
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
