import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import NavigationBar from '@/components/NavigationBar'

const ReactQueryWrapper = dynamic(
  () => import('@/components/ReactQueryWrapper'),
  {
    ssr: false,
  }
)
import Alert from '@/elements/Alert'
import { ErrorObject } from './app.interface'

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: ErrorObject
  }
}

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter',
})

export const metadata: Metadata = {
  title: 'Meetdox',
  description:
    "Do you have a question? Let's schedule a meeting with an expert to get your answer.",
  alternates: {
    canonical: 'https://meetdox.com/',
  },
  verification: {
    google:
      'google-site-verification=-hgu1-kSQmU-ucbQtDHrTPiz5puuqz3635K5kJjBCbI',
  },
  openGraph: {
    title: 'Meetdox | Schedule a meeting with an expert',
    description:
      "Do you have a question? Let's schedule a meeting with an expert to get your answer.",
    url: 'https://nextjs.org',
    siteName: 'Meetdox',
    locale: 'en_US',
    type: 'website',
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.className}>
      <body className="pt-[50px] sm:pt-[90px]">
        <ReactQueryWrapper>
          <div className="absolute right-0 top-5 z-30 mx-2 lg:right-10 lg:top-20">
            <Alert />
          </div>

          <NavigationBar />

          {children}
        </ReactQueryWrapper>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
