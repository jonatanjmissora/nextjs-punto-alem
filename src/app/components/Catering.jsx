import Image from 'next/image'
import styles from '../styles/Catering.module.css'
import fotos from "../constant"

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
        <Image 
        className={styles.image1} 
        src={fotos["12"].foto} 
        height="350" 
        alt={fotos["12"].alt}
        title={fotos["12"].title}
         />
        </div>

      </article>
      <article>
        <div className={styles.row}>
        <Image 
        className={styles.image_row} 
        src={fotos["13"].foto} 
        height="250" 
        alt={fotos["13"].alt}
        title={fotos["13"].title} 
        />
        
          <h2 className={styles.frase}>DISTINCIÓN</h2>
        </div>

         <div className={styles.row}>
          <h2 className={styles.frase}>ESTILO</h2>
          <Image 
          className={styles.image_row} 
          src={fotos["14"].foto} 
          height="250" 
          alt={fotos["14"].alt}
          title={fotos["14"].title}
          />
        </div>

        <div className={styles.row}>
          <Image 
          className={styles.image_row} 
          src={fotos["19"].foto} 
          height="250" 
          alt={fotos["19"].alt}
        title={fotos["19"].title}
          />
          <h2 className={styles.frase}>ELABORACIÓN</h2>
        </div>
      </article>
    </section>
  )
}
