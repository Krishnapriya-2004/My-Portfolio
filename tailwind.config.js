/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
    colors: {
  background: '#FDFDFB',   // light background for the site
  foreground: '#222222',   // main dark text
  card: '#014D4E',         // rich teal for cards
  muted: '#A0AEC0',        // soft grey
  accent: '#FF6B35',       // coral orange for highlights
  cardText: '#FFF8E7',     // cream text for cards
}


,
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.25)',
      }
    },
  },
  plugins: [],
}
