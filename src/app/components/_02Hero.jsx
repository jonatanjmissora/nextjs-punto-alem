import Image from 'next/image'
import HeroLogo from '../assets/HeroLogo.svg'
import styles from '../styles/_02Hero.module.css'
import fotos from "../constant"
import { FramerReveal } from './FramerReveal'


export const _02Hero = () => {
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
        <FramerReveal 
          options={{from: "top", amount:"100", delay: "0"}}
        >
          <Image 
          className={styles.logo} 
          src={HeroLogo} 
          height="150" 
          title="hero_logo"
          alt="hero logo" 
          />
        </FramerReveal>
        <h1 className={styles.title}>Punto Alem</h1>
        <h4 className={styles.sub_title}>EVENTOS & CATERING</h4>
        <FramerReveal 
          lassName={styles.footer}
          options={{from: "top", amount:"20", delay: "1"}}
        >
          <span>Salon</span>
          <span>-</span>
          <span>Livings</span>
          <span>-</span>
          <span>Jardin</span>
          <span>-</span>
          <span>Aire Libre</span>
        </FramerReveal>
      </div>
    </section>
  )
}
