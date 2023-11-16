import Image from 'next/image'
import styles from '../styles/Catering.module.css'
import foto_7_1 from "../assets/foto_7_1.jpg";
import foto_7_3 from "../assets/foto_7_3.jpg";
import foto_7_4 from "../assets/foto_7_4.jpg";
import foto_10_2 from "../assets/foto_10_2.jpg";
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
        <Image className={styles.image1} src={foto_7_1} height="350" alt="catering foto1" />
        </div>

      </article>
      <article>
        <div className={styles.row}>
        {/* <Carrousel category={'foto8'} width={'60vw'} height={'50vh'} index={2}/> */}
        <Image className={styles.image_row} src={foto_7_3} height="250" alt="catering foto2" />
          <h2 className={styles.frase}>DISTINCIÓN</h2>
        </div>

         <div className={styles.row}>
          <h2 className={styles.frase}>ESTILO</h2>
          {/* <Carrousel category={'foto9'} width={'60vw'} height={'50vh'} index={3}/> */}
          <Image className={styles.image_row} src={foto_7_4} height="250" alt="catering foto3" />
        </div>

        <div className={styles.row}>
          {/* <Carrousel category={'foto10'} width={'60vw'} height={'50vh'} index={1}/> */}
          <Image className={styles.image_row} src={foto_10_2} height="250" alt="catering foto4" />
          <h2 className={styles.frase}>ELABORACIÓN</h2>
        </div>
      </article>
    </section>
  )
}
