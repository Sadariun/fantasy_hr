module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        frost: {
          DEFAULT: '#cfe8ff',
          dark: '#4b6b88',
          light: '#eff8ff',
        },
        sovietRed: '#c42021',
        goldGuild: '#d6b36a',
        parchment: '#f8f4e6',
        night: '#0d1b2a',
        ruby: '#b11226',
        emerald: '#0f5f38',
        sapphire: '#0f52ba',
        gold: '#d4af37',
        silver: '#c0c0c0',
      },
      fontFamily: {
        display: ['"IM Fell English"', '"Ruslan Display"', 'serif'],
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 