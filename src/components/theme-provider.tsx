"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider defaultTheme="dark" attribute="class">
      {children}
    </NextThemesProvider>
  )
}
