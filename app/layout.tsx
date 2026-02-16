import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "KodNest Premium Build System",
  description:
    "A premium SaaS design system for serious B2C products. Calm, intentional, coherent, and confident.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
