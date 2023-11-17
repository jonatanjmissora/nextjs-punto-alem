import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.footer}><Link href="https://www.w3schools.com" target="_blank" rel="noreferrer" title="katoDev">K@toDev</Link></div>
  )
}
