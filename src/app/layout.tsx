import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'
import ReactQueryWrapper from '@/components/ReactQueryWrapper'
import Alert from '@/elements/Alert'

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
