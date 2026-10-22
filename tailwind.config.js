/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        'ink-soft': '#131211',
        paper: '#F2EAE3',
        stone: '#D0C9C3',
        signal: '#FF073A',
      },
      fontFamily: {
        display: ['FreeSans', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['FreeSans', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Type scale: 13 / 17 / 22 / 32 / 56–72 / fluid hero
        label: ['0.8125rem', { lineHeight: '1.4' }],
        body: ['1.0625rem', { lineHeight: '1.55' }],
        lead: ['1.375rem', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
        title: ['2rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        heading: ['clamp(2.75rem, 5.5vw, 4.5rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        hero: ['clamp(4rem, min(16vw, 18svh), 16rem)', { lineHeight: '0.8', letterSpacing: '-0.055em' }],
      },
      maxWidth: {
        measure: '38rem',
      },
    },
  },
  plugins: [],
}
