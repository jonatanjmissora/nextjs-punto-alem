import Image from 'next/image'
import HeroLogo from '../assets/HeroLogo.svg'
import styles from '../styles/_02Hero.module.css'
import fotos from "../constant"
import { FramerReveal } from './FramerReveal'


export const _02Hero = () => {
  return (
    <section className={styles.hero} id="inicio">

      <FramerReveal 
          options={{from: "none", amount:"0", duration: "4"}}
          >
      <div className={styles.image_container}>
        <Image 
          className={styles.image} 
          src={fotos["01"].foto} 
          alt={fotos["01"].alt}
          title={fotos["01"].title}
          />
      </div>
      </FramerReveal>

      <div className={styles.text_container}>
        <FramerReveal 
          options={{from: "top", duration: "2"}}
        >
          <Image 
          className={styles.logo} 
          src={HeroLogo} 
          title="hero_logo"
          alt="hero logo" 
          />
        </FramerReveal>
        <h1 className={styles.title}>Punto Alem</h1>
        <h4 className={styles.sub_title}>EVENTOS & CATERING</h4>
        <FramerReveal 
          className={styles.footer}
          options={{from: "bottom", amount:"20", delay: "1", margin: "0"}}
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
