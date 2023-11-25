import Image from 'next/image'
import styles from '../styles/_04Nosotros.module.css'
import fotos from "../constant"
import { FramerReveal } from './FramerReveal'

export const _04Nosotros = () => {
  return (
    <section className={styles.nosotros} id="nosotros">
      <div className={styles.wrapper}>
        <FramerReveal 
          className={styles.text_container}
          options={{from: "left"}}
        >
          <h3 className={styles.title}>Nosotros</h3>
          <p>Nos dedicamos a la organización de eventos sociales y corporativos, con una trayectoria de más de 20 años de experiencia.</p>
          <p>Ofrecemos un servicio integral, de calidad y personalizado, respaldado por una organización sólida y comprometida que garantiza seguridad y tranquilidad para que nuestros clientes puedan disfrutar de su evento sin preocuparse por nada.</p>
          <p>Nos caracterizamos por la búsqueda constante de propuestas innovadoras, poniendo a disposición nuestra creatividad, responsabilidad y experiencia.</p>
        </FramerReveal>

        <FramerReveal 
          options={{from: "right"}}
        >
          <Image 
          className={styles.image} 
          src={fotos["03"].src} 
          alt={fotos["03"].alt}
          title={fotos["03"].title}
          />
        </FramerReveal>
      </div>
    </section>
  )
}
