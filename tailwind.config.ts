import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/atoms/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'main-bg': 'url(/bg.jpg)',
      },
      fontFamily: {
        poppins: 'var(--var-poppins)',
        playfair: 'var(--var-playfair)',
      },
      colors: {
        'light-text': '#f9f9f9',
        navbar: '#111216',
      },
    },
  },
  plugins: [],
}
export default config
