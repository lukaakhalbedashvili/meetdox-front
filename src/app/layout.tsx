import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'
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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ReactQueryWrapper>
          <div className="absolute right-10 top-20 z-30">
            <Alert />
          </div>

          <NavigationBar />
          {children}
          <Footer />
        </ReactQueryWrapper>
      </body>
    </html>
  )
}

export default RootLayout
