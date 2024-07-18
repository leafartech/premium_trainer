import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Treinador | João Navarro',
  description: 'Treinador especializado em treinamento funcional, musculação e emagrecimento. Atendimento presencial e online.',
  keywords: ['treinador', 'treinamento funcional', 'musculação', 'emagrecimento', 'personal trainer', 'João Navarro'],
};

interface LayoutProps {
  readonly children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen ${inter.className} antialiased bg-brandBlack`}>
        {children}
      </body>
    </html>
  );
};