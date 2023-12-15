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
          <p>Amplio salón. Sillas tifany. Vajilla completa. Ambiente climatizado. Diferentes juegos de livings. Pantallas. Espacio semi decorado</p>
        </FramerReveal>

        <FramerReveal 
          className={styles.description}
          options={{from: "bottom", amount:"50", margin: "-30", delay: "0.45"}}
        >
          <h3 className={styles.title}>Logística</h3>
          <p>Asesoramiento previo al evento. Servicio integral. Contamos con todo lo necesario para tu evento. Catering de calidad. Cocina en vivo. Servicio de bar y coctelería. Mesa dulce. Dj. Plataforma 360. Y mucho mas</p>
        </FramerReveal>

        <FramerReveal 
          className={styles.description}
          options={{from: "bottom", amount:"50", margin: "-30", delay: "1"}}
        >
          <h3 className={styles.title}>Parque al aire libre</h3>
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
