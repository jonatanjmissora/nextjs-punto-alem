import styles from '../styles/Nosotros.module.css'
import { Carrousel } from './Carrousel'

export const Nosotros = () => {
  return (
    <section className={styles.nosotros} id="nosotros">
      <div className={styles.wrapper}>
        <div className={styles.text_container}>
          <h3 className={styles.title}>Nosotros</h3>
          <p>Nos dedicamos a la organización de eventos sociales y corporativos, con una trayectoria de más de 20 años de experiencia.</p>
          <p>Ofrecemos un servicio integral, de calidad y personalizado, respaldado por una organización sólida y comprometida que garantiza seguridad y tranquilidad para que nuestros clientes puedan disfrutar de su evento sin preocuparse por nada.</p>
          <p>Nos caracterizamos por la búsqueda constante de propuestas innovadoras, poniendo a disposición nuestra creatividad, responsabilidad y experiencia.</p>
        </div>
        <Carrousel category={'foto3'} width={'40vw'} height={'35vw'} index={1}/>
        {/* <img className={styles.image} src={heroImg} alt="" /> */}
      </div>
    </section>
  )
}
