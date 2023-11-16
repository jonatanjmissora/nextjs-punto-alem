import Image from 'next/image'
import HeroLogo from '../assets/HeroLogo.svg'
import styles from '../styles/Hero.module.css'
import foto_1_5 from "../assets/foto_1_5.jpg"
import { Carrousel } from './Carrousel'

export const Hero = () => {
  return (
    <section className={styles.hero} id="inicio">
      {/*<Carrousel category={'foto1'} width={'100%'} height={'55vh'} index={2}/>*/}
      <Image className={styles.image} src={foto_1_5} height="275" alt="hero foto"/>
      <div className={styles.text_container}>
        <Image className={styles.logo} src={HeroLogo} height="250" alt="hero logo" />
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
