import { FacebookSvg, InstagramSvg, MailSvg, MapPinSvg, PhoneSvg } from '../assets/icons/Svg'
import styles from '../styles/Contacto.module.css'
import { Carrousel } from './Carrousel'

export const Contacto = () => {
  return (
    <section id="contacto">

      <article className={styles.contact}>

      {/* <img className={styles.image} src={heroImg} alt="" /> */}
      <Carrousel category={'foto11'} width={'100%'} height={'100vh'} index={3}/>
      <form className={styles.form}>
        <h2 className={styles.form_title}>Tu evento comienza aquí</h2>
        <div className={styles.row}>
          <label htmlFor="">Nombre y Apellido</label>
          <input type="text" />
        </div>
        <div className={styles.row}>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className={styles.row}>
          <label htmlFor="">Telefono</label>
          <input type="text" />
        </div>
        <div className={styles.row}>
          <label htmlFor="">Tipo de Evento</label>
          <input type="text" />
        </div>
        <div className={styles.row}>
          <label htmlFor="">Fecha de Evento</label>
          <input type="text" />
        </div>
        <div className={styles.row}>
          <label htmlFor="">Cant. Invitados</label>
          <input type="text" />
        </div>
        <div className={styles.row_last}>
          <label htmlFor="">Mensaje</label>
          <textarea name="" id="" cols="30" rows="6"></textarea>
        </div>
        <div className={styles.button_container}>
          <button>Enviar</button>
        </div>
      </form>
      </article>

      <article className={styles.data}>
        <div className={styles.data_item}>
          <i ><MapPinSvg /></i>
          <h4 className={styles.title}>Ubicanos</h4>
          <div>
            <p>Av Leandro N Alem 862,</p>
            <p>Bahía Blanca CP 8000,</p>
            <p>LoBuenos Airesem</p>
          </div>
        </div>

        <div className={styles.data_item}>
        <i><PhoneSvg /></i>
          <h4 className={styles.title}>Llamanos</h4>
          <div>
            <p>291 - 4054505</p>
          </div>
        </div>

        <div className={styles.data_item}>
        <i><MailSvg /></i>
          <h4 className={styles.title}>Escribinos</h4>
          <div>
            <p>puntoalemeventos@gmail.com</p>
          </div>
        </div>

        <div className={styles.data_item}>
        <i><InstagramSvg /><FacebookSvg /></i>
          <h4 className={styles.title}>Seguinos</h4>
          <div>
            <p>/punto.alem</p>
            <p>/Puntoalemeventos</p>
          </div>
        </div>

      </article>

      <article>
      <div className={styles.google_map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.4975654690215!2d-62.26956692319346!3d-38.70638397176545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbb55b84f5edf%3A0xa7ff388c796f4ab6!2sPunto%20Alem%20Eventos!5e0!3m2!1ses!2sar!4v1699539545707!5m2!1ses!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </article>

      <Carrousel category={'foto12'} width={'100%'} height={'60vh'} index={3}/>
      {/* <img className={styles.image2} src={heroImg} alt="" /> */}

    </section>
  )
}
