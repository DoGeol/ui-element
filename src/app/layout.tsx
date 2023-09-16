import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React, { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UI Element',
  description: 'UI Element by PDG',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
