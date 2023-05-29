'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'
import React, { FC } from 'react'

interface ReactQueryWrapperProps {
  children: React.ReactNode
}

const ReactQueryWrapper: FC<ReactQueryWrapperProps> = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default ReactQueryWrapper
