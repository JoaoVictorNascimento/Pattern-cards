import type { Metadata } from 'next'
import { Cinzel } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: 'Patterns Design Cards',
  description: 'A deck of cards that illustrates design patterns',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(`${cinzel.className} antialiased`)}>
        {children}
      </body>
    </html>
  )
}
