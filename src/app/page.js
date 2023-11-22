import { _02Hero } from './components/_02Hero'
import { _03Description } from './components/_03Description'
import { _04Nosotros } from './components/_04Nosotros'
import { _05Sociales } from './components/_05Sociales'
import { _06Corporativos } from './components/_06Corporativos'
import { _07Exclusivos } from './components/_07Exclusivos'
import { _08Catering } from './components/_08Catering'
import { _09Contacto } from './components/_09Contacto'

export default function Home() {
  return (
    <main>
      <_02Hero />
      <_03Description />
      <_04Nosotros />
      <_05Sociales />
      <_06Corporativos />
      <_07Exclusivos />
      <_08Catering />
      <_09Contacto />
    </main>
  )
}

// falta media queries para monitor alba
// falta animar
// falta galeria
