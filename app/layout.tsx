import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Nunito } from 'next/font/google'
import './globals.css'

const _nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })
const _fraunces = Fraunces({ subsets: ['latin'], weight: ['500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Alaa Ahmed | Front-End Web Developer',
  description:
    'Portfolio of Alaa Ahmed, a Front-End Web Developer transforming sweet ideas into cheerful, responsive, and pixel-perfect React web applications.',
  generator: 'v0.app',
  openGraph: {
    title: 'Alaa Ahmed | Front-End Web Developer',
    description:
      'Cheerful, responsive, pixel-perfect React web applications built with love in Sohag, Egypt.',
    images: ['/images/alaa.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f0d13',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
