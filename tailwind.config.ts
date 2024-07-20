import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        brandRed: {
          200: '#BF332C',
          400: '#D40F0D',
          500: '#D60D0C',
        },
        brandBlack: '#0D0D0D',
        brandWhite: '#FEFEFE',
      },
      width: {
        myLg: '450px',
        myXl: '600px',
      },
      maxWidth: {
        my2Xl: '1280px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
