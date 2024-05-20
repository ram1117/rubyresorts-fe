import { Poppins, Playfair_Display } from 'next/font/google'

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--var-poppins',
  preload: false,
})

export const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--var-playfair',
  preload: false,
})
