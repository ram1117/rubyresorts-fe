import type { Metadata } from 'next'
import { poppins, playfair } from '@/atoms/fonts'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
  title: 'Ruby Resorts',
  description: 'Ruby Resorts view rooms, book rooms,sign up for newsletter',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-poppins relative">
        <Navbar />
        <main className="min-h-screen w-full font-poppins">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
