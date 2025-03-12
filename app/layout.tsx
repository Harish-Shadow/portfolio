import "./globals.css"
import { Roboto } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Harish - Web Developer & AI/ML Enthusiast",
  description: "Personal portfolio of Harish, a Web Developer and AI/ML enthusiast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${roboto.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

