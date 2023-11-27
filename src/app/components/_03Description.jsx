import Image from 'next/image'
import styles from '../styles/_03Description.module.css'
import fotos from "../constant"
import { FramerReveal } from './FramerReveal'

export const _03Description = () => {
  return (
    <section className={styles.description_section}>

      <article className={styles.text_container}>

        <FramerReveal 
          className={styles.description}
          options={{from: "bottom", amount:"50", margin: "-30", delay: "0"}}
        >
          <h3 className={styles.title}>Salón</h3>
          <p>Con una capacidad para 200 invitados, contamos con mesas y sillas Tiffany, vajillas completas, ambientes totalmente climatizados, cuatro livings exteriores, dos pantallas para transmisión del evento.</p>
        </FramerReveal>

        <FramerReveal 
          className={styles.description}
          options={{from: "bottom", amount:"50", margin: "-30", delay: "0.45"}}
        >
          <h3 className={styles.title}>Logística</h3>
          <p>Brindamos total asesoramiento integral previo al evento. Servicio de atención en salón y personal de limpieza para salón y toilettes. Contamos con servicio de barra de tragos, bartender, cabina de DJ, fotografía 360, latones para bebida y mucho más.</p>
        </FramerReveal>

        <FramerReveal 
          className={styles.description}
          options={{from: "bottom", amount:"50", margin: "-30", delay: "1"}}
        >
          <h3 className={styles.title}>Patio al aire libre</h3>
          <p>Salón único en su clase, jardines con paisajismo en pleno centro de la ciudad, transformaran cada evento en un momento mágico. Ideal para ceremonias y celebraciones al aire libre.</p>
        </FramerReveal>

      </article>
      <div className={styles.image_container}>
        <Image 
          className={styles.image} 
          src={fotos["02"].src} 
          alt={fotos["02"].alt}
          title={fotos["02"].title}
          />
        </div>
        
    </section>
  )
}
