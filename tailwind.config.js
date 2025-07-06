// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        pgp: {
          aqua: "#00BCD4",
          gold: "#FFCC00",
          charcoal: "#23272F",
          white: "#FFFFFF"
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        'card': '1.5rem'
      },
      boxShadow: {
        'card': '0 8px 32px 0 rgba(44,62,80,0.16)'
      }
    }
  },
  plugins: []
}