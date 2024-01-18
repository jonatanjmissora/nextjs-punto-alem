import Image from 'next/image'
import styles from '../styles/_08Catering_Part1.module.css'
import fotos from "../constant"
import { FramerReveal } from './FramerReveal'

export const _08Catering_Part1 = () => {
  return (
    <section id="catering">
      <article className={styles.catering}>
        <div className={styles.wrapper}>
          <FramerReveal 
          className={styles.text_container}
          options={{from: "left"}}
          >
            <h3 className={styles.title}>Catering único y especial</h3>
            <p>Sorprender a tus invitados con un servicio gastronómico de primera clase. Nuestros chefs preparan platos únicos con elaboración propia y excelente calidad. Podrás degustar sabores exquisitos, desde recepciones frías y calientes, platos principales exclusivos hasta los más finos postres.</p>
            <p>Elaboramos comida al aire libre, nuestros servicios te brindaran la posibilidad de probar nuestro mejor catering también en exteriores y en vivo.</p>
            <p>Además te ofrecemos, un servicio de bar con bartenders profesionales, que te prepararan los mejores y más ricos cócteles.</p>
          </FramerReveal>
          <FramerReveal
          className={styles.image_container} 
          options={{from: "right"}}
          >
            <Image 
              className={styles.image1} 
              src={fotos["07"].src} 
              alt={fotos["07"].alt}
              title={fotos["07"].title}
            />
          </FramerReveal>
        </div>

      </article>
      
    </section>
  )
}
