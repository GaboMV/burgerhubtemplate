import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Anton, Dancing_Script } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
})

export const metadata: Metadata = {
  title: 'Burger Hub — Good Food, Fast & Fresh',
  description:
    'Delicious fast food made with quality ingredients, served hot and fresh. Order burgers, fries, pizza, chicken and more with fast delivery to your doorstep.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#171310',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${dancing.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
