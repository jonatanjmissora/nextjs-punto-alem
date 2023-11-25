import Image from 'next/image'
import styles from '../styles/_07Exclusivos.module.css'
import fotos from "../constant"
import { FramerReveal } from './FramerReveal'

export const _07Exclusivos = () => {
  return (
    <article className={styles.exclusivos}>
      <Image 
      className={styles.image} 
      src={fotos["06"].src} 
      alt={fotos["06"].alt}
      title={fotos["06"].title}
      />
      <FramerReveal 
        className={styles.text_container}
        options={{from: "right"}}
      >
        <h3 className={styles.title}>Exclusivos</h3>
        <p>Punto Alem se distingue por su hermoso parquizado en un lugar mágico dentro de la ciudad. Los eventos diurnos y nocturnos no tendrán comparación.</p>
        <p>Nuestro esfuerzo consiste en otorgar ese momento mágico en cada parte de tu evento. Haremos que tu única preocupación sea divertirte de la mejor forma, con amigos, parientes o compañeros.</p>
        <p>Contamos con todo lo necesario para que no te falte nada, y la imaginación no tenga límites.
            Nuestro personal capacitado estará contigo a cada paso para que todo salga hermoso en tu día.</p>
        <p>Trae tu sueño, nosotros lo haremos realidad.
        </p>
      </FramerReveal>
    </article>
  )
}
