import Image from 'next/image'
import styles from '../styles/_05Sociales.module.css'
import fotos from "../constant"
import { FramerReveal } from './FramerReveal'

export const _05Sociales = () => {
  return (
    <section className={styles.sociales} id="sociales">
      <div className={styles.image_container}>
      <Image 
        className={styles.image} 
        src={fotos["04"].foto} 
        alt={fotos["04"].alt}
        title={fotos["04"].title}
      />
      </div>
      <FramerReveal 
          className={styles.text_container}
          options={{from: "right"}}
      >
        <h3 className={styles.title}>Sociales</h3>
        <p>Punto Alem es el lugar para vivir tu evento soñado. Podrás disfrutar de las más variadas celebraciones: desde casamientos, fiestas de quince hasta Bar Mitzvah, aniversarios, cumpleaños. Cualquier evento se convierte en un momento lleno de magia.</p>
        <p>El jardín te ofrece un espacio al aire libre y natural, donde podrás respirar aire fresco y disfrutar del verde. Árboles, plantas y  luces crean un ambiente mágico, que hará que tu evento sea inolvidable y muy especial. Ademá contamos con un ambiente especial
ambientado para celebrar bodas.</p>
      </FramerReveal>
    </section>
  )
}
