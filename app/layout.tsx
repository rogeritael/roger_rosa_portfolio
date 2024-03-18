import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

// npm install --save aos@next

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roger Rosa',
  description: 'Desenvolvedor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <header>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      </header>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
