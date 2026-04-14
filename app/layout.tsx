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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Godber:wght@400;500;700&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Milk+and+Honey&display=optional"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen pt-[73px]">{children}</body>
    </html>
  )
}
