import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Countdown from '@/components/Countdown'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Treinador | João Navarro',
  description:
    'Treinador especializado em treinamento funcional, musculação e emagrecimento. Atendimento presencial e online.',
  keywords: [
    'treinador',
    'treinamento funcional',
    'musculação',
    'emagrecimento',
    'personal trainer',
    'João Navarro',
  ],
  authors: [
    {
      name: 'Arthur Gustavo Souza Silva Nascimento',
      url: 'https://github.com/Kibryant',
    },
    {
      name: 'Rafael Borges Bezerra',
      url: 'https://github.com/leafartech',
    },
  ],
  category: 'Health',
  robots: 'index, follow',
}

interface LayoutProps {
  readonly children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`min-h-screen ${inter.className} antialiased bg-brandBlack`}
      >
        <Countdown />

        {children}
      </body>
    </html>
  )
}
