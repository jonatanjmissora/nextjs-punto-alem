import Image from 'next/image'
import styles from '../styles/Sociales.module.css'
import fotos from "../constant"

export const Sociales = () => {
  return (
    <section className={styles.sociales} id="sociales">
      <Image 
      className={styles.image} 
      src={fotos["06"].foto} 
      height="415" 
      alt={fotos["06"].alt}
        title={fotos["06"].title}
      />
      <div className={styles.text_container}>
        <h3 className={styles.title}>Sociales</h3>
        <p>Punto Alem es el lugar para vivir tu evento soñado. Podrás disfrutar de las más variadas celebraciones: desde casamientos, fiestas de quince hasta Bar Mitzvah, aniversarios, cumpleaños. Cualquier evento se convierte en un momento lleno de magia.</p>
        <p>El jardín te ofrece un espacio al aire libre y natural, donde podrás respirar aire fresco y disfrutar del verde. Árboles, plantas y  luces crean un ambiente mágico, que hará que tu evento sea inolvidable y muy especial. Ademá contamos con un ambiente especial
ambientado para celebrar bodas.</p>
      </div>
    </section>
  )
}
