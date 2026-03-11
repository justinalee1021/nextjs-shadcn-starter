"use client"

import { useContext } from "react"
import { ThemeContext } from "@/providers/ThemeProvider"

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    // SSR 중이거나 context가 없을 때는 기본값 반환
    return { theme: "light" as const, setTheme: () => {} }
  }
  return context
}
