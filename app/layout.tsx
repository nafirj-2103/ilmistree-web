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
    'Pakistan best educational website',
    'Pakistan digital learning platform',
    '9th class textbooks pdf',
    '9th class books pdf',
    'Punjab board books',
    'PCTB books pdf',
    '9th class biology pdf',
    '9th class mathematics pdf',
    '9th class physics pdf',
    '9th class computer science pdf',
    '9th class Urdu book pdf',
    '9th class English grammar pdf',
    '9th class Islamiat pdf',
    '9th class Tarjuma Tul Quran pdf',
    'online textbooks Pakistan',
    'free PDF textbooks',
    'class 9 notes',
    'digital learning Pakistan',
    'study material for students',
    'read books online',
    'educational PDF books',
    

      'Download any book for free PDF',
  'Books pdf site free download',
  'What is a good website for free books?',
  'What are some suggestions for free book sites?',
  'Which website is suitable for downloading free e-books?',
  'FREE BOOKS WEBSITES NEEDED',
  '9th class textbooks pdf',
  '9th class books pdf',
  'Punjab board books pdf',
  'PCTB books pdf',
  'class 9 books Pakistan',
  'read 9th class books online',
  'download 9th class books',
  'Pakistan educational website',
  'online textbooks Pakistan',
  'free PDF textbooks',
  'digital learning platform Pakistan',
  'class 9 study material',
  'matric books pdf',
  'Punjab curriculum books',
  'educational resources Pakistan',
  'online learning for class 9',
  'exam preparation books',
  'updated syllabus books',
  'new syllabus textbooks',
  'pairing scheme pdf',
  'class 9 notes pdf',
  'solved notes for class 9',

  '10th class textbooks pdf',
  '11th class textbooks pdf',
  '12th class textbooks pdf',
  '10th class books pdf',
  '11th class books pdf',
  '12th class books pdf',
  'class 10 books Pakistan',
  'class 11 books Pakistan',
  'class 12 books Pakistan',
  'read 10th class books online',
  'read 11th class books online',
  'read 12th class books online',
  'download 10th class books',
  'download 11th class books',
  'download 12th class books',
  'class 10 study material',
  'class 11 study material',
  'class 12 study material',
  '1st year books pdf',
  '2nd year books pdf',
  'online learning for class 10',
  'online learning for class 11',
  'online learning for class 12',
  'solved notes for class 10',
  'solved notes for class 11',
  'solved notes for class 12',
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