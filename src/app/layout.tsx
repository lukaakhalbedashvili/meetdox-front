import './globals.css'
import React from 'react'
import { Ubuntu } from 'next/font/google'
import NavigationBar from '@/components/NavigationBar'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--ubuntu',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={ubuntu.className}>
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
