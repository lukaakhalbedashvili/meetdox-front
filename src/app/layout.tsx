'use client'
import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import NavigationBar from '@/components/NavigationBar'

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()

  return (
    <html lang="en" className={inter.className}>
      <body>
        <QueryClientProvider client={queryClient}>
          <NavigationBar />
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
