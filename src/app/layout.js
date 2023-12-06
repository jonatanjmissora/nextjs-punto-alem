import { Poppins } from 'next/font/google'
import './globals.css'
import { _01Navbar } from './components/_01Navbar'
import { _10Footer } from './components/_10Footer'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Punto Alem - Eventos &; Catering',
  description: 'Punto Alem. Nos dedicamos a la organización de eventos sociales y corporativos, con una trayectoria de más de 20 años de experiencia.',
  keywords: "salon, catering, fiestas, casamiento, cumpleaños, eventos, aire libre, gourmet"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <link rel="icon" href="/image/favicon.ico" sizes="any" />
      <body className={poppins.className}>
        <_01Navbar />
        {children}
        <_10Footer />
      </body>
    </html>
  )
}
