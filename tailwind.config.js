/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f4f8',
          100: '#d9e3ed',
          200: '#b3c7db',
          300: '#8dabc9',
          400: '#678fb7',
          500: '#4173a5',
          600: '#1B3A5C',
          700: '#162e49',
          800: '#102236',
          900: '#0b1623',
        },
        gold: {
          50:  '#fdf9ee',
          100: '#f9f0d0',
          200: '#f2dfa1',
          300: '#eacf72',
          400: '#C9A84C',
          500: '#b5912e',
          600: '#8f7124',
          700: '#6a541b',
          800: '#453712',
          900: '#211b09',
        },
        sand: {
          50:  '#fdfaf5',
          100: '#f7f0e2',
          200: '#efe0c5',
          300: '#e3cca2',
          400: '#d5b87e',
          500: '#c4a05a',
          600: '#F5F0E8',
        },
        cream: '#FDFAF5',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0b1623 0%, #1B3A5C 50%, #2a5280 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #eacf72 100%)',
        'section-gradient': 'linear-gradient(180deg, #FDFAF5 0%, #f7f0e2 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
