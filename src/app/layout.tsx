'use client'
import './globals.css'
import React, { useEffect } from 'react'
import { Inter } from 'next/font/google'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import NavigationBar from '@/components/NavigationBar'
import Alert from '@/components/Alert'
import { useZustandStore } from '@/zustand'
import Footer from '@/components/Footer'
import { auth } from '@/utils/firebase/init'

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { alert } = useZustandStore((state) => state)
  const queryClient = new QueryClient()
  const setLoggedInUser = useZustandStore((state) => state.setLoggedInUser)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && setLoggedInUser(user)
    })
  }, [setLoggedInUser])

  return (
    <html lang="en" className={inter.className}>
      <body>
        <QueryClientProvider client={queryClient}>
          {alert && (
            <div className="absolute top-20 right-6">
              <Alert />
            </div>
          )}
          <NavigationBar />
          {children}
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
