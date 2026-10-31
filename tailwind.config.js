/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { night: { 950: '#070707', 900: '#0d0d0d', 800: '#161616', 700: '#222222', 600: '#333333' }, volt: { 300: '#dcff85', 400: '#cfff5e', 500: '#c6ff3d', 600: '#a6dc1f' } },
      fontFamily: { display: ['"Bebas Neue"', 'sans-serif'], sans: ['Outfit', 'sans-serif'] },
      keyframes: { fadeUp: { '0%': { opacity: 0, transform: 'translateY(30px)' }, '100%': { opacity: 1, transform: 'none' } } },
      animation: { fadeUp: 'fadeUp .8s ease both' },
    },
  },
  plugins: [],
}
