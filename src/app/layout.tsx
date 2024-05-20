import type { Metadata } from 'next'
import { poppins, playfair } from '@/atoms/fonts'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-poppins relative bg-main-bg bg-no-repeat bg-cover text-light-text">
        <Navbar />
        <main className="min-h-screen w-full font-poppins">{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
