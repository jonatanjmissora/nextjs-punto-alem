import Image from 'next/image'
import styles from '../styles/_08Catering_Part2.module.css'
import fotos from "../constant"
import { FramerReveal } from './FramerReveal'

export const _08Catering_Part2 = () => {
  return (
    <section className={styles.section}>
      
      <article>
        <div className={styles.row}>
          <FramerReveal
            options={{from: "left"}}
          >
            <div className={styles.image_row_container}>

            <Image 
              className={styles.image_row} 
              src={fotos["08"].src} 
              alt={fotos["08"].alt}
              title={fotos["08"].title} 
              />
              </div>
          </FramerReveal>
          <FramerReveal
            className={styles.frase_container}
            options={{from: "right"}}
          >
            <h2 className={styles.frase}>DISTINCIÓN</h2>
          </FramerReveal>  
        </div>

         <div className={styles.row}>
          <FramerReveal
              className={styles.frase_container}
              options={{from: "left"}}
          >
            <h2 className={styles.frase}>ESTILO</h2>
          </FramerReveal>
          <FramerReveal
              options={{from: "right"}}
          >
            <div className={styles.image_row_container}>
            <Image 
            className={styles.image_row} 
            src={fotos["10"].src} 
            alt={fotos["10"].alt}
            title={fotos["10"].title}
            />
            </div>
          </FramerReveal>
        </div>

        <div className={styles.row}>
          <FramerReveal
              options={{from: "left"}}
          > 
            <div className={styles.image_row_container}>
            <Image 
              className={styles.image_row} 
              src={fotos["11"].src} 
              alt={fotos["11"].alt}
              title={fotos["11"].title}
              />
              </div>
          </FramerReveal>
          <FramerReveal
            className={styles.frase_container}
            options={{from: "right"}}
          >
            <h2 className={styles.frase}>ELABORACIÓN</h2>
          </FramerReveal>
        </div>
      </article>
    </section>
  )
}
