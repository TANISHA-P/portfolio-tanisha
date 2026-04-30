import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tanisha Pareek — Backend Engineer',
  description: 'Backend engineer building high-throughput systems at scale. Exploring search, ranking, and distributed architecture.',
  keywords: ['Backend Engineer', 'Go', 'Distributed Systems', 'Blinkit', 'Swiggy'],
  openGraph: {
    title: 'Tanisha Pareek — Backend Engineer',
    description: 'Backend engineer building high-throughput systems at scale.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
