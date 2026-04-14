import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const godber = localFont({
  src: './fonts/godber.ttf',
  variable: '--font-godber',
  display: 'swap',
  preload: true,
})

const milkAndHoney = localFont({
  src: './fonts/milk-and-honey.ttf',
  variable: '--font-milk-and-honey',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Ilmistree',
  description: 'Digital educational platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en">
      <body className={`${godber.variable} ${milkAndHoney.variable} min-h-screen pt-[73px]`}>
        {children}
      </body>
    </html>
  )
}
