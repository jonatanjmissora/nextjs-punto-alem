import Image from 'next/image'
import styles from '../styles/_09Contacto_Form.module.css'
import fotos from "../constant"

export const _09Contacto_Form = () => {

  const sendMail = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const [name, email, telephone, event_type, event_date, event_guests, message] = formData.values();
    const body = `Nombre:   ${name}%0AMail:   ${email}%0ATeléfono:   ${telephone}%0ATipo de evento:   ${event_type}%0AFecha del evento:   ${event_date}%0ACant invitados:   ${event_guests}%0AMensaje:   ${message}`
    
    if (window.screen.width >= 800) {
      window.open(
        `https://mail.google.com/mail/u/0/?fs=1&to=info@puntoalemeventos.com&su=${event_type}&body=${body}&bcc=&tf=cm`,
        "_blank"
      );
    } else {
      window.open(
        `mailto:info@puntoalemeventos.com?subject=${event_type}&body=${body}`,
        "_blank"
      );
    }

    event.target.reset()

  }

  return (
    <section id="contacto">

      <article className={styles.contact_form}>

      <Image 
      className={styles.image1} 
      src={fotos["12"].src} 
      alt={fotos["12"].alt}
      title={fotos["12"].title}
      />
      <form className={styles.form} onSubmit={sendMail}>
        <h2 className={styles.form_title}>Tu evento comienza aquí</h2>
        <div className={styles.row}>
          <label htmlFor="name">Nombre y Apellido</label>
          <input type="text" id="name" name="name" required/>
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div className={styles.row}>
          <label htmlFor="telephone">Telefono</label>
          <input type="text" id="telephone" name="telephone" required/>
        </div>
        <div className={styles.row}>
          <label htmlFor="event_type">Tipo de Evento</label>
          <input type="text" id="event_type" name="event_type" required/>
        </div>
        <div className={styles.row}>
          <label htmlFor="event_date">Fecha de Evento</label>
          <input type="text" id="event_date" name="event_date" required/>
        </div>
        <div className={styles.row}>
          <label htmlFor="event_guests">Cant. Invitados</label>
          <input type="text" id="event_guests" name="event_guests" required/>
        </div>
        <div className={styles.row_last}>
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message" cols="30" rows="6" required></textarea>
        </div>
        <div className={styles.button_container}>
          <button type='submit'>Enviar</button>
        </div>
      </form>
      </article>

   
    </section>
  )
}
