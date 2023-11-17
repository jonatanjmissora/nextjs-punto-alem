import Image from 'next/image'
import styles from '../styles/Corporativos.module.css'
import fotos from "../constant"

export const Corporativos = () => {
  return (
    <section className={styles.corporativos} id="corporativos">
      <div className={styles.wrapper}>
        <Image 
        className={styles.image} 
        height="375" 
        src={fotos["10"].foto} 
        alt={fotos["10"].alt}
        title={fotos["10"].title}
        />
        <div className={styles.text_container}>
          <h3 className={styles.title}>Corporativos</h3>
          <p>Si quieres organizar un evento corporativo exitoso, nuestro salón te ofrece el tamaño ideal, dónde podrás realizar fiestas de fin de año, jornadas de trabajo, congresos o exhibiciones de producto, recepciones, etc.</p>
          <p>El salón cuenta con pantallas gigantes, sonido profesional, conexión a internet y otros servicios que harán que tu evento sea de calidad. Además, tenemos  un equipo de profesionales que te asesorará y te ayudará en todo lo que necesites.</p>
        </div>
      </div>
    </section>
  )
}
