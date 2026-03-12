"use client"

import { useContext } from "react"
import { ThemeContext } from "@/providers/ThemeProvider"

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    if (process.env.NODE_ENV === "development") {
      console.warn("useTheme은 ThemeProvider 내부에서 사용하는 것을 권장합니다")
    }
    // Provider 외부에서 사용 시 기본값 반환
    return { theme: "light" as const, setTheme: () => {} }
  }
  return context
}
