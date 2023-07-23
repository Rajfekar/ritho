"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FC } from "react"

const queryClient = new QueryClient()
const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider
