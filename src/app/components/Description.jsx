import Image from 'next/image'
import styles from '../styles/Description.module.css'
import fotos from "../constant"

export const Description = () => {
  return (
    <section className={styles.section}>

      <article className={styles.text_container}>

        <div className={styles.description}>
          <h3 className={styles.title}>SALÓN</h3>
          <p>Con una capacidad para 200 invitados, contamos con mesas y sillas Tiffany, vajillas completas, ambientes totalmente climatizados, cuatro livings exteriores, dos pantallas para transmisión del evento.</p>
        </div>

        <div className={styles.description}>
          <h3 className={styles.title}>LOGÍSTICA</h3>
          <p>Brindamos total asesoramiento integral previo al evento. Servicio de atención en salón y personal de limpieza para salón y toilettes. Contamos con servicio de barra de tragos, bartender, cabina de DJ, fotografía 360, latones para bebida y mucho más.</p>
        </div>

        <div className={styles.description}>
          <h3 className={styles.title}>CENTRO al AIRE LIBRE</h3>
          <p>Salón único en su clase, jardines con paisajismo en pleno centro de la ciudad, transformaran cada evento en un momento mágico. Ideal para ceremonias y celebraciones al aire libre.</p>
        </div>

      </article>
      <Image 
      className={styles.image} 
      src={fotos["01"].foto} 
      height="320" 
      alt={fotos["01"].alt}
        title={fotos["01"].title}
      />
        
    </section>
  )
}
