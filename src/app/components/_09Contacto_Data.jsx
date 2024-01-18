import { FacebookSvg, InstagramSvg, MailSvg, MapPinSvg, PhoneSvg } from '../assets/icons/Svg'
import styles from '../styles/_09Contacto_Data.module.css'
import { FramerReveal } from './FramerReveal'

export const _09Contacto_Data = () => {

  return (
    <section className="contacto_data">

      <article className={styles.data}>

        <FramerReveal
          className={styles.data_item}
          options={{from: "bottom", amount:"60", margin: "-20", delay: "0"}}
        >
          <div className={styles.data_item_row}>
            <a 
              className={styles.icon} 
              href="https://maps.app.goo.gl/FuTkt3hptixiTBSw5" 
              title="maps_location" 
              target="_blank"
              >
              <MapPinSvg />
            </a>
            <h3 className={styles.title}>Ubicanos</h3>
          </div>
          <div className={styles.data_item_col}>
            <p>Av Leandro N Alem 862,</p>
            <p>Bahía Blanca CP 8000,</p>
            <p>Buenos Aires</p>
          </div>
        </FramerReveal>

        <FramerReveal
          className={styles.data_item}
          options={{from: "bottom", amount:"60", margin: "-20", delay: "0.25"}}
        >
          <div className={styles.data_item_row}>
            <a 
              className={styles.icon} 
              href="https://wa.me/+5492914054505" 
              title="numero_telefonico" 
              target="_blank"
            >
              <PhoneSvg />
            </a>
            <h3 className={styles.title}>Llamanos</h3>
          </div>
          <div className={styles.data_item_col}>
            <p>
              <a 
              href="https://wa.me/+5492914054505" 
              title="numero_telefonico" 
              target="_blank"
              >
                291 - 4054505
              </a>
            </p>
          </div>
        </FramerReveal>

        <FramerReveal
          className={styles.data_item}
          options={{from: "bottom", amount:"60", margin: "-20", delay: "0.5"}}
        >
          <div className={styles.data_item_row_mail}>
            <a 
              className={styles.mailto_icon_desktop} 
              href="https://mail.google.com/mail/u/0/?fs=1&to=info@puntoalemeventos.com&su=&body=&bcc=&tf=cm" 
              title="mail_de_la_empresa" 
              target="_blank"
            >
              <MailSvg />
            </a>
            <a 
              className={styles.mailto_icon_movil} 
              href="mailto:info@puntoalemeventos.com" 
              title="mail_de_la_empresa" 
              target="_blank"
            >
              <MailSvg />
            </a>
            <h3 className={styles.title}>Escribinos</h3>
          </div>
          <div className={styles.data_item_col}>
            <p>
              <a 
                className={styles.mailto_desktop}
                href="https://mail.google.com/mail/u/0/?fs=1&to=info@puntoalemeventos.com&su=&body=&bcc=&tf=cm"
                target="_blank" 
                title="mail_de_la_empresa"
              >
                info@puntoalemeventos.com
              </a>
              <a
                className={styles.mailto_movil} 
                href="mailto:info@puntoalemeventos.com"
                target="_blank" 
                title="mail_de_la_empresa_movil"
              >
                info@puntoalemeventos.com
              </a>
            </p>
          </div>
        </FramerReveal>

        <FramerReveal
          className={styles.data_item}
          options={{from: "bottom", amount:"60", margin: "-20", delay: "0.75"}}
        >
          <div className={styles.data_item_row}>
            <div className={styles.socials}>
              <a 
                className={styles.icon} href="https://www.instagram.com/punto.alem/" 
                title="instagram" 
                target="_blank"
              >
                <InstagramSvg />
              </a>
              <a 
                className={styles.icon} 
                href="https://www.facebook.com/Puntoalemeventos" 
                title="facebook" 
                target="_blank"
              >
                <FacebookSvg 
                className={styles.facebook_svg}
                />
              </a>
            </div>
            <h3 className={styles.title}>Seguinos</h3>
          </div>
          <div className={styles.data_item_col}>
            <p>
              <a 
                href="https://www.instagram.com/punto.alem/" 
                target="_blank" 
                title="instagram_de_la_empresa"
              >
                /punto.alem
              </a>
            </p>

            <p>
              <a 
                href="https://www.facebook.com/Puntoalemeventos" 
                target="_blank" 
                title="facebook_de_la_empresa"
              >
                /Puntoalemeventos
              </a>
            </p>
          </div>
        </FramerReveal>

      </article>

      
    </section>
  )
}
