import './globals.css'
import type { Metadata } from 'next'
import { roboto } from '@/app/fonts'
import { Header } from './components/Header'
import { SellProvider } from './context/context'

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
        <SellProvider>
          <Header /> {children}
        </SellProvider>
      </body>
    </html>
  )
}
