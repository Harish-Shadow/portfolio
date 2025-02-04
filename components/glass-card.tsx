import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  className?: string
  children: React.ReactNode
}

export default function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div className={cn("rounded-3xl bg-gray-900/50 backdrop-blur-md border border-neutral-200 border-white/10 p-6 dark:border-neutral-800", className)}>
      {children}
    </div>
  )
}

