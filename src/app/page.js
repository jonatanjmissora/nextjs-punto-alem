import { Catering } from './components/Catering'
import { Contacto } from './components/Contacto'
import { Corporativos } from './components/Corporativos'
import { Description } from './components/Description'
import { Exclusivos } from './components/Exclusivos'
import { Hero } from './components/Hero'
import { Nosotros } from './components/Nosotros'
import { Sociales } from './components/Sociales'

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <Nosotros />
      <Sociales />
      <Corporativos />
      <Exclusivos />
      <Catering />
      <Contacto />
    </main>
  )
}
