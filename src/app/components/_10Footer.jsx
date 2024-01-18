import Link from 'next/link'
import styles from '../styles/_10Footer.module.css'

export const _10Footer = () => {
  return (
    <div className={styles.footer}><Link href="https://jonatanmissora.netlify.app/" target="_blank" rel="noreferrer" title="katoDev">K@toDev</Link></div>
  )
}
