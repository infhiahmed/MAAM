import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hey Madam Ji 🌷",
  description: "A cute greeting page",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
