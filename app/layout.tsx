import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Italianno } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const italianno = Italianno({
  variable: '--font-italianno',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lovely Looks by Lexis — Lash Extensions & Waxing | Garden City, Idaho',
  description:
    'Cosmetologist-led lash extensions and facial & body waxing in Garden City and Twin Falls, Idaho. Book your appointment with Lexis Matsen today.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f0eb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${cormorant.variable} ${italianno.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
