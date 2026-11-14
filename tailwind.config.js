/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'electric-blue': '#008CFF',
        'cyan-accent': '#00D4F5',
        'deep-navy': '#020817',
        'dark-blue': '#06152E',
        'light-bg': '#F5F9FF',
        'neutral-grey': '#64748B',
      },
      fontFamily: {
        heading: ['"Exo 2"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-stuzen': 'linear-gradient(135deg, #00D4F5 0%, #008CFF 50%, #0045B5 100%)',
        'gradient-accent': 'linear-gradient(90deg, #00D4F5, #008CFF)',
      },
    },
  },
  plugins: [],
}
