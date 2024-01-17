import Link from "next/link"
import styles from "../styles/_01Navbar.module.css"
import {NavLogo} from "../assets/icons/Svg"
import { CloseSvg, FacebookSvg, InstagramSvg, MenuSvg } from '../assets/icons/Svg'
import Image from "next/image"
import { FramerReveal } from "./FramerReveal"

export const _01Navbar = () => {
  return (
    <FramerReveal 
    className={styles.header}
    options={{from: "top", amount:"20", margin: "0", tag: "header", delay: "0.5"}}    
    >
      <div className={styles.logo_container}>
        <NavLogo />
      </div>

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
          <li style={{ '--i': '5' }}><Link href="#contacto" title="contacto">CONTACTO</Link></li>
        </ul>
      </nav>

      <div className={styles.socials}>
        <a 
          className={styles.icon_container} 
          href="https://www.instagram.com/punto.alem/" 
          target="_blank" 
          title="instagram_de_la_empresa"
        >
            <InstagramSvg />
        </a>
        <a 
          className={styles.icon_container} 
          href="https://www.facebook.com/Puntoalemeventos" 
          target="_blank" 
          title="facebook_de_la_empresa"
        >
          <FacebookSvg className={styles.facebook_svg}/>
        </a>
      </div>

    </FramerReveal>
  )
}