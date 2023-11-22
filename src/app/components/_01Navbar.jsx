import Link from "next/link"
import styles from "../styles/_01Navbar.module.css"
import NavLogo from "../assets/NavLogo.svg"
import { CloseSvg, MenuSvg } from '../assets/icons/Svg'
import Image from "next/image"

export const _01Navbar = () => {
  return (
    <header className={styles.header}>
      <Image 
      className={styles.logo} 
      src={NavLogo} 
      title="navbar_logo"
      alt="menu logo" 
      height="163" 
      width="150"
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
        <li style={{ '--i': '5' }}><Link href="#contacto" title="contacto">CONTACTO</Link></li>
      </ul>
      </nav>
      {/*  */}
    </header>
  )
}