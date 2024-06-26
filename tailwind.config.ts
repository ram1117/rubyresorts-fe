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
      backgroundImage: {
        'main-bg': 'url(/bg.jpg)',
        'subscribe-bg': 'url(/pictures/subscribe.jpg)',
        'hotel-bg': 'url(/pictures/hotel.jpg)',
      },
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
      fontFamily: {
        poppins: 'var(--var-poppins)',
        playfair: 'var(--var-playfair)',
      },
      colors: {
        'light-text': '#f7f7f7',
        'dark-text': '#06170e',
        card: '#06170e',
        'section-light': '#f7f7f7',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
