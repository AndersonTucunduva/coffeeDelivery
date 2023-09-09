import './globals.css'
import type { Metadata } from 'next'
import { roboto } from '@/app/fonts'
import { Header } from './components/Header'

export const metadata: Metadata = {
  title: 'Coffee Delivery',
  description: 'Prova Ignite React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ptBR" className="bg-background">
      <body className={roboto.className}>
        <Header /> {children}
      </body>
    </html>
  )
}
