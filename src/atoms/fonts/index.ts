import { Radio_Canada, Poppins } from 'next/font/google'

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--var-poppins',
  preload: false,
})

export const radio_canada = Radio_Canada({
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--var-radio-canada',
  preload: false,
})
