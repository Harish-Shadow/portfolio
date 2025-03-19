import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  className?: string
  children: React.ReactNode
}

export default function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-gray-900/40 backdrop-blur-md border border-white/10 p-6 transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  )
}

