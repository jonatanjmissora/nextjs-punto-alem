import styles from '../styles/Catering.module.css'
import { Carrousel } from './Carrousel'

export const Catering = () => {
  return (
    <section id="catering">
      <article className={styles.catering}>
        <div className={styles.wrapper}>
          <div className={styles.text_container}>
            <h3 className={styles.title}>Catering único y especial</h3>
            <p>Sorprender a tus invitados con un servicio gastronómico de primera clase. Nuestros chefs preparan platos únicos con elaboración propia y excelente calidad. Podrás degustar sabores exquisitos, desde entradas caliente y fría, tapeos, platos principales exclusivos, hasta los más finos y dulces postres y tortas.</p>
            <p>Elaboramos comida al aire libre, nuestros servicios te brindaran la posibilidad de probar nuestro mejor catering también en exteriores.</p>
            <p>Además, te ofrecemos un servicio de bartender, que te preparará los mejores y mas ricos tragos. Acompañado siempre por nuestro servicio de mozos, que atenderá de la mejor manera y profesionalismo.</p>
          </div>
        </div>

        <Carrousel category={'foto7'} width={'100%'} height={'70vh'} index={0}/>
      </article>
      <article>
        <div className={styles.row}>
        <Carrousel category={'foto8'} width={'60vw'} height={'50vh'} index={2}/>
          <h2 className={styles.frase}>DISTINCIÓN</h2>
        </div>

         <div className={styles.row}>
          <h2 className={styles.frase}>ESTILO</h2>
          <Carrousel category={'foto9'} width={'60vw'} height={'50vh'} index={3}/>
          {/* <img className={styles.image_row} src={heroImg} alt="" /> */}
        </div>

        <div className={styles.row}>
          <Carrousel category={'foto10'} width={'60vw'} height={'50vh'} index={1}/>
          <h2 className={styles.frase}>ELABORACIÓN</h2>
        </div>
      </article>
    </section>
  )
}
