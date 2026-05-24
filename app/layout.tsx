import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-ZY7ZH9HBGT'

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
  title:
    "Ilmistree - Read & Download 9th Class Textbooks PDF Online",

  description:
    'Access organized notes, PDF books, New syllabus and Pairing schemes all in one place to help you study smarter and succeed with confidence',

  keywords: [
    'Ilmistree',
    'Ilmistry',
    'Pakistan best educational website',
    'Pakistan digital learning platform',
    'Punjab board books',
    'PCTB books pdf',
    'online textbooks Pakistan',
    'free PDF textbooks',
    'digital learning Pakistan',
    'study material for students',
    'read books online',
    'educational PDF books',
    'Download any book for free PDF',
    'Books pdf site free download',
  'educational resources Pakistan',
  'online learning for all classes',
  'exam preparation books',
  'updated syllabus books',
  'new syllabus textbooks',
  'pairing scheme pdf',
  ],
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

        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}