import Image from 'next/image'
import HeroLogo from '../assets/HeroLogo.svg'
import styles from '../styles/_02Hero.module.css'
import fotos from "../constant"
import { FramerReveal } from './FramerReveal'
// import foto1 from "../assets/foto1.jpg"


export const _02Hero = () => {
  return (
    <section className={styles.hero} id="inicio">

      {/* <FramerReveal 
          options={{from: "none", amount:"0", duration: "4"}}
      > */}
        <div className={styles.image_container_bg}>
          <div className={styles.image_container}>
          </div>
        </div>
      {/* </FramerReveal> */}

      <div className={styles.text_container}>
        <FramerReveal 
          className={styles.logo_container}
          options={{from: "top", duration: "1"}}
        >
            <Image 
            className={styles.logo} 
            src={HeroLogo} 
            title="hero_logo"
            alt="hero logo" 
            width="100"
            height="40"
            />
        </FramerReveal>
        <h1 className={styles.title}>Punto Alem</h1>
        <h2 className={styles.sub_title}>EVENTOS & CATERING</h2>
        <FramerReveal 
          className={styles.footer}
          options={{from: "bottom", amount:"20", delay: "0.5", margin: "0"}}
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
