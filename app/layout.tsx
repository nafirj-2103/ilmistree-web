import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}