import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
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

export const metadata = {
  title: 'Meetdox',
  description: 'Find your perfect teacher today and start learning !',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/cow.png" sizes="any" />
        <title>Meetdox</title>
      </head>

      <body className="mt-[50px] sm:mt-[90px] ">
        <ReactQueryWrapper>
          <div className="absolute right-0 top-5 z-30 mx-2 lg:right-10 lg:top-20">
            <Alert />
          </div>

          <NavigationBar />

          {children}
        </ReactQueryWrapper>
      </body>
    </html>
  )
}

export default RootLayout
