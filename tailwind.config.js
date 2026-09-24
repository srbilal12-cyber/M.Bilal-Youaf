/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#030712',
          dark: '#070c1b',
          panel: 'rgba(10, 18, 38, 0.75)',
          blue: '#00f0ff',
          cyan: '#38bdf8',
          green: '#00ff66',
          purple: '#a855f7',
          pink: '#ec4899',
          yellow: '#facc15',
          border: 'rgba(0, 240, 255, 0.25)',
          borderGreen: 'rgba(0, 255, 102, 0.3)'
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
