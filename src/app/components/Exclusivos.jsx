import Image from 'next/image'
import styles from '../styles/Exclusivos.module.css'
import foto_5_1 from "../assets/foto_5_1.jpg"
import { Carrousel } from './Carrousel'

export const Exclusivos = () => {
  return (
    <article className={styles.exclusivos}>
      <Image className={styles.image} src={foto_5_1} height="350" alt="exclusivos foto" />
      {/* <Carrousel category={'foto6'} width={'100%'} height={'80vh'} index={0}/> */}
      <div className={styles.text_container}>
        <h3 className={styles.title}>Exclusivos</h3>
        <p>Punto Alem se distingue por su hermoso parquizado en un lugar mágico dentro de la ciudad. Los eventos diurnos y nocturnos no tendrán comparación.</p>
        <p>Nuestro esfuerzo consiste en otorgar ese momento mágico en cada parte de tu evento. Haremos que tu única preocupación sea divertirte de la mejor forma, con amigos, parientes o compañeros.</p>
        <p>Contamos con todo lo necesario para que no te falte nada, y la imaginación no tenga límites.
            Nuestro personal capacitado estará contigo a cada paso para que todo salga hermoso en tu día.</p>
        <p>Trae tu sueño, nosotros lo haremos realidad.
        </p>
      </div>
    </article>
  )
}
