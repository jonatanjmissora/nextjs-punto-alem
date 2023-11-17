import Image from 'next/image'
import HeroLogo from '../assets/HeroLogo.svg'
import styles from '../styles/Hero.module.css'
import fotos from "../constant"


export const Hero = () => {
  return (
    <section className={styles.hero} id="inicio">
      <Image 
      className={styles.image} 
      src={fotos["03"].foto} 
      height="540" 
      alt={fotos["03"].alt}
      title={fotos["03"].title}
      />
      <div className={styles.text_container}>
        <Image 
        className={styles.logo} 
        src={HeroLogo} 
        height="150" 
        title="hero_logo"
        alt="hero logo" 
        />
        <h1 className={styles.title}>Punto Alem</h1>
        <h4 className={styles.sub_title}>EVENTOS & CATERING</h4>
        <div className={styles.footer}>
          <span>Salon</span>
          <span>-</span>
          <span>Livings</span>
          <span>-</span>
          <span>Jardin</span>
          <span>-</span>
          <span>Aire Libre</span>
        </div>
      </div>
    </section>
  )
}
