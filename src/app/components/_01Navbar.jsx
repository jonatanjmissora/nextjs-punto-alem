import Link from "next/link"
import styles from "../styles/_01Navbar.module.css"
import NavLogo from "../assets/NavLogo.svg"
import { CloseSvg, FacebookSvg, InstagramSvg, MenuSvg } from '../assets/icons/Svg'
import Image from "next/image"
import { FramerReveal } from "./FramerReveal"

export const _01Navbar = () => {
  return (
    <FramerReveal 
    className={styles.header}
    options={{from: "top", amount:"20", margin: "0", tag: "header", delay: "1"}}    
    >
      <Image 
        className={styles.logo} 
        src={NavLogo} 
        title="navbar_logo"
        alt="menu logo" 
      />

      <input type="checkbox" id="hamb" className={styles.hamb}/>
      <label htmlFor="hamb" className={styles.icons}>
        <i className={styles.menu}><MenuSvg /></i>
        <i className={styles.close}><CloseSvg /></i>
      </label>

      <nav >
        <ul className={styles.navList}>
          <li style={{ '--i': '0' }}><Link href="#inicio" title="inicio">INICIO</Link></li>
          <li style={{ '--i': '1' }}><Link href="#nosotros" title="nosotros">NOSOTROS</Link></li>
          <li style={{ '--i': '2' }}><Link href="#sociales" title="sociales">SOCIALES</Link></li>
          <li style={{ '--i': '3' }}><Link href="#corporativos" title="corporativos">CORPORATIVOS</Link></li>
          <li style={{ '--i': '4' }}><Link href="#catering" title="catering">CATERING</Link></li>
          <li style={{ '--i': '5' }}><Link href="/galeria" title="galeria">GALERIA</Link></li>
          <li style={{ '--i': '6' }}><Link href="#contacto" title="contacto">CONTACTO</Link></li>
        </ul>
      </nav>

      <div className={styles.socials}>
        <a href="https://www.instagram.com/punto.alem/" target="_blank"><InstagramSvg /></a>
        <a href="https://www.facebook.com/Puntoalemeventos" target="_blank"><FacebookSvg /></a>
      </div>

    </FramerReveal>
  )
}