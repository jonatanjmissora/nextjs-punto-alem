import Image from 'next/image'
import styles from '../styles/_09Contacto_Map.module.css'
import fotos from "../constant"

export const _09Contacto_Map = () => {

  return (
    <section id="map">

      <article>
      <div className={styles.google_map}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.4975654690215!2d-62.26956692319346!3d-38.70638397176545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbb55b84f5edf%3A0xa7ff388c796f4ab6!2sPunto%20Alem%20Eventos!5e0!3m2!1ses!2sar!4v1699539545707!5m2!1ses!2sar" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          title="google maps location"
        />
      </div>
      </article>
      <div className={styles.image2_container}>
      <Image 
        className={styles.image2} 
        src={fotos["13"].src} 
        alt={fotos["13"].alt}
        title={fotos["13"].title}
      />
      </div>
    </section>
  )
}
