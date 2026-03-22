import type { Metadata } from 'next'
import { Amatic_SC, Lora, DM_Mono, Patrick_Hand, Lato } from 'next/font/google'
import { PostHogProvider } from '@/components/PostHogProvider'
import './globals.css'

const amaticSC = Amatic_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

const dmMono = DM_Mono({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const patrickHand = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-app',
  display: 'swap',
})

const lato = Lato({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-app-stream',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Araw — Start your day with intention',
  description:
    'Araw is a free, open-source, local-first morning journaling app for macOS and Windows. Five steps. Five minutes. No accounts, no cloud, just you.',
  metadataBase: new URL('https://araw.himo.site'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://araw.himo.site/',
    title: 'Araw — Start your day with intention',
    description:
      'A free, open-source, local-first morning journaling app. Five steps. Five minutes. No accounts, no cloud.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Araw — Start your day with intention',
    description:
      'A free, open-source, local-first morning journaling app. Five steps. Five minutes. No accounts, no cloud.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${amaticSC.variable} ${lora.variable} ${dmMono.variable} ${patrickHand.variable} ${lato.variable}`}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  )
}
