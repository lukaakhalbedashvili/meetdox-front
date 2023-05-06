'use client'
import React, { FC } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

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
