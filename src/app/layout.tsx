import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neobit — Plataforma de tarjeta de NFC',
  description: 'Gestiona tu servicio de energía residencial',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Neobit',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <head>
        <link rel='apple-touch-icon' href='/icon-192.png' />
        <meta name='mobile-web-app-capable' content='yes' />
      </head>
      <body>{children}</body>
    </html>
  )
}
