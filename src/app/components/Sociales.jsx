import Image from 'next/image'
import styles from '../styles/Sociales.module.css'
import foto_4_1 from "../assets/foto_4_1.jpg"
import { Carrousel } from './Carrousel'

export const Sociales = () => {
  return (
    <section className={styles.sociales} id="sociales">
      {/* <Carrousel category={'foto4'} width={'100%'} height={'80vh'} index={0}/> */}
      <Image className={styles.image} src={foto_4_1} height="415" alt="sociales foto" />
      <div className={styles.text_container}>
        <h3 className={styles.title}>Sociales</h3>
        <p>Punto Alem es el lugar para vivir tu evento soñado. Podrás disfrutar de las más variadas celebraciones: desde casamientos, fiestas de quince hasta Bar Mitzvah, aniversarios, cumpleaños. Cualquier evento se convierte en un momento lleno de magia.</p>
        <p>El jardín te ofrece un espacio al aire libre y natural, donde podrás respirar aire fresco y disfrutar del verde. Árboles, plantas y  luces crean un ambiente mágico, que hará que tu evento sea inolvidable y muy especial. Ademá contamos con un ambiente especial
ambientado para celebrar bodas.</p>
      </div>
    </section>
  )
}
