import Image from 'next/image'
import styles from '../styles/_06Corporativos.module.css'
import fotos from "../constant"
import { FramerReveal } from './FramerReveal'

export const _06Corporativos = () => {
  return (
    <section className={styles.corporativos} id="corporativos">
      <div className={styles.wrapper}>
        <FramerReveal 
            options={{from: "left", amount:"100", delay: "0"}}
        >
          <Image 
          className={styles.image} 
          height="375" 
          src={fotos["10"].foto} 
          alt={fotos["10"].alt}
          title={fotos["10"].title}
          />
        </FramerReveal>
        <FramerReveal 
          className={styles.text_container}
          options={{from: "right", amount:"100", delay: "0"}}
        >
          <h3 className={styles.title}>Corporativos</h3>
          <p>Si quieres organizar un evento corporativo exitoso, nuestro salón te ofrece el tamaño ideal, dónde podrás realizar fiestas de fin de año, jornadas de trabajo, congresos o exhibiciones de producto, recepciones, etc.</p>
          <p>El salón cuenta con pantallas gigantes, sonido profesional, conexión a internet y otros servicios que harán que tu evento sea de calidad. Además, tenemos  un equipo de profesionales que te asesorará y te ayudará en todo lo que necesites.</p>
        </FramerReveal>
      </div>
    </section>
  )
}
