import type { Metadata } from 'next'

import './globals.css'
import { Footer, Navbar } from '@/components'



export const metadata: Metadata = {
  title: 'Centro de Autos',
  description: 'Descubre los mejores autos en el mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
