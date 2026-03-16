import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
  colorScheme: 'dark',
}

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://labi.goneto.space'),
  title: 'lab-i - Automated Laboratory Image Organization',
  description: 'Free, open source image classification app for researchers. Automatically organize and classify your images locally with AI. No cloud, no accounts, no compromises.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'lab-i - Automated Laboratory Image Organization',
    description: 'Free, open source image classification app for researchers. Automatically organize and classify your images locally with AI. No cloud, no accounts, no compromises.',
    url: 'https://labi.goneto.space',
    siteName: 'lab-i',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'lab-i - Automated Laboratory Image Organization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'lab-i - Automated Laboratory Image Organization',
    description: 'Free, open source image classification app for researchers. Automatically organize and classify your images locally with AI. No cloud, no accounts, no compromises.',
    images: ['/meta.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
