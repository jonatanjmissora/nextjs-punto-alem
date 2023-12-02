import Image from 'next/image'
import { FacebookSvg, InstagramSvg, MailSvg, MapPinSvg, PhoneSvg } from '../assets/icons/Svg'
import styles from '../styles/_09Contacto.module.css'
import fotos from "../constant"
import { FramerReveal } from './FramerReveal'

export const _09Contacto = () => {
  return (
    <section id="contacto">

      <article className={styles.contact}>

      <Image 
      className={styles.image1} 
      src={fotos["12"].src} 
      alt={fotos["12"].alt}
      title={fotos["12"].title}
      />
      <form className={styles.form}>
        <h2 className={styles.form_title}>Tu evento comienza aquí</h2>
        <div className={styles.row}>
          <label htmlFor="name">Nombre y Apellido</label>
          <input type="text" id="name" name="name"/>
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email"/>
        </div>
        <div className={styles.row}>
          <label htmlFor="telephone">Telefono</label>
          <input type="text" id="telephone" name="telephone"/>
        </div>
        <div className={styles.row}>
          <label htmlFor="event_type">Tipo de Evento</label>
          <input type="text" id="event_type" name="event_type"/>
        </div>
        <div className={styles.row}>
          <label htmlFor="event_date">Fecha de Evento</label>
          <input type="text" id="event_date" name="event_date"/>
        </div>
        <div className={styles.row}>
          <label htmlFor="event_guests">Cant. Invitados</label>
          <input type="text" id="event_guests" name="event_guests"/>
        </div>
        <div className={styles.row_last}>
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message" cols="30" rows="6"></textarea>
        </div>
        <div className={styles.button_container}>
          <button>Enviar</button>
        </div>
      </form>
      </article>

      <article className={styles.data}>

        <FramerReveal
          className={styles.data_item}
          options={{from: "bottom", amount:"60", margin: "-20", delay: "0"}}
        >
          <i ><MapPinSvg /></i>
          <h3 className={styles.title}>Ubicanos</h3>
          <div>
            <p>Av Leandro N Alem 862,</p>
            <p>Bahía Blanca CP 8000,</p>
            <p>LoBuenos Airesem</p>
          </div>
        </FramerReveal>

        <FramerReveal
          className={styles.data_item}
          options={{from: "bottom", amount:"60", margin: "-20", delay: "0.25"}}
        >
          <i><PhoneSvg /></i>
          <h3 className={styles.title}>Llamanos</h3>
          <div>
            <p>291 - 4054505</p>
          </div>
        </FramerReveal>

        <FramerReveal
          className={styles.data_item}
          options={{from: "bottom", amount:"60", margin: "-20", delay: "0.5"}}
        >
          <i className={styles.mail_icon}><MailSvg /></i>
          <h3 className={styles.title}>Escribinos</h3>
          <div>
            <p><a href="https://mail.google.com/mail/u/0/?fs=1&to=info@puntoalemeventos.com&su=&body=&bcc=&tf=cm" >info@puntoalemeventos.com</a></p>
          </div>
        </FramerReveal>

        <FramerReveal
          className={styles.data_item}
          options={{from: "bottom", amount:"60", margin: "-20", delay: "0.75"}}
        >
          <div className={styles.socials}>
            <i><InstagramSvg /></i>
            <i><FacebookSvg className={styles.facebook_svg}/></i>
          </div>
          {/* <i><InstagramSvg /><FacebookSvg /></i> */}
          <h3 className={styles.title}>Seguinos</h3>
          <div>
            <p><a href="https://www.instagram.com/punto.alem/" target="_blank">/punto.alem</a></p>
            <p><a href="https://www.facebook.com/Puntoalemeventos" target="_blank">/Puntoalemeventos</a></p>
          </div>
        </FramerReveal>

      </article>

      <article>
      <div className={styles.google_map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.4975654690215!2d-62.26956692319346!3d-38.70638397176545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbb55b84f5edf%3A0xa7ff388c796f4ab6!2sPunto%20Alem%20Eventos!5e0!3m2!1ses!2sar!4v1699539545707!5m2!1ses!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="google maps location"></iframe>
      </div>
      </article>
      <div className={styles.image2_container}>
      <Image 
        className={styles.image2} 
        src={fotos["13"].src} 
        alt={fotos["13"].alt}
        title={fotos["13"].title}
      />
      </div>
    </section>
  )
}
