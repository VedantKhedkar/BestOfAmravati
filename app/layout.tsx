import type { Metadata } from 'next'
import './globals.css'
import Chatbot from '@/components/Chatbotv';

export const metadata: Metadata = {
  title: 'Best Of Amravati',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
